import React, { useEffect } from "react";
import { graphql } from "react-relay";
import useMutation from "./useMutation";
import { Box, Badge, Button, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { catchJSON } from "../utils/editor";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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

const LoomEmbed = dynamic(() => import("./LoomEmbed"), {
  ssr: false,
});

export function AddTagToMessage({ click }) {
  return (
    <Button mr={1} data-cy="add_tag_to_message" onClick={click}>
      +
    </Button>
  );
}

export default function Message({ node, tags }: { node: any; tags: any }) {
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

  // autosave
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
              key={index}
              px={2}
              mt={1}
              mx={1}
              border={`2px solid #${color.replace("#", "")}`}
              {...colorize({ active: tags?.includes(rowId), color })}
              borderRadius={4}
            >
              <Box>
                {name}
                {parseInt(editMessage as string) === node.rowId && (
                  <Button
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
              data-cy="message_tag"
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
            data-cy="message_tag"
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
      </Box>
    </Box>
  );
}
