import React from "react";
import { graphql } from "react-relay";
import useMutation from "./useMutation";
import { Box, Badge, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { decode } from "../utils/route";

const DeleteTagMutation = graphql`
  mutation MessageDeleteTagMutation(
    $input: RemoveMessageTagInput!
    $connections: [ID!]!
  ) {
    removeMessageTag(input: $input) {
      query {
        allMessages {
          nodes {
            messageTagsByMessageId {
              edges {
                node {
                  messageId
                  tagByTagId {
                    id @deleteEdge(connections: $connections)
                  }
                }
              }
            }
            content
          }
        }
      }
    }
  }
`;

const LoomEmbed = dynamic(() => import("./LoomEmbed"), {
  ssr: false,
});

export function AddTagToMessage({ click }) {
  return (
    <Button mr={1} data-cy="add_tag_to_message" onClick={click}>
      +
    </Button>
  );
}

export default function Message({ message }) {
  const { rowId, content, loomSharedUrl, messageTagsByMessageId } = message;
  const messageTags = messageTagsByMessageId.edges.map(
    ({ node }) => node.tagByTagId
  );
  const [isDeleteMessageTagPending, deleteMessageTag] = useMutation(
    DeleteTagMutation
  ) as [boolean, (config?: any) => void];
  const router = useRouter();
  const { organization, tag } = router.query;
  const tags = decode(tag as string).map((tag) => parseInt(tag));

  function onDeleteMessageTag(tagId, connectionId) {
    deleteMessageTag({
      variables: {
        input: {
          messageId: rowId,
          tagId: tagId,
        },
        connections: [connectionId],
      },
      updater: (store) => {},
    });
  }

  function colorize({ active, color }) {
    if (active) {
      return {
        color: "white",
        bg: `#${color}`,
      };
    }
    return {
      color: `#${color}`,
      bg: "white",
    };
  }

  return (
    <Box
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="10px"
      textAlign="left"
      display="inline-block"
      data-cy="message"
    >
      <Box p={4} data-cy="body" wordBreak="break-all">
        {content}
        {loomSharedUrl && <LoomEmbed {...{ loomSharedUrl }} />}
      </Box>
      <Box data-cy="tags" px={4} py={2}>
        {messageTags.map((messageTag, index) => {
          const { name, categoryByCategoryId, rowId } = messageTag;
          const { color } = categoryByCategoryId;
          return (
            <Badge
              data-cy="message_tag"
              key={index}
              px={2}
              mt={1}
              border={`2px solid #${color}`}
              {...colorize({ active: tags.includes(rowId), color })}
            >
              <Box>{name}</Box>
            </Badge>
          );
        })}
      </Box>
    </Box>
  );
}
