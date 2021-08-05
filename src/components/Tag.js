import React, { useState, useCallback } from "react"
import { Button, Box, VStack, Input, Text } from "@chakra-ui/react"
import useMutation from './useMutation'
import Toolbar from './Toolbar';
import AlertDialog from "./AlertDialog";

const InsertTagMutation = graphql`
  mutation TagInsertTagMutation($input:CreateTagInput!, $connections: [ID!]!) {
    createTag(input: $input) {
      tag @appendNode(connections: $connections, edgeTypeName: "TagsEdge") {
        id
        rowId
        name
      }
    }
  }
`;

const DeleteTagMutation = graphql`
  mutation TagDeleteTagMutation($tag:DeleteTagInput!, $messageTag:DeleteMessageTagInput!, $tagConnections: [ID!]!, $messageTagConnections: [ID!]!) {
    deleteMessageTag(input: $messageTag) {
      query {
        allMessages {
          nodes {
            messageTagsByMessageId {
              edges {
                node {
                  messageId
                  tagByTagId {
                    id @deleteEdge(connections: $messageTagConnections)
                  }
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
        id @deleteEdge(connections: $tagConnections)
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
      data-cy="add_tag_text"
      value={name}
    />
    <Button data-cy="add_tag_button" size="xs" onClick={onSubmit} >Add Tag</Button>
  </VStack>
}

export default function Tag({ click, id, tagFilter, color, edit, messages, connectionId, tag, children }) {
  const isActive = tagFilter.includes(id);
  const [isDeleteTagPending, deleteTag] = useMutation(DeleteTagMutation);
  const [editTagText, setEditTagText] = useState(tag.name);
  const [tagMode, setTagMode] = useState('view')
  const [focusedTag, setFocusedTag] = useState(false)
  const [isUpdateTagPending, updateTag] = useMutation(UpdateTagMutation);
  const [isConfirmOpen, setConfirmIsOpen] = React.useState(false)

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

  function confirmDeleteTag() {
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
        tagConnections: [connectionId],
        messageTagConnections: connections,
      },
      updater: store => { },
    })
  }

  return (
    <>
      {edit && <Box data-cy="tag_container">
        <AlertDialog
          title={`Delete ${tag.name}`}
          body={`Tags on messages will be lost. Are you sure you want to delete all ${tag.name} tags?`}
          click={confirmDeleteTag}
          isOpen={isConfirmOpen}
          setIsOpen={setConfirmIsOpen}
        />
        <Toolbar deleteClick={() => setConfirmIsOpen(true)}
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
      </Box>}

      {isActive &&
        <Button
          fontSize={[10, 10, 12, 12, 12]}
          p={2}
          minWidth="inherit"
          height="inherit"
          border="2px"
          onClick={() => click(id, tagFilter)}
          isActive={isActive}
          color="white"
          bg={`#${color}`}
          _active={{ bg: `#${color}` }}
          _hover={{ bg: `#${color}`, boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)" }}
          data-cy="tag"
        >
          <Box display={['none', 'none', 'inherit', 'inherit', 'inherit']}>

            {tagMode === 'edit' &&
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
              />}
            {tagMode !== 'edit' && <Text mt={1}>{tag.name}</Text>}
          </Box>
        </Button>}

      {!isActive &&
        <Button
          fontSize={[10, 10, 12, 12, 12]}
          p={2}
          minWidth="inherit"
          height="inherit"
          border="2px"
          onClick={() => click(id, tagFilter)}
          isActive={isActive}
          color={`#${color}`}
          borderColor={`#${color}`}
          bg="white"
          _active={{ bg: "white" }}
          _hover={{ bg: "white", boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)" }} s
          data-cy="tag"
        >
          <Box display={['none', 'none', 'inherit', 'inherit', 'inherit']}>

            {tagMode === 'edit' &&
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
              />}
            {tagMode !== 'edit' && <Text mt={1}>{tag.name}</Text>}
          </Box>
        </Button>}
    </>
  )
}