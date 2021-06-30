import React, { useState, useCallback } from "react"
import { Button, Box, VStack, Input } from "@chakra-ui/react"
import useMutation from './useMutation'
import Toolbar from './Toolbar';

const InsertTagMutation = graphql`
  mutation TagInsertTagMutation($input:CreateTagInput!, $connections: [ID!]!) {
    createTag(input: $input) {
      tag @appendNode(connections: $connections, edgeTypeName: "TagsEdge") {
        id
        name
      }
    }
  }
`;

const DeleteTagMutation = graphql`
  mutation TagDeleteTagMutation($tag:DeleteTagInput!, $messageTag:DeleteMessageTagInput!, $connections: [ID!]!) {
    deleteMessageTag(input: $messageTag) {
        messageTag {
          __id @deleteEdge(connections: $connections)
      }
    }
    deleteTag(input: $tag) {
      tag {
        id @deleteEdge(connections: $connections)
      }
    }
}
`;

export function AddTag({ connectionId, categoryId }) {
  const [name, setName] = useState('')
  const [isTagPending, insertTag] = useMutation(InsertTagMutation);

  // Editor submit callback
  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      insertTag({
        variables: {
          input: {
            name: name,
            categoryId: categoryId
          },
          connections: [connectionId]
        },
        updater: store => { },
      });
      // Reset form text
      setName('');
    },
    [name, setName, insertTag],
  );

  return <VStack>
    <Input
      size={["sm", "sm", "sm", "md", "md"]}
      maxWidth={28}
      borderRadius={8}
      paddingX={2}
      paddingY={1}
      onChange={(e) => setName(e.target.value)}
      placeholder="Tag Name"
      value={name}
    />
    <Button size="xs" onClick={onSubmit} >Add Tag</Button>
  </VStack>
}

function style(color, isActive) {
  if (isActive) {
    return {
      color: "white",
      bg: `#${color}`,
      _active: {
        bg: `#${color}`,
      },
      _hover: {
        bg: `#${color}`,
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)"
      }
    }
  } else {
    return {
      color: `#${color}`,
      borderColor: `#${color}`,
      bg: "white",
      _active: {
        bg: "white",
      },
      _hover: {
        bg: "white",
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)"
      }
    }
  }
}

function display(visible) {
  if (visible) {
    return 'inherit'
  }
  return 'none'
}

export default function Tag({ click, id, tagFilter, color, edit, messages, connectionId, children }) {
  const isActive = tagFilter.includes(id);
  const styles = style(color, isActive)
  const [isDeleteTagPending, deleteTag] = useMutation(DeleteTagMutation);

  return (
    <>
      <Box display={display(edit)}>
        <Toolbar deleteClick={() => {
          // need connections to update
          let connections = [];
          messages.edges.forEach(edge => {
            // if one message tag matches deleted tag ...
            const match = edge.node.messageTagsByMessageId.edges.some(edge => {
              return edge.node.tagByTagId.rowId === id;
            })
            // ... add connection ID to Relay @deleteEdge directive
            if (match) {
              connections = [...connections, edge.node.messageTagsByMessageId.__id]
            }
          })

          deleteTag({
            variables: {
              tag: {
                tagId: id,
              },
              messageTag: {
                tagId: id,
              },
              connections: [...connections, connectionId],
            },
            updater: store => { },
          })
        }
        } />
      </Box>
      <Button
        fontSize={[10, 10, 12, 12, 12]}
        p={2}
        minWidth="inherit"
        height="inherit"
        border="2px"
        onClick={() => click(id, tagFilter)}
        isActive={isActive}
        {...styles}
      >
        <Box display={['none', 'none', 'inherit', 'inherit', 'inherit']}>
          {children}
        </Box>
      </Button>
    </>
  )
}
