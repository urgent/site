import React from 'react';
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
fragment TilesFragment_messages on Query
@argumentDefinitions(organization: {type: "Int"}, tag:{type: "[Int]"}) {
  tile(organizationId: $organization, tagId: $tag) {
    edges {
      node {
        rowId
        content
        loomSharedUrl
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
  function onEdit(messageId, collectionId, content) {
    if (edit && editMessage) {
      // turn off edit mode
      setEditMessage(false)
      setEditorValue('')
    } else {
      setEditMessage(true)
      focusMessage([messageId, collectionId])
      setEditorValue(content)
    }
  }

  // Toolbar on delete
  function onDelete(messageId, collectionId) {
    deleteMessage({
      variables: {
        input: {
          messageId: messageId,
        },
        connections: [messages?.
          __id]
      },
      updater: store => { },
    });
    setEditMessage(false);
  }

  return (
    <Box
      sx={{ columnCount: "4" }}
      columnGap="1em"
      data-cy="tiles"
    >
      {<>{messages?.tile.edges?.map((edge) => {
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
            loomSharedUrl={edge.node.loomSharedUrl}
            editActive={editMessage && message === edge.node.rowId}
          >
            {edit && editMessage && edge.node.rowId === message && <Editor tileConnections={messages?.allMessages?.__id} />}
            {(!(edit && editMessage) || edge.node.rowId !== message) && <Box whiteSpace="pre-wrap" wordBreak="break-word">{edge.node.content}</Box>}
          </Message>
        )
      })}
        {!(edit && editMessage) && <Message toolbar={false} sx={{ display: "block", columnSpan: "all" }}>
          <Editor tileConnections={messages?.allMessages?.__id} />
        </Message>}
      </>
      }


    </Box>)
}