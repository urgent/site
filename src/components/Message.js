import React, { useCallback } from "react";
import Toolbar from "./Toolbar"
import useMutation from './useMutation'
import { Grid, Box, Badge, Button, IconButton, HStack } from "@chakra-ui/react"
import { HiOutlineTrash } from "react-icons/hi"
import useStore from "../utils/store";

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
  const edit = useStore((state) => state.edit);
  return <>
    {edit && <Button mr={1} data-cy="add_tag_to_message" onClick={click}>+</Button>}
  </>
}

export default function Message({ value, tags, children, id, onEdit, onDelete, toolbar, organizationId, editActive }) {
  const [isDeleteMessageTagPending, deleteMessageTag] = useMutation(DeleteTagMutation);
  const filter = useStore((state) => state.filter);
  const focusMessage = useStore((state) => state.focusMessage);
  const organization = useStore((state) => state.organization);
  const tagIds = tags?.edges.map((tag) => tag.node.tagByTagId?.rowId)
  const filterName = useStore((state) => state.filterName)
  const filterColor = useStore((state) => state.filterColor)

  const onDeleteMessageTag = useCallback((tagId, connectionId) => () => {
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
  }, [deleteMessageTag, id])


  const display = useCallback(() => {
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
  }, [organizationId, organization, filter, toolbar, tagIds])


  const size = useCallback(() => {
    // editor
    if (!value) {
      return {
        width: "span 10",
        height: "span 2",
        tagRow: "2"
      }
    }

    const messageLength = value.length;

    const tagLength = tags?.edges.reduce((prev, curr) => {
      return prev + curr.node.tagByTagId?.name.length;
    }, 0)


    if (messageLength < 140) {
      return {
        width: "span 2",
        height: `span ${Math.max(3, Math.ceil(messageLength / 100) + Math.ceil(tagLength / 20))}`,
        tagRow: Math.max(8, Math.ceil(tags?.edges.length * 3)),
      }
    }
    else if (messageLength < 500) {
      return {
        width: "span 2",
        height: `span ${Math.max(4, Math.ceil(messageLength / 100) + Math.ceil(tagLength / 10))}`,
        tagRow: Math.max(4, Math.ceil(tags?.edges.length * 4)),
      }
    }
    else {
      return {
        width: "span 4",
        height: `span ${Math.max(4, Math.ceil(messageLength / 200) + Math.ceil(tagLength / 100))}`,
        tagRow: Math.max(6, Math.ceil(tags?.edges.length)),
      }
    }

  }, [value])



  return <>
    {display() && <Grid
      boxShadow={toolbar && "4px 4px 15px 0 rgb(10 8 59 / 6%)"}
      borderRadius="10px"
      textAlign="left"
      gridTemplateRows={`[menu] 2em [body] auto [tags] ${size()['tagRow']}em`}
      gridColumn={size()['width']}
      gridRow={size()['height']}
      data-cy="message"
    >
      <Box
        gridRow="menu"
        ml={4}
      >
        {toolbar && <Toolbar editActive={editActive} editClick={() => onEdit(id, tags?.__id, value)} deleteClick={() => onDelete(id, tags?.__id)} />}
      </Box>
      <Box
        gridRow="body"
        px={4}
        pb={4}
        data-cy="body"
        wordBreak="break-all"
      >
        {children}
      </Box>
      <Box
        gridRow="tags"
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
                  click={onDeleteMessageTag(edge.node.tagByTagId.rowId, tags.__id)}
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
                  click={onDeleteMessageTag(edge.node.tagByTagId.rowId, tags.__id)}
                />
              </HStack>
            </Badge>
          }


        })}

        {!toolbar && filterName.map((name, index) => <Badge data-cy="message_tag" key={index} variant="outline" color="white" bg={`#${filterColor[index]}`} px={2} mt={1} boxShadow="none">
          <Box>{name}</Box>
        </Badge>)}

      </Box>
    </Grid>
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
        color={color}
      ></IconButton>}
    </>
  )
}
