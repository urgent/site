import React, { useState, useCallback, useRef } from "react";
import Message from "./Message"
import Editor from './Editor';
import { Grid } from "@chakra-ui/react"
import { graphql } from 'react-relay';
import useMutation from './useMutation'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;


const InsertMessageMutation = graphql`
  mutation TilesInsertMessageMutation($input:CreateMessageInput!, $connections: [ID!]!) {
    createMessage(input: $input) {
      messages @appendNode(connections: $connections, edgeTypeName: "MessagesEdge") {
        rowId
        content
        organizationId
        messageTagsByMessageId {
            __id
            edges {
              node {
                __id
                tagId
                tagByTagId {
                  __id
                  rowId
                  name
                  categoryByCategoryId {
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
`;

const DeleteMessageMutation = graphql`
  mutation TilesDeleteMessageMutation($input:DeleteMessageInput!, $connections: [ID!]!) {
    deleteMessage(input: $input) {
      message {
        id @deleteEdge(connections: $connections)
      }
    }
  }
`;

const UpdateMessageMutation = graphql`
  mutation TilesUpdateMessageMutation($input:UpdateMessageInput!) {
    updateMessage(input: $input) {
      messages {
        rowId
        content
        organizationId
        messageTagsByMessageId {
            __id
            edges {
              node {
                __id
                tagId
                tagByTagId {
                  __id
                  rowId
                  name
                  categoryByCategoryId {
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
`;

/**
 * Format input as nodes consistent with Relay query
 * 
 * @param {*} nodes 
 * @returns 
 */
export function format(nodes) {
  return {
    "edges": nodes
  }
}


/**
 * Filter messages per selected tags, app edit mode, message edit mode
 * @param { Object[] } messages Relay result
 * @param { Number[] } tagFilter Tag IDs 
 * @param { Boolean } edit App edit mode status
 * @param { Number } focusedMessage ID of message where edit button was clicked
 * @param { Boolean } messageMode Message edit mode status
 * @returns { Object[] } Relay result filtered per app controls
 */
export function filter(messages, tagFilter, edit, focusedMessage, editMessage, focusedOrganization) {
  if (edit && editMessage) {
    // message in edit mode. hide all messages not being edited
    const [messageId] = focusedMessage;
    const nodes = messages.edges.filter((edge) => edge.node.rowId === messageId)
    return format(nodes)
  }


  const nodes = messages?.edges?.filter((edge) => {
    if (edge.node.organizationId !== focusedOrganization) {
      // different organization
      return false;
    }
    if (!Array.isArray(edge.node.messageTagsByMessageId?.edges)) {
      // no tags, can't match tagFilter
      return false;
    }
    else if (edge.node.messageTagsByMessageId?.edges === []) {
      // empty tags, can't match tagFilter
      return false;
    }
    else {
      return edge.node.messageTagsByMessageId?.edges.every(edge => {
        return tagFilter.includes(edge.node.tagByTagId?.rowId)
      })
    }
  })

  // so filtered data has same structure as unfiltered data
  return format(nodes)
}

