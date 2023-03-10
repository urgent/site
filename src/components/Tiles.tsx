import React from "react";
import Message, { CreateMessage } from "./Message";
import { Box } from "@chakra-ui/react";
import { graphql, useFragment } from "react-relay";
import useMutation from "./useMutation";

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

  return (
    <Box
      sx={{
        columnCount: "1",
        "@media (min-width:990px)": {
          columnCount: "2",
        },
        "@media (min-width:1350px)": {
          columnCount: "3",
        },
        "@media (min-width:1650px)": {
          columnCount: "4",
        },
      }}
      columnGap="1em"
      data-cy="tiles"
    >
      {messages?.tile?.edges?.map((edge) => {
        return (
          <Message
            key={`${edge.node.rowId}m`}
            node={edge.node}
            {...{ tags }}
            connections={[messages.tile.__id]}
          />
        );
      })}
      <CreateMessage {...{ query }} connections={[messages.tile.__id]} />
    </Box>
  );
}
