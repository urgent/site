import React, { useState } from "react";
import Toolbar from "./Toolbar"
import useMutation from './useMutation'
import { Grid, Box, Badge, Button, IconButton, HStack } from "@chakra-ui/react"
import { HiOutlineTrash } from "react-icons/hi"

const DeleteTagMutation = graphql`
  mutation MessageDeleteTagMutation($input:RemoveMessageTagInput!, $connections: [ID!]!) {
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

export function AddTagToMessage({ click }) {
  return <Button data-cy="add_tag_to_message" onClick={click}>+</Button>;
}

function onDeleteMessageTag(messageId, tagId, connectionId, deleteMessageTag) {
  deleteMessageTag({
    variables: {
      input: {
        messageId: messageId,
        tagId: tagId
      },
      connections: [connectionId]
    },
    updater: store => { },
  });
}

export default function Message({ tags, edit, gridColumn, gridRow, children, id, setFocusedMessage, onEdit, onDelete }) {
  const [isDeleteMessageTagPending, deleteMessageTag] = useMutation(DeleteTagMutation);

  return (
    <Grid
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="10px"
      textAlign="left"
      gridTemplateRows="[menu] 2em [body] auto [tags] 5em"
      gridTemplateColumns="[body] auto [menu] 4.5em"
      gridColumn={gridColumn}
      gridRow={gridRow}
      data-cy="message"
    >
      <Box
        gridRow="menu"
        gridColumn="menu"
      >
        {edit && <Toolbar editClick={() => onEdit(id, tags?.__id, children)} deleteClick={() => onDelete(id, tags?.__id)} />}
      </Box>
      <Box
        gridRow="body"
        gridColumn="body / -1"
        px={4}
        pb={4}
        overflowX="hidden"
      >
        {children}
      </Box>
      <Box
        gridRow="tags"
        gridColumn="body / -1"
        alignSelf="end"
        px={4}
        pb={2}
        data-cy="body"
        overflowY="scroll"
        height={20}
      >
        {edit && <AddTagToMessage click={() => setFocusedMessage([id, tags?.__id])} />}
        {tags?.edges.map((edge, index) =>
          <Badge data-cy="message_tag" key={index} color="white" px={2} mt={1} bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`} bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}>
            <HStack spacing={1}>
              <Box>{edge.node.tagByTagId?.name}</Box>
              {edit && <IconButton
                data-cy="delete_tag_from_message"
                _hover={{ background: `#${edge.node.tagByTagId?.categoryByCategoryId.color}` }}
                onClick={() => onDeleteMessageTag(edge.node.messageId, edge.node.tagByTagId.rowId, tags.__id, deleteMessageTag)}
                size={"sm"}
                aria-label="Trash"
                icon={<HiOutlineTrash />}
                color="white"
                bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}
              ></IconButton>}
            </HStack>
          </Badge>)}

      </Box>
    </Grid>
  );
}
