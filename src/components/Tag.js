import React, { useState } from "react"
import { Button, Box, VStack, Input, Text } from "@chakra-ui/react"
import useMutation from './useMutation'
import Toolbar from './Toolbar';
import AlertDialog from "./AlertDialog";
import useStore from "../utils/store";
import Link from 'next/link'
import { useRouter } from 'next/router'


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

const InsertMessageTagMutation = graphql`
  mutation TagInsertMessageTagMutation($input:CreateMessageTagInput!, $connections: [ID!]!) {
    createMessageTag(input: $input) {
      messageTag @appendNode(connections: $connections, edgeTypeName: "MessageTagsEdge") {
        messageId
        tagId
        tagByTagId {
          name
          categoryByCategoryId {
            color
          }
        }
      }
    }
  }
`;

export function AddTag({ connectionId, categoryId }) {
  const [name, setName] = useState('')
  const [isTagPending, insertTag] = useMutation(InsertTagMutation);
  const edit = useStore((state) => state.edit);

  // Editor submit callback
  function onSubmit(event) {
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
  }

  return <>
    {edit && <VStack>
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
    </VStack>}
  </>
}

function style({ active, color }) {
  if (active) {
    return {
      color: "white",
      bg: `#${color}`,
      _active: { bg: `#${color}` },
      _hover: { bg: `#${color}`, boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)" }
    }
  } else {
    return {
      color: `#${color}`,
      borderColor: `#${color}`,
      bg: "white",
      _active: { bg: `white` },
      _hover: { bg: `white`, boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)" }
    }
  }
}

export default function Tag({ id, color, name }) {
  const router = useRouter()
  const { organization, tag } = router.query

  return <Link href={`/${organization}/${rowId}`}>
    <Box
      fontSize={[10, 10, 12, 12, 12]}
      p={2}
      minWidth="inherit"
      height="inherit"
      border="2px"
      isActive={tag === rowId}
      {...style({ active: tag == rowId, color: color })}
      data-cy="tag"
    >
      <Text mt={1}>{tagName}</Text>
    </Box>
  </Link>
}