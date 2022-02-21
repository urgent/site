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
import { useRouter } from "next/router";
import { decode } from "../utils/route";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { catchJSON } from "../utils/editor";

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
  const [name, setName] = useState("");
  const [color, setColor] = useState("E53E3E");
  const [isCategoryPending, insertCategory] = useMutation(
    InsertCategoryMutation
  ) as [boolean, (config?: any) => void];
  const router = useRouter();
  const { organization, tag } = router.query;

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
        connections: [connectionId],
      },
      updater: (store) => {},
    });
    // Reset form text
    setName("");
    setColor("");
  }

  const size = useBreakpointValue(["sm", "sm", "sm", "md", "md"]);

  return (
    <VStack paddingX={2}>
      <Input
        size={size}
        maxWidth={28}
        borderRadius={8}
        paddingX={2}
        paddingY={1}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        value={name}
        data-cy="add_category_name"
      />
      <Input
        size={size}
        maxWidth={28}
        borderRadius={8}
        paddingX={2}
        paddingY={1}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Color"
        value={color}
      />
      <Button data-cy="add_category_button" onClick={(e) => onSubmit(e)}>
        Add
      </Button>
    </VStack>
  );
}

export function Category({ category, index, moveCategory }) {
  const [ref] = useCategoryDrag({ category, index, onDrop: moveCategory });
  const { rowId, color, name, tagsByCategoryId, organizationId } = category;
  const [isConfirmOpen, setConfirmIsOpen] = useState(false);
  const router = useRouter();
  const { organization, tag } = router.query;
  const tags = decode(tag as string).map((tag) => parseInt(tag));
  const parsed = catchJSON(name);
  const editor = useEditor({
    editable: false,
    content: parsed,
    extensions: [StarterKit],
  });

  return (
    <AccordionItem key={rowId} ref={ref}>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <EditorContent editor={editor} />
            {tagsByCategoryId?.edges
              .filter((edge) => tags.includes(edge.node.rowId))
              .map((edge) => {
                return (
                  <Badge
                    data-cy="category_title_tag"
                    key={edge.node.rowId}
                    variant="outline"
                    color="white"
                    bg={`#${color}`}
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
          {tagsByCategoryId?.edges.map((tag, index) => {
            return (
              <WrapItem key={index}>
                <Tag
                  id={tag.node.rowId}
                  color={color}
                  name={tag.node.name}
                  organization={organizationId}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </AccordionPanel>
    </AccordionItem>
  );
}
