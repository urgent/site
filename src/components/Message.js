import React from "react";
import Toolbar from "./Toolbar"
import useMutation from './useMutation'
import { Grid, Box, Badge, Button, IconButton, HStack } from "@chakra-ui/react"
import { HiOutlineTrash } from "react-icons/hi"
import useStore from "../utils/store";
import dynamic from 'next/dynamic';

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

const LoomEmbed = dynamic(() => import('./LoomEmbed'), {
  ssr: false,
});

console.log('Loom embed')

console.log(LoomEmbed)

export function AddTagToMessage({ click }) {
  const edit = useStore((state) => state.edit);
  return <>
    {edit && <Button mr={1} data-cy="add_tag_to_message" onClick={click}>+</Button>}
  </>
}

export default function Message({ value, tags, children, id, onEdit, onDelete, toolbar, organizationId, editActive, loomSharedUrl, sx }) {
  const [isDeleteMessageTagPending, deleteMessageTag] = useMutation(DeleteTagMutation);
  const filter = useStore((state) => state.filter);
  const focusMessage = useStore((state) => state.focusMessage);
  const organization = useStore((state) => state.organization);
  const tagIds = tags?.edges.map((tag) => tag.node.tagByTagId?.rowId)
  const filterName = useStore((state) => state.filterName)
  const filterColor = useStore((state) => state.filterColor)

  function onDeleteMessageTag(tagId, connectionId) {
    deleteMessageTag({
      variables: {
        input: {
          messageId: id,
          tagId: tagId
        },
        connections: [connectionId]
      },
      updater: store => { },
    });
  }


  function display() {
    // no filter for editor
    if (!toolbar) {
      return true
    }

    // message belongs to focused organziation
    if (organizationId !== organization) {
      return false
    }

    // no filter, show
    if (filter.length === 0) {
      return true
    }

    // message has tags
    if (Array.isArray(tagIds)) {
      // tag in filter
      if (filter.every(filterTag => {
        return tagIds.includes(filterTag)
      })) {
        return true
      }
    }

    return false
  }

  return <>
    {display() && <Box
      boxShadow={toolbar && "4px 4px 15px 0 rgb(10 8 59 / 6%)"}
      borderRadius="10px"
      textAlign="left"
      display="inline-block"
      data-cy="message"
      sx={sx}
    >
      <Box
        gridRow="menu"
        ml={4}
      >
        {toolbar && <Toolbar editActive={editActive} editClick={() => onEdit(id, tags?.__id, value)} deleteClick={() => onDelete(id, tags?.__id)} />}
      </Box>
      <Box
        p={4}
        data-cy="body"
        wordBreak="break-all"
      >
        {children}
        {loomSharedUrl && <LoomEmbed {...{ loomSharedUrl }} />}
      </Box>
      <Box
        px={4}
        py={2}
        data-cy="tags"
      >
        {toolbar && <AddTagToMessage click={() => {
          focusMessage([id, tags.__id])
        }} />}
        {tags?.edges.map((edge, index) => {
          if (filter.includes(edge.node.tagByTagId.rowId)) {
            return <Badge data-cy="message_tag" key={index} color="white" px={2} mt={1} bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`} border={`2px solid #${edge.node.tagByTagId?.categoryByCategoryId.color}`} >
              <HStack spacing={1}>
                <Box>{edge.node.tagByTagId?.name}</Box>
                <DeleteTag
                  bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}
                  click={() => onDeleteMessageTag(edge.node.tagByTagId.rowId, tags.__id)}
                />
              </HStack>
            </Badge>
          } else {
            return <Badge data-cy="message_tag" key={index} variant="outline" color={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`} px={2} mt={1} bg="white" border={`2px solid #${edge.node.tagByTagId?.categoryByCategoryId.color}`} boxShadow="none">
              <HStack spacing={1}>
                <Box>{edge.node.tagByTagId?.name}</Box>
                <DeleteTag
                  color={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}
                  bg="white"
                  click={() => onDeleteMessageTag(edge.node.tagByTagId.rowId, tags.__id)}
                />
              </HStack>
            </Badge>
          }


        })}

        {!toolbar && filterName.map((name, index) => <Badge data-cy="message_tag" key={index} variant="outline" color="white" bg={`#${filterColor[index]}`} px={2} mt={1} boxShadow="none">
          <Box>{name}</Box>
        </Badge>)}

      </Box>
    </Box>
    }</>
}

function DeleteTag({ bg, color, click }) {
  const edit = useStore((state) => state.edit);
  return (
    <>
      {edit && <IconButton
        data-cy="delete_tag_from_message"
        _hover={{ background: { bg } }}
        onClick={click}
        size={"sm"}
        aria-label="Trash"
        icon={<HiOutlineTrash />}
        color="white"
        bg={bg}
      ></IconButton>}
    </>
  )
}
