import React, { useState, useCallback } from "react"
import { Button, Box, VStack, Input, Text } from "@chakra-ui/react"
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
    deleteTag(input: $tag) {
      tag {
        id @deleteEdge(connections: $connections)
      }
    }
  }
`;

const UpdateTagMutation = graphql`
  mutation TagUpdateTagMutation($input:UpdateTagInput!) {
    updateTag(input: $input) {
      tag {
        rowId
        name
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

function render(mode, edit, view) {
  if (mode === 'edit') {
    return edit
  } else {
    return view
  }
}

export default function Tag({ click, id, tagFilter, color, edit, messages, connectionId, tag, children }) {
  const isActive = tagFilter.includes(id);
  const styles = style(color, isActive)
  const [isDeleteTagPending, deleteTag] = useMutation(DeleteTagMutation);
  const [editTagText, setEditTagText] = useState(tag.name);
  const [tagMode, setTagMode] = useState('view')
  const [focusedTag, setFocusedTag] = useState(false)
  const [isUpdateTagPending, updateTag] = useMutation(UpdateTagMutation);

  const onEnter = useCallback(
    e => {
      if (e.key !== 'Enter') {
        return;
      }
      updateTag({
        variables: {
          input: {
            id: focusedTag,
            name: editTagText,
          },
        },
      });
      setTagMode('view')
      setFocusedTag(false)
    }
  )

  return (
    <>
      <Box display={display(edit)}>
        <Toolbar deleteClick={() => {
          // need connections to update
          const connections = messages.edges.map(edge => {
            return edge.node.messageTagsByMessageId.__id;
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
        }

          editClick={() => {
            if (tagMode === 'edit') {
              setTagMode('view')
              setFocusedTag(false)
            }
            else {
              setTagMode('edit')
              setFocusedTag(tag.rowId)
            }
          }}
        />
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

          {render(
            tagMode,
            <Input
              type="text"
              name="editTagText"
              value={editTagText}
              onChange={(e) => setEditTagText(e.target.value)}
              size={"xs"}
              boxShadow="1px 1px 4px rgb(0 0 0 / 20%);"
              borderRadius={1}
              mt={1}
              onKeyDown={onEnter}
            />,
            <Text mt={1}>{tag.name}</Text>
          )}
        </Box>
      </Button>
    </>
  )
}
