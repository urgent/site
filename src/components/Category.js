import React, { useState } from 'react'
import Tag from '../components/Tag'
import Toolbar from './Toolbar'
import { AddTag } from './Tag'
import { Grid, VStack, Box, Wrap, WrapItem, Button, Input, Text, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { useCategoryDrag } from './useCategoryDrag'
import { HamburgerIcon } from '@chakra-ui/icons'
import useMutation from './useMutation'
import AlertDialog from "./AlertDialog"
import useStore from "../utils/store"

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
                    rowId
                }
            }
        }
      }
    }
  }
`;



export function AddCategory({ connectionId }) {
    const [nameText, setNameText] = useState('');
    const [colorText, setColorText] = useState('E53E3E');
    const [isCategoryPending, insertCategory] = useMutation(InsertCategoryMutation);
    const edit = useStore((state) => state.edit);
    const organization = useStore((state) => state.organization);

    // Editor submit callback
    function onSubmit(event) {
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
    }

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
                value={colorText}
            />
            <Button data-cy="add_category_button" onClick={(e) => onSubmit(e)}>Add</Button>
        </VStack>
        }
    </>

}

export default function Category({ category, messageConnections, sidebarConnection, moveCategory, index }) {
    const [categoryMode, setCategoryMode] = useState('view');
    const [editCategoryText, setEditCategoryText] = useState();
    const [focusedCategory, setFocusedCategory] = useState();
    const [editCategoryColor, setEditCategoryColor] = useState(category?.color);
    const [isConfirmOpen, setConfirmIsOpen] = useState(false)

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
            gridTemplateRows={`[toolbar] 2rem [titlebar] 5rem [body] auto`}
            gridTemplateColumns="[content] 4fr [corner] 1fr"
            data-cy="category"
        >
            <Box
                gridRow="toolbar"
                gridColumn="content"
            >
                <AlertDialog
                    title={`Delete ${category?.name}`}
                    body={`Tags on messages will be lost. Are you sure you want to delete the ${category?.name} category?`}
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
                fontSize={24}
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
                {category?.tagsByCategoryId?.edges.map((edge, index) => {
                    return (
                        <WrapItem key={index}>
                            <Tag
                                rowId={edge.node.rowId}
                                color={category?.color}
                                messageConnections={messageConnections}
                                tagConnection={category?.tagsByCategoryId?.__id}
                                tagName={edge.node.name}
                            />
                        </WrapItem>
                    )
                })}
            </Wrap>
            <AddTag connectionId={category?.tagsByCategoryId?.__id} categoryId={category?.rowId} />
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
            gridTemplateRows={`[toolbar] 2rem [titlebar] 3rem [body] auto`}
            gridTemplateColumns="[content] 4fr [corner] 1fr"
            data-cy="category"
            ref={ref}
        >
            <Box
                gridRow="toolbar"
                gridColumn="content"
            >
                <AlertDialog
                    title={`Delete ${category?.name}`}
                    body={`Tags on messages will be lost. Are you sure you want to delete the ${category?.name} category?`}
                    click={confirmDeleteCategory}
                    isOpen={isConfirmOpen}
                    setIsOpen={setConfirmIsOpen}
                />

                {<Toolbar
                    editClick={() => {
                        setCategoryMode('edit')
                        setFocusedCategory(category?.rowId)
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
                fontSize={24}
            >
                {categoryMode !== 'edit' && <Text mt={1}>{category?.name}</Text>}
            </Box>
            <Wrap
                gridRow="body"
                gridColumn="content / -1"
                my={2}
                spacing={4}
            >
                {category?.tagsByCategoryId?.edges.map((edge, index) => {
                    return (
                        <WrapItem key={index}>
                            <Tag
                                rowId={edge.node.rowId}
                                color={category?.color}
                                messageConnections={messageConnections}
                                tagConnection={category?.tagsByCategoryId?.__id}
                                tagName={edge.node.name}
                            />
                        </WrapItem>
                    )
                })}
            </Wrap>
            <AddTag categoryTagsConnection={category?.tagsByCategoryId?.__id} categoryId={category?.rowId} />
        </Grid>
        }
    </>
}

export function CollapsableItem({ category, moveCategory }) {
    const [ref] = useCategoryDrag({ category, moveCategory });
    return <AccordionItem key={category.rowId} ref={ref}>
        <h2>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    {category.name}
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
                                rowId={tag.node.rowId}
                                color={category?.color}
                                tagConnection={category?.tagsByCategoryId?.__id}
                                tagName={tag.node.name}
                            />
                        </WrapItem>
                    )
                })}
            </Wrap>
        </AccordionPanel>
    </AccordionItem>
}