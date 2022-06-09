import React, { useState, useEffect } from "react";
import Tag from "../components/Tag";
import {
  VStack,
  Box,
  Wrap,
  WrapItem,
  Button,
  Input,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useCategoryDrag } from "./useCategoryDrag";
import useMutation from "./useMutation";
import { graphql, useFragment } from "react-relay";
import { catchJSON } from "../utils/editor";
import { AddTag, EditTag } from "../components/Tag";
import { SketchPicker } from "react-color";

const UpdateCategoryMutation = graphql`
  mutation CategoryUpdateMessageMutation($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
      category {
        rowId
        name
        color
        sort
      }
    }
  }
`;

const DeleteCategoryMutation = graphql`
  mutation CategoryDeleteMutation(
    $input: DeleteCategoryInput!
    $connections: [ID!]!
  ) {
    deleteCategory(input: $input) {
      category {
        __id @deleteEdge(connections: $connections)
      }
    }
  }
`;

const InsertCategoryMutation = graphql`
  mutation CategoryInsertCategoryMutation(
    $input: CreateCategoryInput!
    $connections: [ID!]!
  ) {
    createCategory(input: $input) {
      category
        @prependNode(
          connections: $connections
          edgeTypeName: "CategoriesEdge"
        ) {
        id
        rowId
        name
        color
        organizationId
        tagsByCategoryId {
          __id
          edges {
            node {
              name
              rowId
            }
          }
        }
      }
    }
  }
`;

const categoryFragment = graphql`
  fragment CategoryFragment_organization on Query
  @argumentDefinitions(organization: { type: "Int" }) {
    organizationDefault(organizationId: $organization)
  }
`;

export function AddCategory({ connections, color, query }) {
  const [name, setName] = useState("");
  const { organizationDefault } = useFragment(categoryFragment, query);
  const [isCategoryPending, insertCategory] = useMutation(
    InsertCategoryMutation
  ) as [boolean, (config?: any) => void];

  // Editor submit callback
  function onSubmit(event) {
    event.preventDefault();
    insertCategory({
      variables: {
        input: {
          organizationId: organizationDefault,
          name,
          color,
        },
        connections,
      },
      updater: (store) => {},
    });
    // Reset form text
    setName("");
  }

  return (
    <VStack paddingX={2}>
      <Box>
        <Input
          size="sm"
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Category"
          value={name}
          data-cy="add_category_name"
          m={0}
          maxWidth={36}
          borderRightRadius={0}
        />
        <Button
          data-cy="add_category_button"
          size="sm"
          onClick={(e) => onSubmit(e)}
          m={0}
        >
          ✅
        </Button>
      </Box>
    </VStack>
  );
}

