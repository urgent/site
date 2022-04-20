import React from "react";
import Message, { CreateMessage } from "./Message";
import { Box } from "@chakra-ui/react";
import { graphql, useFragment } from "react-relay";
import useMutation from "./useMutation";

const DeleteMessageMutation = graphql`
  mutation TilesDeleteMessageMutation(
    $input: DeleteMessageInput!
    $connections: [ID!]!
  ) {
    deleteMessage(input: $input) {
      message {
        id @deleteEdge(connections: $connections)
      }
    }
  }
`;

const messageFragment = graphql`
  fragment TilesFragment_messages on Query
  @argumentDefinitions(organization: { type: "Int" }, tag: { type: "[Int]" }) {
    tile(organizationId: $organization, tagId: $tag) {
      __id
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

export default function Tiles({ query, tags }: { query: any; tags: any }) {
  const messages = useFragment(messageFragment, query);
  const [isDeleteMessagePending, deleteMessage] = useMutation(
    DeleteMessageMutation
  ) as [boolean, (config?: any) => void];

  function onDelete(messageId, collectionId) {
    deleteMessage({
      variables: {
        input: {
          messageId: messageId,
        },
        connections: [messages?.__id],
      },
      updater: (store) => {},
    });
  }

  return (
    <Box sx={{ columnCount: "4" }} columnGap="1em" data-cy="tiles">
      {messages?.tile?.edges?.map((edge) => {
        return <Message key={edge.node.rowId} node={edge.node} {...{ tags }} />;
      })}
      <CreateMessage {...{ query }} connections={[messages.tile.__id]} />
    </Box>
  );
}
