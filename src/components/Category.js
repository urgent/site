import React, { useState, useCallback } from 'react'
import Tag from "../components/Tag"
import Toolbar from "./Toolbar"
import { AddTag } from "./Tag"
import { Grid, VStack, Box, Wrap, WrapItem, Button, Input, Text } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import useMutation from './useMutation'
import AlertDialog from "./AlertDialog";
import useStore from "../utils/store";

const InsertCategoryMutation = graphql`
  mutation CategoryInsertCategoryMutation($input:CreateCategoryInput!, $connections: [ID!]!) {
    createCategory(input: $input) {
      category @appendNode(connections: $connections, edgeTypeName: "CategoriesEdge") {
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
                }
            }
        }
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
        tagsByCategoryId {
            __id
            edges {
                node {
                    name
                }
            }
        }
      }
    }
  }
`;

const DeleteCategoryMutation = graphql`
    mutation CategoryDeleteMutation($input:DeleteCategoryInput!, $connections: [ID!]!) {
        deleteCategory(input: $input) {
            category {
                __id @deleteEdge(connections: $connections)
            }
            query {
                allMessages {
                    nodes {
                        messageTagsByMessageId {
                            __id @deleteEdge(connections: $connections)
                            edges {
                                node {
                                messageId
                                }
                            }
                        }
                        content
                    }
                }
                allCategories {
                    __id @deleteEdge(connections: $connections)
                }
            }
        }
    }
`

