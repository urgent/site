import React, { useState, useCallback } from 'react'
import Tag from "../components/Tag"
import Toolbar from "./Toolbar"
import { AddTag } from "./Tag"
import { Grid, VStack, Box, Wrap, WrapItem, Button, Input, Text } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import useMutation from './useMutation'

const InsertCategoryMutation = graphql`
  mutation CategoryInsertCategoryMutation($input:CreateCategoryInput!, $connections: [ID!]!) {
    createCategory(input: $input) {
      category @appendNode(connections: $connections, edgeTypeName: "CategoriesEdge") {
        id
        name
        color
      }
    }
  }
`;

const UpdateCategoryMutation = graphql`
  mutation CategoryUpdateCategoryMutation($input:UpdateCategoryInput!) {
    updateCategory(input: $input) {
      category {
        rowId
        name
        color
      }
    }
  }
`;

function display(visible, element) {
    if (visible) {
        return element
    }
}

function render(mode, edit, view) {
    if (mode === 'edit') {
        return edit
    } else {
        return view
    }

}

export function AddCategory({ connectionId, focusedOrganization }) {
    const [nameText, setNameText] = useState('');
    const [colorText, setColorText] = useState('E53E3E');
    const [isCategoryPending, insertCategory] = useMutation(InsertCategoryMutation);

    // Editor submit callback
    const onSubmit = useCallback(
        event => {
            event.preventDefault();
            insertCategory({
                variables: {
                    input: {
                        organizationId: focusedOrganization,
                        name: nameText,
                        color: colorText
                    },
                    connections: [connectionId]
                },
                updater: store => { },
            });
            // Reset form text
            setNameText('');
            setColorText('');
        },
        [nameText, setNameText, colorText, setColorText, insertCategory, focusedOrganization],
    );

    return (
        <VStack paddingX={2}>
            <Input
                size={["sm", "sm", "sm", "md", "md"]}
                maxWidth={28}
                borderRadius={8}
                paddingX={2}
                paddingY={1}
                onChange={(e) => setNameText(e.target.value)}
                placeholder="Name"
                value={nameText}
            />
            <Input
                size={["sm", "sm", "sm", "md", "md"]}
                maxWidth={28}
                borderRadius={8}
                paddingX={2}
                paddingY={1}
                onChange={(e) => setColorText(e.target.value)}
                placeholder="Color"
                value="E53E3E"
            />
            <Button onClick={(e) => onSubmit(e)}>Add</Button>
        </VStack>
    )
}

export default function Category({ edit, category, messages, tagFilter, tagClick, focusedOrganization }) {
    const [categoryMode, setCategoryMode] = useState('view');
    const [editCategoryText, setEditCategoryText] = useState(category.name);

    return (
        <Grid
            maxWidth={[16, 24, 36, 48, 48]}
            minHeight={24}
            mx="auto"
            my={4}
            pb={4}
            borderRadius="10px"
            fontSize={[8, 12, 12, 12, 12]}
            textAlign="left"
            boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
            gridTemplateRows="[toolbar] 2rem [titlebar] 2rem [body] auto"
            gridTemplateColumns="[content] 4fr [corner] 1fr"
        >
            <Box
                gridRow="toolbar"
                gridColumn="content"
            >
                {display(edit, <Toolbar editClick={() => {
                    if (categoryMode === 'edit') {
                        setCategoryMode('view')
                    }
                    else {
                        setCategoryMode('edit')
                    }
                }} />)}
            </Box>
            <Box
                gridRow="toolbar"
                gridColumn="corner"
                pt={1}
                pr={2}
                textAlign="right"
            >
                <HamburgerIcon />
            </Box>
            <Box
                gridRow="titlebar"
                gridColumn="content / -1"
                pl={1}
                pt={1}
                fontWeight="bold"
                fontSize={12}
                letterSpacing={1}
            >
                {render(
                    categoryMode,
                    <Input
                        type="text"
                        name="editCategoryText"
                        value={editCategoryText}
                        onChange={(e) => setEditCategoryText(e.target.value)}
                        size={"xs"}
                        boxShadow="1px 1px 4px rgb(0 0 0 / 20%);"
                        borderRadius={1}
                        mt={1}
                    />,
                    <Text mt={1}>{editCategoryText}</Text>
                )}
            </Box>
            <Wrap
                gridRow="body"
                gridColumn="content / -1"
                my={2}
                justify="center"
                spacing={4}
            >
                {category.tagsByCategoryId?.edges.map((edge, index) => {
                    return (
                        <WrapItem key={index}>
                            <Tag
                                click={tagClick}
                                name={edge.node.name}
                                id={edge.node.rowId}
                                tagFilter={tagFilter}
                                color={category.color}
                                edit={edit}
                                messages={messages}
                                connectionId={category.tagsByCategoryId?.__id}
                            >
                                {edge.node.name}
                            </Tag>
                        </WrapItem>
                    )
                })}
            </Wrap>
            {display(edit, <AddTag connectionId={category.tagsByCategoryId?.__id} categoryId={category.rowId} focusedOrganization={focusedOrganization} />)}
        </Grid>
    )
}