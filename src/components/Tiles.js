import React, { useState, useCallback, useRef } from 'react';
import Message from './Message';
import Editor from './Editor';
import { Box, Grid } from '@chakra-ui/react';
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation';
import useStore from '../utils/store';

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
  const setEditorValue = useStore((state) => state.setEditorValue);
  const messages = useFragment(messageFragment, query);
  const [isDeleteMessagePending, deleteMessage] = useMutation(DeleteMessageMutation);
  const editMessage = useStore((state) => state.editMessage);
  const setEditMessage = useStore((state) => state.setEditMessage);
  const [message] = useStore((state) => state.message);
  const focusMessage = useStore((state) => state.focusMessage);
  const edit = useStore((state) => state.edit);


  // Toolbar on edit
  const onEdit = useCallback((messageId, collectionId, content) => {
    if (edit && editMessage) {
      // turn off edit mode
      setEditMessage(false)
      setEditorValue('')
    } else {
      setEditMessage(true)
      focusMessage([messageId, collectionId])
      setEditorValue(content)
    }
  }, [edit, editMessage, setEditMessage, setEditorValue, focusMessage])

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
      gridTemplateColumns={["1", "1", "1", "repeat(auto-fit, minmax(120px, 2fr))", "repeat(auto-fit, minmax(120px, 2fr))"]}
      gridGap="5px"
      gridAutoRows={"100px"}
      gridAutoFlow="dense"
      data-cy="tiles"
    >
      {<>{messages?.allMessages?.edges?.map((edge) => {
        return (
          <Message
            key={edge.node.rowId}
            tags={edge.node.messageTagsByMessageId}
            id={edge.node.rowId}
            onEdit={onEdit}
            onDelete={onDelete}
            toolbar={true}
            organizationId={edge.node.organizationId}
            value={edge.node.content}
            editActive={editMessage && message === edge.node.rowId}
          >
            {edit && editMessage && edge.node.rowId === message && <Editor tileConnections={messages?.allMessages?.__id} />}
            {(!(edit && editMessage) || edge.node.rowId !== message) && <Box whiteSpace="pre-wrap" wordBreak="break-word">{edge.node.content}</Box>}
          </Message>
        )
      })}
        {!(edit && editMessage) && <Message toolbar={false}>
          <Editor tileConnections={messages?.allMessages?.__id} />
        </Message>}
      </>
      }


    </Grid>)
}