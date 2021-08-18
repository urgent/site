import React, { useState, useCallback, useRef } from "react";
import Message from "./Message"
import Editor from './Editor';
import { Grid } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation'
import useStore from "../utils/store";
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

const messageFragment = graphql`
          fragment TilesFragment_messages on Query {
            allMessages {
              __id
              @connection(key: "pagesFragment_allMessages")
              edges {
                node {
                  rowId
                  content
                  organizationId
                  messageTagsByMessageId {
                    __id
                    edges {
                      node {
                        __id
                        tagId
                        messageId
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
          }
`;

export default function Tiles({ query }) {
  const [editorText, setEditorText] = useState('');
  const messages = useFragment(messageFragment, query);
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
  const [isUpdateMessagePending, updateMessage] = useMutation(UpdateMessageMutation);
  const [isDeleteMessagePending, deleteMessage] = useMutation(DeleteMessageMutation);
  const [editMessage, setEditMessage] = useState(false)
  const [message] = useStore((state) => state.message);
  const focusMessage = useStore((state) => state.focusMessage);
  const edit = useStore((state) => state.edit);
  const organization = useStore((state) => state.organization);
  const editorRef = useRef(null)

  // Editor submit
  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const delta = JSON.stringify(editorRef.current.getEditor().getContents());
    if (edit && editMessage) {
      updateMessage({
        variables: {
          input: {
            id: message,
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
            organizationId: organization,
            content: delta,
            tags: [],
          },
          connections: [messages?.allMessages?.__id]
        },
        updater: store => { },
      });
      // Reset the comment text
      setEditorText('');
    }
  },
    [editorRef, edit, editMessage, updateMessage, message, setEditMessage, editorText, insertMessage, organization, messages, setEditorText]);

  // Toolbar on edit
  const onEdit = useCallback((messageId, collectionId, content) => {
    if (edit && editMessage) {
      // turn off edit mode
      setEditMessage(false)
      setEditorText('')
    } else {
      // run edit
      setEditMessage(true)
      focusMessage([messageId, collectionId])
      setEditorText(content)
    }
  }, [setEditMessage, setEditorText, focusMessage])

  // Toolbar on delete
  const onDelete = useCallback((messageId, collectionId) => {
    deleteMessage({
      variables: {
        input: {
          messageId: messageId,
        },
        connections: [messages?.allMessages.__id]
      },
      updater: store => { },
    });
    setEditMessage(false);
  }, [deleteMessage, messages, setEditMessage])

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

      {edit && editMessage && messages.allMessages.edges.filter((edge) => edge.node.rowId === message).map(edge => <Message
        key={edge.node.rowId}
        tags={edge.node.messageTagsByMessageId}
        id={edge.node.rowId}
        onEdit={onEdit}
        onDelete={onDelete}
      >
        {<ReactQuill value={messageContent} modules={{ toolbar: false }} readOnly={true} theme="bubble" />}
      </Message>)}

      {!(edit && editMessage) && messages.allMessages.edges?.map((edge) => {
        let messageContent;
        try {
          messageContent = JSON.parse(edge.node.content);
        } catch (e) {
          messageContent = edge.node.content;
        }
        return (
          <Message
            key={edge.node.rowId}
            tags={edge.node.messageTagsByMessageId}
            id={edge.node.rowId}
            onEdit={onEdit}
            onDelete={onDelete}
            toolbar={true}
            organizationId={edge.node.organizationId}
          >
            {<ReactQuill value={messageContent} modules={{ toolbar: false }} readOnly={true} theme="bubble" />}
          </Message>
        )
      })
      }

      <Message toolbar={false}>
        <Editor value={editorText} onChange={setEditorText} onSubmit={onSubmit} editorRef={(el) => editorRef.current = el}>
        </Editor>
      </Message>
    </Grid>)
}