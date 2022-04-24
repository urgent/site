import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useMutation from "./useMutation";
import Link from "next/link";
import { graphql } from "react-relay";
import { useRouter } from "next/router";

const InsertTagMutation = graphql`
  mutation TagInsertTagMutation($input: CreateTagInput!, $connections: [ID!]!) {
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
  mutation TagDeleteTagMutation(
    $tag: DeleteTagInput!
    $messageTag: DeleteMessageTagInput!
    $tagConnections: [ID!]!
    $messageTagConnections: [ID!]!
  ) {
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
        rowId
      }
    }
  }
`;

const UpdateTagMutation = graphql`
  mutation TagUpdateTagMutation($input: UpdateTagInput!) {
    updateTag(input: $input) {
      tag {
        rowId
        name
      }
    }
  }
`;

const InsertMessageTagMutation = graphql`
  mutation TagInsertMessageTagMutation(
    $input: CreateMessageTagInput!
    $connections: [ID!]!
  ) {
    createMessageTag(input: $input) {
      messageTag
        @appendNode(
          connections: $connections
          edgeTypeName: "MessageTagsEdge"
        ) {
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

export function EditTag({
  id,
  name,
  sidebarConnections,
  messageConnections,
}: {
  id: string;
  name: string;
  sidebarConnections?: string[];
  messageConnections?: string[];
}) {
  const [isTagPending, updateTag] = useMutation(UpdateTagMutation);
  const [isDeleteTagPending, deleteTag] = useMutation(DeleteTagMutation);
  const [value, setValue] = useState(name);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  function onSubmit(event) {
    event.preventDefault();
    if (typeof updateTag === "function") {
      updateTag({
        variables: {
          input: {
            id: parseInt(id),
            name: value,
          },
          sidebarConnections,
        },
        updater: (store) => {},
      });
    }
  }

  function onDelete(event) {
    event.preventDefault();
    if (typeof deleteTag === "function") {
      deleteTag({
        variables: {
          tag: {
            tagId: parseInt(id),
          },
          messageTag: {
            tagId: parseInt(id),
          },
          tagConnections: sidebarConnections,
          messageTagConnections: messageConnections,
        },
        updater: (store) => {},
      });
    }
  }

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? Tags on messages will be removed.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                data-cy="confirm_delete_tag"
                colorScheme="red"
                onClick={(e) => {
                  onDelete(e);
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Button
        data-cy="delete_tag_button"
        borderRightRadius={0}
        size="sm"
        onClick={onOpen}
        m={0}
      >
        ❌
      </Button>
      <Input
        size="sm"
        borderRadius={"md"}
        py={2}
        px={1}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Category"
        {...{ value }}
        m={0}
        maxWidth={28}
        borderRightRadius={0}
      />
      <Button
        data-cy="add_category_tag_button"
        borderLeftRadius={0}
        size="sm"
        onClick={onSubmit}
        m={0}
      >
        ✅
      </Button>
    </>
  );
}

export function AddTag({ connections, category }) {
  const [name, setName] = useState("");
  const [isTagPending, insertTag] = useMutation(InsertTagMutation);

  function onSubmit(event) {
    event.preventDefault();
    if (typeof insertTag === "function") {
      insertTag({
        variables: {
          input: {
            name: name,
            categoryId: parseInt(category),
          },
          connections,
        },
        updater: (store) => {},
      });
      // Reset form text
      setName("");
    }
  }

  return (
    <Box>
      <Input
        size="sm"
        maxWidth={28}
        borderLeftRadius={8}
        borderRightRadius={0}
        paddingX={2}
        paddingY={1}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add Tag"
        data-cy="add_tag_text"
        value={name}
        ml={10}
      />
      <Button
        data-cy="add_tag_button"
        borderLeftRadius={0}
        size="sm"
        onClick={onSubmit}
      >
        ✅
      </Button>
    </Box>
  );
}

function style({ active, color }) {
  const valid = color.replace("#", "");
  if (active) {
    return {
      color: "white",
      bg: `#${valid}`,
      _active: { bg: `#${valid}` },
      _hover: {
        bg: `#${valid}`,
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)",
      },
    };
  } else {
    return {
      color: `#${valid}`,
      borderColor: `#${valid}`,
      bg: "white",
      _active: { bg: `white` },
      _hover: { bg: `white`, boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)" },
    };
  }
}

export default function Tag({
  rowId,
  color,
  name,
  active,
  href,
  organization,
}) {
  const router = useRouter();
  const { message, connection } = router.query;
  const [isTagPending, insertMessageTag] = useMutation(
    InsertMessageTagMutation
  );

  function onSubmit(event) {
    event.preventDefault();
    if (typeof insertMessageTag === "function") {
      insertMessageTag({
        variables: {
          input: {
            messageId: parseInt(message as string),
            tagId: rowId,
            organizationId: organization,
          },
          connections: [connection],
        },
        updater: (store) => {},
      });
    }
  }

  return (
    <Box
      fontSize={[10, 10, 12, 12, 12]}
      p={2}
      minWidth="inherit"
      height="inherit"
      border="2px"
      {...style({ active, color })}
      data-cy="tag"
      borderRadius="md"
      cursor="pointer"
    >
      {message && (
        <Text mt={1} onClick={onSubmit}>
          {name}
        </Text>
      )}
      {!message && (
        <Text mt={1}>
          <Link {...{ href }}>{name}</Link>
        </Text>
      )}
    </Box>
  );
}
