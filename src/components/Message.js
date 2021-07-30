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
              __id @deleteEdge(connections: $connections)
              edges {
                node {
                  messageId
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

function display(visible, element) {
  if (visible) {
    return element
  }
}



function list(tags, onDeleteMessageTag) {
  if (tags) {
    return tags.edges.map((edge, index) =>
      <Badge data-cy="message_tag" key={index} color="white" px={2} mt={1} bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}>
        <HStack spacing={1}>
          <Box>{edge.node.tagByTagId?.name}</Box>
          <IconButton
            data-cy="delete_tag_from_message"
            _hover={{ background: `#${edge.node.tagByTagId?.categoryByCategoryId.color}` }}
            onClick={() => onDeleteMessageTag(edge.node.messageId, edge.node.tagByTagId.rowId, tags.__id)}
            size={"sm"}
            aria-label="Trash"
            icon={<HiOutlineTrash />}
            color="white"
            bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}
          ></IconButton>
        </HStack>
      </Badge>

    )
  }
}

// this component displays an individual message
export default function Message({ tags, edit, gridColumn, gridRow, children, id, setFocusedMessage, editClick, deleteClick }) {
  const [isDeleteMessageTagPending, deleteMessageTag] = useMutation(DeleteTagMutation);

  function onDeleteMessageTag(messageId, tagId, connectionId) {
    console.log({ messageId, tagId, connectionId })
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

  return (
    <Grid
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="10px"
      textAlign="left"
      gridTemplateRows="[menu] 2em [body] auto [tags] 4em"
      gridTemplateColumns="[body] auto [menu] 4.5em"
      gridColumn={gridColumn}
      gridRow={gridRow}
      data-cy="message"
    >
      <Box
        gridRow="menu"
        gridColumn="menu"
      >
        {display(edit, <Toolbar editClick={() => editClick(id, tags?.__id, children)} deleteClick={() => deleteClick(id, tags?.__id)} />)}
      </Box>
      <Box
        gridRow="body"
        gridColumn="body / -1"
        px={4}
        pb={2}
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
        mt={2}
        data-cy="body"
        overflowY="scroll"
        height={20}
      >
        {display(edit, <AddTagToMessage click={() => setFocusedMessage([id, tags?.__id])} />)}
        {list(tags, onDeleteMessageTag)}
      </Box>
    </Grid>
  );
}
