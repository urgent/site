import React, { useEffect } from "react";
import { graphql, useFragment } from "react-relay";
import useMutation from "./useMutation";
import { Box, Badge, Button, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { catchJSON } from "../utils/editor";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Placeholder from "@tiptap/extension-placeholder";

const InsertMessageMutation = graphql`
  mutation MessageInsertMutation(
    $input: CreateMessageInput!
    $connections: [ID!]!
  ) {
    createMessage(input: $input) {
      messages
        @appendNode(connections: $connections, edgeTypeName: "MessagesEdge") {
        id
        rowId
        content
        organizationId
        loomSharedUrl
        messageTagsByMessageId {
          __id
          edges {
            node {
              __id
              tagId
              tagByTagId {
                __id
                rowId
                name
                categoryByCategoryId {
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

const UpdateMessageMutation = graphql`
  mutation MessageUpdateMessageMutation($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      messages {
        rowId
        content
        loomSharedUrl
        organizationId
        messageTagsByMessageId {
          __id
          edges {
            node {
              __id
              tagId
              tagByTagId {
                __id
                rowId
                name
                categoryByCategoryId {
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

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
                    rowId
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

const tagFragment = graphql`
  fragment MessageFragment_tags on Query
  @argumentDefinitions(tag: { type: "[Int]" }) {
    routerTags(tagId: $tag) {
      edges {
        node {
          rowId
          name
          categoryByCategoryId {
            color
            organizationId
          }
        }
      }
    }
  }
`;

const DeleteMessageMutation = graphql`
  mutation MessageDeleteMessageMutation(
    $input: DeleteMessageInput!
    $connections: [ID!]!
  ) {
    deleteMessage(input: $input) {
      message {
        id @deleteEdge(connections: $connections)
      }
    }
  }
`;

const LoomEmbed = dynamic(() => import("./LoomEmbed"), {
  ssr: false,
});

function colorize({ active, color }) {
  if (active) {
    return {
      color: "white",
      bg: `#${color.replace("#", "")}`,
    };
  }
  return {
    color: `#${color.replace("#", "")}`,
    bg: "white",
  };
}

export function CreateMessage({ query, connections }) {
  const tags = useFragment(tagFragment, query);
  const editor = useEditor({
    editable: true,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Create new ...",
      }),
    ],
  });
  const [isInsertMessagePending, insertMessage] = useMutation(
    InsertMessageMutation
  ) as [boolean, (config?: any) => void];

  function create() {
    const content = JSON.stringify(editor?.getJSON());
    insertMessage({
      variables: {
        input: {
          organizationId:
            tags.routerTags.edges[0].node.categoryByCategoryId.organizationId,
          content,
          loomSharedUrl: "",
          tags: tags.routerTags.edges.map(({ node }) => node.rowId),
        },
        connections,
      },
      updater: (store) => {},
    });
  }

  return (
    <Box
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="md"
      textAlign="left"
      display="inline-block"
      data-cy="create_message"
    >
      <Box p={4} data-cy="editor">
        <EditorContent editor={editor} />
      </Box>
      <Box data-cy="tags" px={4} py={2} minWidth="340px">
        {tags.routerTags.edges.map((messageTag, index) => {
          const { name, categoryByCategoryId, rowId } = messageTag.node;
          const { color } = categoryByCategoryId;
          return (
            <Badge
              data-cy="message_tag"
              key={rowId}
              px={2}
              mt={1}
              mx={1}
              border={`2px solid #${color.replace("#", "")}`}
              color="white"
              bg={`#${color.replace("#", "")}`}
              borderRadius={4}
            >
              <Box>{name}</Box>
            </Badge>
          );
        })}
      </Box>
      <HStack justify="end" m={1}>
        <Button
          data-cy="save"
          color="white"
          fontWeight="bold"
          bg="#46E28E"
          _hover={{ bg: "#46E28E" }}
          onClick={(e) => create()}
        >
          Save New
        </Button>
      </HStack>
    </Box>
  );
}

export function AddTagToMessage({ click }) {
  return (
    <Button mr={1} data-cy="add_tag_to_message" onClick={click}>
      +
    </Button>
  );
}

export default function Message({
  node,
  tags,
  connections,
}: {
  node: any;
  tags: any;
  connections: any;
}) {
  const {
    rowId,
    content,
    loomSharedUrl,
    messageTagsByMessageId,
    organizationId,
  } = node;
  const parsed = catchJSON(content);
  const messageTags = messageTagsByMessageId.edges.map(
    ({ node }) => node.tagByTagId
  );
  const [isDeleteMessageTagPending, deleteMessageTag] = useMutation(
    DeleteTagMutation
  ) as [boolean, (config?: any) => void];
  const [isUpdateMessagePending, updateMessage] = useMutation(
    UpdateMessageMutation
  ) as [boolean, (config?: any) => void];
  const router = useRouter();
  const { message, editMessage } = router.query;
  const editor = useEditor({
    editable: true,
    content: parsed,
    extensions: [StarterKit],
  });
  const view = useEditor({
    editable: false,
    content: parsed,
    extensions: [StarterKit],
  });
  if (view && rowId == editMessage) {
    view.commands.setContent(parsed);
  }
  const [isDeleteMessagePending, deleteMessage] = useMutation(
    DeleteMessageMutation
  ) as [boolean, (config?: any) => void];

  function onDelete() {
    deleteMessage({
      variables: {
        input: {
          messageId: rowId,
        },
        connections,
      },
      updater: (store) => {},
    });
  }

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

  function onDoubleClick() {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, ...{ editMessage: rowId } },
      },
      undefined,
      { shallow: true }
    );
  }

  function autoSave({ editor, transaction }) {
    if (!editor.options.editorProps.autoSave) {
      editor.options.editorProps.autoSave = true;
      setTimeout(() => {
        editor.options.editorProps.autoSave = false;
        const content = JSON.stringify(editor.getJSON());
        if (content !== node.content) {
          updateMessage({
            variables: {
              input: {
                id: rowId,
                content,
                loomSharedUrl,
              },
            },
            updater: (store) => {},
          });
        }
      }, 4000);
    }
  }

  function save({ editor, transaction }) {
    const content = JSON.stringify(editor.getJSON());
    if (content !== node.content) {
      updateMessage({
        variables: {
          input: {
            id: rowId,
            content,
            loomSharedUrl,
          },
        },
        updater: (store) => {},
      });
    }
  }

  function autoComplete({ editor, transaction }) {
    if (!editor.options.editorProps.autoComplete) {
      editor.options.editorProps.autoComplete = true;
      setTimeout(async () => {
        editor.options.editorProps.autoComplete = false;
        const content = JSON.stringify(editor.getJSON());
        const text = editor.getText();
        if (content !== node.content) {
          const response = await fetch("/api/nlp", {
            method: "POST",
            body: JSON.stringify({
              text,
            }),
          });
          const data = await response.json();
          const nlp = JSON.parse(data?.text);
          editor.commands.setContent({
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: nlp.data.text,
                  },
                ],
              },
            ],
          });
        }
      }, 4000);
    }
  }

  // autosave and autocomplete
  useEffect(() => {
    if (editor && parseInt(editMessage as string) === rowId) {
      editor.on("update", autoSave);
      editor.on("blur", save);
      return () => {
        editor.off("update", autoSave);
        editor.off("blur", save);
      };
    }
  }, [editor, editMessage]);

  return (
    <Box
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="md"
      textAlign="left"
      display="inline-block"
      data-cy="message"
      {...{ onDoubleClick }}
    >
      <Box p={4} data-cy="body">
        {parseInt(editMessage as string) !== rowId && (
          <EditorContent editor={view} />
        )}
        {parseInt(editMessage as string) === rowId && (
          <EditorContent editor={editor} />
        )}
        {loomSharedUrl && <LoomEmbed {...{ loomSharedUrl }} />}
      </Box>
      <Box data-cy="tags" px={4} py={2} minWidth="340px">
        {messageTags.map((messageTag, index) => {
          const { name, categoryByCategoryId, rowId } = messageTag;
          const { color } = categoryByCategoryId;
          return (
            <Badge
              data-cy="message_tag"
              key={rowId}
              px={2}
              mt={1}
              mx={1}
              border={`2px solid #${color.replace("#", "")}`}
              {...colorize({ active: tags?.includes(rowId), color })}
              borderRadius={4}
            >
              <Box>
                {`${name}`}
                {parseInt(editMessage as string) === node.rowId && (
                  <Button
                    data-cy="remove_tag_from_message"
                    onClick={() =>
                      onDeleteMessageTag(rowId, messageTagsByMessageId.__id)
                    }
                    bg="none"
                    fontSize={12}
                    height={4}
                    _hover={{ background: "none" }}
                    _active={{ background: "none" }}
                    _focus={{ background: "none", border: "none" }}
                    p="0"
                    ml={1}
                  >
                    🗑️
                  </Button>
                )}
              </Box>
            </Badge>
          );
        })}

        {parseInt(message as string) === rowId && (
          <motion.span
            animate={{ opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "loop",
            }}
          >
            <Badge
              data-cy="add_tag_to_message"
              key="add"
              px={2}
              mt={1}
              mx={1}
              color="white"
              border="2px solid"
              borderColor="gray.400"
              bg="gray.400"
              boxShadow={`inset 3px -3px 4px 0px rgb(0 0 0 / 10%)`}
              borderRadius={4}
              onClick={() => {
                router.push(
                  {
                    pathname: router.pathname,
                    query: {
                      ...router.query,
                      ...{ message: "", connection: "" },
                    },
                  },
                  undefined,
                  { shallow: true }
                );
              }}
              cursor="pointer"
            >
              ADD ATTRIBUTE +
            </Badge>
          </motion.span>
        )}

        {parseInt(message as string) !== rowId && (
          <Badge
            data-cy="add_tag_to_message"
            key="add"
            px={2}
            mt={1}
            mx={1}
            color="white"
            border="2px solid"
            borderColor="gray.400"
            bg="gray.400"
            borderRadius={4}
            onClick={() => {
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  ...{
                    message: rowId,
                    connection: messageTagsByMessageId.__id,
                  },
                },
              });
            }}
            cursor="pointer"
          >
            <Box>ADD ATTRIBUTE +</Box>
          </Badge>
        )}
        {parseInt(editMessage as string) === rowId && (
          <Box textAlign="right" mt={10}>
            <Button
              bg="#FF4E4E"
              _hover={{ bg: "#FF4E4E" }}
              color="white"
              onClick={onDelete}
              data-cy="delete_message"
            >
              Delete
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
