import React, { useState } from "react";
import Tag from "../components/Tag";
import { AddTag } from "./Tag";
import {
  VStack,
  Box,
  Wrap,
  WrapItem,
  Button,
  Input,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useCategoryDrag } from "./useCategoryDrag";
import useMutation from "./useMutation";
import AlertDialog from "./AlertDialog";
import useStore from "../utils/store";
import { useCategory } from "./useCategory";
import { graphql, useFragment } from "react-relay";

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

export function AddCategory({ connectionId }) {
  const [nameText, setNameText] = useState("");
  const [colorText, setColorText] = useState("E53E3E");
  const [isCategoryPending, insertCategory] = useMutation(
    InsertCategoryMutation
  );
  const edit = useStore((state) => state.edit);
  const organization = useStore((state) => state.organization);

  // Editor submit callback
  function onSubmit(event) {
    event.preventDefault();
    if (typeof insertCategory === "function") {
      insertCategory({
        variables: {
          input: {
            organizationId: organization,
            name: nameText,
            color: colorText,
          },
          connections: [connectionId],
        },
        updater: (store) => {},
      });
    }
    // Reset form text
    setNameText("");
    setColorText("");
  }

  const size = useBreakpointValue(["sm", "sm", "sm", "md", "md"]);

  return (
    <>
      {edit && (
        <VStack paddingX={2}>
          <Input
            size={size}
            maxWidth={28}
            borderRadius={8}
            paddingX={2}
            paddingY={1}
            onChange={(e) => setNameText(e.target.value)}
            placeholder="Name"
            value={nameText}
            data-cy="add_category_name"
          />
          <Input
            size={size}
            maxWidth={28}
            borderRadius={8}
            paddingX={2}
            paddingY={1}
            onChange={(e) => setColorText(e.target.value)}
            placeholder="Color"
            value={colorText}
          />
          <Button data-cy="add_category_button" onClick={(e) => onSubmit(e)}>
            Add
          </Button>
        </VStack>
      )}
    </>
  );
}

export function Category({
  category,
  index,
  moveCategory,
  messageTagConnections,
  sidebarConnection,
}) {
  const [ref] = useCategoryDrag({ category, index, onDrop: moveCategory });
  const [isConfirmOpen, setConfirmIsOpen] = useState(false);
  const [focusedCategory, setFocusedCategory] = useState();
  const edit = useStore((state) => state.edit);
  const [editCategoryText, setEditCategoryText] = useState(category?.name);
  const [editCategoryColor, setEditCategoryColor] = useState(category?.color);
  const [onEnter, del] = useCategory({
    focusedCategory,
    setFocusedCategory,
    editCategoryText,
    editCategoryColor,
  });
  const filter = useStore((state) => state.filter);

  return (
    <AccordionItem key={category.rowId} ref={ref}>
      <AlertDialog
        title={`Delete ${category?.name}`}
        body={`Tags on messages will be lost. Are you sure you want to delete the ${category?.name} category?`}
        click={() =>
          del({
            categoryId: category?.rowId,
            messageTagConnections: messageTagConnections,
            sidebarConnection: sidebarConnection,
          })
        }
        isOpen={isConfirmOpen}
        setIsOpen={setConfirmIsOpen}
      />
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {!edit && (
              <>
                {category.name}
                {category.tagsByCategoryId?.edges
                  .filter((tag) => {
                    return filter.includes(tag.node.rowId);
                  })
                  .map((tag) => {
                    return (
                      <Badge
                        data-cy="category_title_tag"
                        key={tag.node.rowId}
                        variant="outline"
                        color="white"
                        bg={`#${category.color}`}
                        px={2}
                        mx={2}
                        boxShadow="none"
                      >
                        <Box>{tag.node.name}</Box>
                      </Badge>
                    );
                  })}
              </>
            )}
            {edit && focusedCategory === category.rowId && (
              <>
                <Input
                  type="text"
                  name="editCategoryText"
                  onChange={(e) => setEditCategoryText(e.target.value)}
                  size={"xs"}
                  boxShadow="1px 1px 4px rgb(0 0 0 / 20%);"
                  borderRadius={1}
                  mt={1}
                  onKeyDown={onEnter}
                  value={editCategoryText}
                />
                <Input
                  type="text"
                  name="editCategoryColor"
                  onChange={(e) => setEditCategoryColor(e.target.value)}
                  size={"xs"}
                  boxShadow="1px 1px 4px rgb(0 0 0 / 20%);"
                  borderRadius={1}
                  mt={1}
                  onKeyDown={onEnter}
                  value={editCategoryColor}
                />
              </>
            )}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Wrap>
          {category.tagsByCategoryId?.edges.map((tag, index) => {
            return (
              <WrapItem key={index}>
                <Tag
                  id={tag.node.rowId}
                  color={category?.color}
                  name={tag.node.name}
                />
              </WrapItem>
            );
          })}
        </Wrap>
        <AddTag
          connectionId={category?.tagsByCategoryId?.__id}
          categoryId={category?.rowId}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}
