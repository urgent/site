import React, { useState } from "react";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useCategoryDrag } from "./useCategoryDrag";
import useMutation from "./useMutation";
import { graphql } from "react-relay";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { catchJSON } from "../utils/editor";
import { AddTag } from "../components/Tag";
import { SketchPicker } from "react-color";

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
        @appendNode(connections: $connections, edgeTypeName: "CategoriesEdge") {
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

export function AddCategory({ connections, organization }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState({ hex: "#000000" });
  const [isCategoryPending, insertCategory] = useMutation(
    InsertCategoryMutation
  ) as [boolean, (config?: any) => void];

  // Editor submit callback
  function onSubmit(event) {
    event.preventDefault();
    insertCategory({
      variables: {
        input: {
          organizationId: organization,
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

  const breakpoint = useBreakpointValue(["sm", "sm", "sm", "sm", "sm"]);

  return (
    <VStack paddingX={2}>
      <SketchPicker color={color} onChange={setColor} />
      <Box>
        <Input
          size={breakpoint}
          borderRadius={"md"}
          py={2}
          px={1}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          value={name}
          data-cy="add_category_name"
          m={0}
          maxWidth={36}
          borderRightRadius={0}
        />
        <Button
          data-cy="add_category_button"
          borderLeftRadius={0}
          size={breakpoint}
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
  onClick,
  connections,
  edit,
}: {
  category: any;
  index: number;
  moveCategory: any;
  tags: number[];
  path: string;
  onClick?: any;
  connections?: any;
  edit?: boolean;
}) {
  const [ref] = useCategoryDrag({ category, index, onDrop: moveCategory });
  const { rowId, color, name, tagsByCategoryId, organizationId } = category;
  const [isConfirmOpen, setConfirmIsOpen] = useState(false);
  const [isDeleteCategoryPending, deleteCategory] = useMutation(
    DeleteCategoryMutation
  ) as [boolean, (config?: any) => void];

  const parsed = catchJSON(name);
  const view = useEditor({
    editable: false,
    content: parsed,
    extensions: [StarterKit],
  });

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

  return (
    <AccordionItem key={rowId} ref={ref} data-cy="category">
      <h2>
        <AccordionButton data-cy="category_title">
          <Box flex="1" textAlign="left">
            <EditorContent editor={view} />
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
              <WrapItem key={index}>
                <Tag
                  active={tags.includes(rowId)}
                  href={{
                    pathname: `/${organizationId}/${path}`,
                    query,
                  }}
                  {...{ color, name, onClick }}
                />
              </WrapItem>;
            })}
        </Wrap>
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
            <WrapItem key={index}>
              <Tag
                active={tags.includes(rowId)}
                href={{
                  pathname: `/${organizationId}/${path}`,
                  query,
                }}
                {...{ color, name, onClick }}
              />
            </WrapItem>;
          })}
        {edit && (
          <VStack mt={10}>
            <AddTag category={rowId} connections />
            <Button
              data-cy="delete_category"
              onClick={(e) => onDelete({ categoryId: rowId, connections })}
            >
              Delete
            </Button>
          </VStack>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
}