export function AddCategory({ connectionId }) {
    const [nameText, setNameText] = useState('');
    const [colorText, setColorText] = useState('E53E3E');
    const [isCategoryPending, insertCategory] = useMutation(InsertCategoryMutation);
    const edit = useStore((state) => state.edit);
    const organization = useStore((state) => state.organization);

    // Editor submit callback
    const onSubmit = useCallback(
        event => {
            event.preventDefault();
            insertCategory({
                variables: {
                    input: {
                        organizationId: organization,
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
        [nameText, setNameText, colorText, setColorText, insertCategory, organization, connectionId],
    );
    return <>
        {edit && <VStack paddingX={2}>
            <Input
                size={["sm", "sm", "sm", "md", "md"]}
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
                size={["sm", "sm", "sm", "md", "md"]}
                maxWidth={28}
                borderRadius={8}
                paddingX={2}
                paddingY={1}
                onChange={(e) => setColorText(e.target.value)}
                placeholder="Color"
                value="E53E3E"
            />
            <Button data-cy="add_category_button" onClick={(e) => onSubmit(e)}>Add</Button>
        </VStack>
        }
    </>

}

export default function Category({ category, messageConnections, sidebarConnection }) {
    const [categoryMode, setCategoryMode] = useState('view');
    const [editCategoryText, setEditCategoryText] = useState();
    const [focusedCategory, setFocusedCategory] = useState();
    const [isUpdateCategoryPending, updateCategory] = useMutation(UpdateCategoryMutation);
    const [editCategoryColor, setEditCategoryColor] = useState(category.color);
    const [isDeleteCategoryPending, deleteCategory] = useMutation(DeleteCategoryMutation);
    const [isConfirmOpen, setConfirmIsOpen] = useState(false)

    const onEnter = useCallback(
        e => {
            if (e.key !== 'Enter') {
                return;
            }
            updateCategory({
                variables: {
                    input: {
                        id: focusedCategory,
                        name: editCategoryText,
                        color: editCategoryColor
                    },
                },
            });
            setCategoryMode('view')
            setFocusedCategory(false)
        }
    )

    const confirmDeleteCategory = useCallback(() => {
        deleteCategory({
            variables: {
                input: {
                    categoryId: category.rowId
                },
                connections: [...messageConnections, sidebarConnection],
            },
            updater: store => { },
        })
    }, [deleteCategory, category, messageConnections, sidebarConnection]);

    return <>
        {categoryMode === 'edit' && <Grid
            maxWidth={[16, 24, 36, 96, 96]}
            minHeight={24}
            mx="auto"
            my={4}
            pb={4}
            borderRadius="10px"
            fontSize={[8, 12, 12, 12, 12]}
            textAlign="left"
            boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
            gridTemplateRows={`[toolbar] 2rem [titlebar] 4rem [body] auto`}
            gridTemplateColumns="[content] 4fr [corner] 1fr"
            data-cy="category"
        >
            <Box
                gridRow="toolbar"
                gridColumn="content"
            >
                <AlertDialog
                    title={`Delete ${category.name}`}
                    body={`Tags on messages will be lost. Are you sure you want to delete the ${category.name} category?`}
                    click={confirmDeleteCategory}
                    isOpen={isConfirmOpen}
                    setIsOpen={setConfirmIsOpen}
                />

                {<Toolbar
                    editClick={() => {
                        setCategoryMode('view')
                        setFocusedCategory(false)
                    }}
                    deleteClick={() => setConfirmIsOpen(true)}
                />}
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
                {categoryMode === 'edit' &&
                    <>
                        <Input
                            type="text"
                            name="editCategoryText"
                            value={editCategoryText}
                            onChange={(e) => setEditCategoryText(e.target.value)}
                            size={"xs"}
                            boxShadow="1px 1px 4px rgb(0 0 0 / 20%);"
                            borderRadius={1}
                            mt={1}
                            onKeyDown={onEnter}
                        />
                        <Input
                            type="text"
                            name="editCategoryColor"
                            value={editCategoryColor}
                            onChange={(e) => setEditCategoryColor(e.target.value)}
                            size={"xs"}
                            boxShadow="1px 1px 4px rgb(0 0 0 / 20%);"
                            borderRadius={1}
                            mt={1}
                            onKeyDown={onEnter}
                        />
                    </>}
            </Box>
            <Wrap
                gridRow="body"
                gridColumn="content / -1"
                my={2}
                spacing={4}
            >
                {category.tagsByCategoryId?.edges.map((edge, index) => {
                    return (
                        <WrapItem key={index}>
                            <Tag
                                rowId={edge.node.rowId}
                                color={category.color}
                                messageConnections={messageConnections}
                                tagConnection={category.tagsByCategoryId?.__id}
                                tagName={edge.node.name}
                            />
                        </WrapItem>
                    )
                })}
            </Wrap>
            <AddTag connectionId={category.tagsByCategoryId?.__id} categoryId={category.rowId} />
        </Grid>
        }


        {categoryMode !== 'edit' && <Grid
            maxWidth={[16, 24, 36, 96, 96]}
            minHeight={24}
            mx="auto"
            my={4}
            pb={4}
            borderRadius="10px"
            fontSize={[8, 12, 12, 12, 12]}
            textAlign="left"
            boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
            gridTemplateRows={`[toolbar] 2rem [titlebar] 2rem [body] auto`}
            gridTemplateColumns="[content] 4fr [corner] 1fr"
            data-cy="category"
        >
            <Box
                gridRow="toolbar"
                gridColumn="content"
            >
                <AlertDialog
                    title={`Delete ${category.name}`}
                    body={`Tags on messages will be lost. Are you sure you want to delete the ${category.name} category?`}
                    click={confirmDeleteCategory}
                    isOpen={isConfirmOpen}
                    setIsOpen={setConfirmIsOpen}
                />

                {<Toolbar
                    editClick={() => {
                        setCategoryMode('edit')
                        setFocusedCategory(category.rowId)
                    }}
                    deleteClick={() => setConfirmIsOpen(true)}
                />}
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
                {categoryMode !== 'edit' && <Text mt={1}>{category.name}</Text>}
            </Box>
            <Wrap
                gridRow="body"
                gridColumn="content / -1"
                my={2}
                spacing={4}
            >
                {category.tagsByCategoryId?.edges.map((edge, index) => {
                    return (
                        <WrapItem key={index}>
                            <Tag
                                rowId={edge.node.rowId}
                                color={category.color}
                                messageConnections={messageConnections}
                                tagConnection={category.tagsByCategoryId?.__id}
                                tagName={edge.node.name}
                            />
                        </WrapItem>
                    )
                })}
            </Wrap>
            <AddTag categoryTagsConnection={category.tagsByCategoryId?.__id} categoryId={category.rowId} />
        </Grid>
        }
    </>
}