export function Category({
  category,
  index,
  moveCategory,
  tags,
  path,
  sidebarConnections,
  messageConnections,
  edit,
  organization,
}: {
  category: any;
  index: number;
  moveCategory: any;
  tags: number[];
  path: string;
  sidebarConnections?: string[];
  messageConnections?: string[];
  edit?: boolean;
  organization: number;
}) {
  const [ref] = useCategoryDrag({ category, index, onDrop: moveCategory });
  const { rowId, color, name, tagsByCategoryId, organizationId } = category;
  const [isDeleteCategoryPending, deleteCategory] = useMutation(
    DeleteCategoryMutation
  ) as [boolean, (config?: any) => void];
  const [isUpdateMessagePending, updateCategory] = useMutation(
    UpdateCategoryMutation
  ) as [boolean, (config?: any) => void];
  const [editCategory, setEditCategory] = useState(false);
  const parsed = catchJSON(name);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [colorPicker, setColorPicker] = useState(color);
  const [categoryName, setCategoryName] = useState(name);

  function onDelete({ categoryId, connections }) {
    deleteCategory({
      variables: {
        input: {
          categoryId,
        },
        connections,
      },
      updater: (store) => {},
    });
  }

  function onUpdate({ id, name, color }) {
    updateCategory({
      variables: {
        input: {
          id,
          name,
          color,
        },
      },
      updater: (store) => {},
    });
  }

  // autosave
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (colorPicker !== color || categoryName !== name) {
        onUpdate({
          id: rowId,
          name: categoryName,
          color: colorPicker,
        });
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [colorPicker, categoryName]);

  return (
    <AccordionItem width="235px" key={rowId} ref={ref} data-cy="category">
      <h2>
        <AccordionButton data-cy="category_title">
          <Box flex="1" textAlign="left">
            <VStack spacing={2} className="sidebar category title">
              {edit && !editCategory && <Box>{name}</Box>}
              {!edit && !editCategory && <Box>{name}</Box>}
              {edit && editCategory && (
                <Box>
                  <Input
                    value={categoryName}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.preventDefault();
                      setCategoryName(e.target.value);
                    }}
                  />
                </Box>
              )}
            </VStack>
            {tagsByCategoryId?.edges
              .filter((edge) => tags?.includes(edge.node.rowId))
              .map((edge) => {
                return (
                  <Badge
                    data-cy="category_title_tag"
                    key={edge.node.rowId}
                    variant="outline"
                    color="white"
                    bg={`#${color.replace("#", "")}`}
                    px={2}
                    mx={2}
                    boxShadow="none"
                  >
                    <Box>{edge.node.name}</Box>
                  </Badge>
                );
              })}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Wrap>
          {edit && !editCategory && (
            <>
              <Box>
                <Button
                  bg={"white"}
                  border="1px solid"
                  borderColor={"gray.400"}
                  _hover={{ bg: "white", borderColor: "gray.700" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setEditCategory(!editCategory);
                  }}
                >
                  ✏️ Edit
                </Button>
              </Box>
            </>
          )}
          {edit && editCategory && (
            <>
              <Box>
                <Button
                  border="1px solid"
                  borderColor={"gray.100"}
                  _hover={{ bg: "gray.200" }}
                  onClick={(e) => {
                    setEditCategory(!editCategory);
                  }}
                >
                  ✏️ Edit
                </Button>
              </Box>
            </>
          )}

          {edit && editCategory && (
            <SketchPicker color={colorPicker} onChange={setColorPicker} />
          )}
          {!edit &&
            tagsByCategoryId?.edges.map((tag, index) => {
              const { name, rowId } = tag.node;
              // for editing category, unselect tags to remove
              let query = { tags: [] };
              if (tags?.includes(rowId)) {
                query.tags = tags.filter((tag) => tag !== rowId);
              } else {
                query.tags = [...tags, rowId];
              }
              query.tags = query.tags.filter((tag) => !!tag);
              return (
                <WrapItem key={index}>
                  <Tag
                    active={tags.includes(rowId)}
                    href={{
                      pathname: `/${organizationId}/${path}`,
                      query,
                    }}
                    {...{ color, name, rowId, organization }}
                  />
                </WrapItem>
              );
            })}
          {edit &&
            tagsByCategoryId?.edges?.map((tag, index) => {
              const { name, rowId } = tag.node;
              // for editing category, unselect tags to remove
              let query = { tags: [] };
              if (tags?.includes(rowId)) {
                query.tags = tags.filter((tag) => tag !== rowId);
              } else {
                query.tags = [...tags, rowId];
              }
              query.tags = query.tags.filter((tag) => !!tag);
              return (
                <WrapItem key={rowId} data-cy="add_category_tag">
                  <Box>
                    <EditTag
                      id={rowId}
                      {...{ name, messageConnections }}
                      sidebarConnections={[tagsByCategoryId.__id]}
                    />
                  </Box>
                </WrapItem>
              );
            })}
          {edit && (
            <WrapItem>
              <AddTag category={rowId} connections={[tagsByCategoryId?.__id]} />
            </WrapItem>
          )}
          {edit && (
            <WrapItem>
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
                        data-cy="confirm_delete_category"
                        colorScheme="red"
                        onClick={(e) => {
                          onDelete({
                            categoryId: rowId,
                            connections: sidebarConnections,
                          });
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
                data-cy="delete_category"
                onClick={onOpen}
                bg={"white"}
                border="1px solid"
                borderColor={"red.500"}
                borderRadius={"md"}
                color={"red.500"}
                _hover={{ background: "red.500", color: "white" }}
              >
                ❌ Delete Category
              </Button>
            </WrapItem>
          )}
        </Wrap>
      </AccordionPanel>
    </AccordionItem>
  );
}
