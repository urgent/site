import React, { useState, useCallback, useRef } from "react";
import Message from "./Message"
import Editor from './Editor';
import { Grid } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation'
import useStore from "../utils/store";
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

const DeleteMessageMutation = graphql`
  mutation TilesDeleteMessageMutation($input:DeleteMessageInput!, $connections: [ID!]!) {
    deleteMessage(input: $input) {
      message {
        id @deleteEdge(connections: $connections)
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
  const [isDeleteMessagePending, deleteMessage] = useMutation(DeleteMessageMutation);
  const [editMessage, setEditMessage] = useState(false)
  const [message] = useStore((state) => state.message);
  const focusMessage = useStore((state) => state.focusMessage);
  const edit = useStore((state) => state.edit);


  // Toolbar on edit
  const onEdit = useCallback((messageId, collectionId, content) => {
    if (edit && editMessage) {
      // turn off edit mode
      setEditMessage(false)
      setEditorText('')
    } else {
      setEditMessage(true)
      focusMessage([messageId, collectionId])
      setEditorText(content)
    }
  }, [edit, editMessage, setEditMessage, setEditorText, focusMessage])

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

      {edit && editMessage && messages.allMessages.edges.filter((edge) => edge.node.rowId === message).map(edge => {
        let messageContent;
        try {
          messageContent = JSON.parse(edge.node.content);
        } catch (e) {
          messageContent = edge.node.content;
        }
        return <Message
          key={edge.node.rowId}
          tags={edge.node.messageTagsByMessageId}
          id={edge.node.rowId}
          onEdit={onEdit}
          onDelete={onDelete}
          toolbar={true}
          organizationId={edge.node.organizationId}
          editActive={editMessage && message === edge.node.rowId}
        >
          {<ReactQuill value={messageContent} modules={{ toolbar: false }} readOnly={true} theme="bubble" />}
        </Message>
      })}


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
        <Editor value={editorText} onChange={setEditorText} editMessage={editMessage} setEditMessage={setEditMessage} tileConnections={messages?.allMessages?.__id} setEditorText={setEditorText} >
        </Editor>
      </Message>
    </Grid>)
}