export default function Tiles({ edit, messages, tagFilter, focusedMessage, setFocusedMessage, focusedOrganization }) {
  const [editorText, setEditorText] = useState('');
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
  const [isUpdateMessagePending, updateMessage] = useMutation(UpdateMessageMutation);
  const [isDeleteMessagePending, deleteMessage] = useMutation(DeleteMessageMutation);
  const [editMessage, setEditMessage] = useState(false)

  const editorRef = useRef(null)

  // Editor submit
  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const delta = JSON.stringify(editorRef.current.getEditor().getContents());
    if (edit && editMessage) {
      const [messageId] = focusedMessage;
      updateMessage({
        variables: {
          input: {
            id: messageId,
            content: delta,
          },
        },
        updater: store => { },
      });
      setEditMessage(false)
    } else {
      insertMessage({
        variables: {
          input: {
            organizationId: focusedOrganization,
            content: delta,
            tags: tagFilter,
          },
          connections: [messages?.__id]
        },
        updater: store => { },
      });
      // Reset the comment text
      setEditorText('');
    }
  },
    [editorText, setEditorText, insertMessage]);

  // Toolbar on edit
  const onEdit = useCallback((messageId, collectionId, content) => {
    if (edit && editMessage) {
      // turn off edit mode
      setEditMessage(false)
      setEditorText('')
    } else {
      // run edit
      setEditMessage(true)
      setFocusedMessage([messageId, collectionId])
      setEditorText(content)
    }
  }, [setEditMessage, setEditorText, setFocusedMessage])

  // Toolbar on delete
  const onDelete = useCallback((messageId, collectionId) => {
    deleteMessage({
      variables: {
        input: {
          messageId: messageId,
        },
        connections: [messages?.__id]
      },
      updater: store => { },
    });
    setEditMessage(false);
  }, [deleteMessage,])

  // message filters

  const editFilter = useCallback(edge => {

  }, [edit, editMessage])

  return (
    <Grid
      gridTemplateColumns={[
        "repeat(auto-fit, minmax(200px, 2fr))",
        "repeat(auto-fit, minmax(200px, 2fr))",
        "repeat(auto-fit, minmax(400px, 2fr))",
        "repeat(auto-fit, minmax(400px, 2fr))",
        "repeat(auto-fit, minmax(400px, 2fr))"]}
      gridGap="5px"
      gridAutoRows={["200px", "300px", "400px", "400px", "400px"]}
      gridAutoFlow="dense"
      data-cy="tiles"
    >

      {// message in edit mode. hide all messages not being edited
        edit && editMessage && messages.edges.filter((edge) => edge.node.rowId === focusedMessage[0]).map(edge => <Message
          key={edge.node.rowId}
          edit={true}
          tags={edge.node.messageTagsByMessageId}
          id={edge.node.rowId}
          setFocusedMessage={setFocusedMessage}
          onEdit={onEdit}
          onDelete={onDelete}
          gridColumn={["span 2", "span 2", "span 2", "auto", "auto"]}
          gridRow={["span 2", "span 2", "span 2", "auto", "auto"]}
        >
          {<ReactQuill value={messageContent} modules={{ toolbar: false }} readOnly={true} theme="bubble" />}
        </Message>)}

      {!(edit && editMessage) && tagFilter.length > 0 && messages.edges.filter((edge) => {
        if (edge.node.organizationId !== focusedOrganization) {
          // different organization
          return false;
        }
        if (!Array.isArray(edge.node.messageTagsByMessageId?.edges)) {
          // no tags, can't match tagFilter
          return false;
        }
        else if (edge.node.messageTagsByMessageId?.edges === []) {
          // empty tags, can't match tagFilter
          return false;
        }
        else {
          return edge.node.messageTagsByMessageId?.edges.some(tag => {
            return tagFilter.includes(tag.node.tagByTagId?.rowId)
          })
        }
      }).map((edge) => {
        let messageContent;
        try {
          messageContent = JSON.parse(edge.node.content);
        } catch (e) {
          messageContent = edge.node.content;
        }
        return (
          <Message
            key={edge.node.rowId}
            edit={edit}
            tags={edge.node.messageTagsByMessageId}
            id={edge.node.rowId}
            setFocusedMessage={setFocusedMessage}
            onEdit={onEdit}
            onDelete={onDelete}
            gridColumn={["span 2", "span 2", "span 2", "auto", "auto"]}
            gridRow={["span 2", "span 2", "span 2", "auto", "auto"]}
          >
            {<ReactQuill value={messageContent} modules={{ toolbar: false }} readOnly={true} theme="bubble" />}
          </Message>
        )
      })
      }

      {!(edit && editMessage) && tagFilter.length === 0 && messages.edges?.map((edge) => {
        let messageContent;
        try {
          messageContent = JSON.parse(edge.node.content);
        } catch (e) {
          messageContent = edge.node.content;
        }
        return (
          <Message
            key={edge.node.rowId}
            edit={edit}
            tags={edge.node.messageTagsByMessageId}
            id={edge.node.rowId}
            setFocusedMessage={setFocusedMessage}
            onEdit={onEdit}
            onDelete={onDelete}
            gridColumn={["span 2", "span 2", "span 2", "auto", "auto"]}
            gridRow={["span 2", "span 2", "span 2", "auto", "auto"]}
          >
            {<ReactQuill value={messageContent} modules={{ toolbar: false }} readOnly={true} theme="bubble" />}
          </Message>
        )
      })
      }


      <Message gridColumn="span 2" gridRow="span 2">
        <Editor value={editorText} onChange={setEditorText} onSubmit={onSubmit} editorRef={(el) => editorRef.current = el}>
        </Editor>
      </Message>
    </Grid>)
}