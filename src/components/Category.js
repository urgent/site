import React, { useState, useCallback } from 'react'
import Tag from "../components/Tag"
import Toolbar from "./Toolbar"
import { AddTag } from "./Tag"
import { Grid, VStack, Box, Wrap, WrapItem, Button, Input } from "@chakra-ui/react"
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

function display(visible, element) {
    if (visible) {
        return element
    }
}

export function AddCategory({ connectionId }) {
    const [nameText, setNameText] = useState('');
    const [colorText, setColorText] = useState('');
    const [isCategoryPending, insertCategory] = useMutation(InsertCategoryMutation);

    // Editor submit callback
    const onSubmit = useCallback(
        event => {
            event.preventDefault();
            insertCategory({
                variables: {
                    input: {
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
        [nameText, setNameText, colorText, setColorText, insertCategory],
    );

    return (
        <VStack paddingX={2}>
            <Input
                size={["sm", "sm", "sm", "md", "md"]}
                maxWidth={28}
                borderRadius={8}
                paddingX={2}
                paddingY={1}
                isFullWidth={false}
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
                isFullWidth={false}
                onChange={(e) => setColorText(e.target.value)}
                placeholder="Color"
                value={colorText}
            />
            <Button onClick={(e) => onSubmit(e)}>Add</Button>
        </VStack>
    )
}

export default function Category({ edit, category, tagFilter, tagClick }) {
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
                {display(edit, <Toolbar />)}
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
                {category.name}
            </Box>
            <Wrap
                gridRow="body"
                gridColumn="content / -1"
                my={2}
                justify="center"
                spacing={4}
            >
                {category.tagsByCategoryId?.edges.map((tag, index) => (
                    <WrapItem key={index}>
                        <Tag
                            click={tagClick}
                            name={tag.name}
                            tagFilter={tagFilter}
                            color={category.color}
                        >
                            {tag.name}
                        </Tag>
                    </WrapItem>
                ))}
            </Wrap>
            {display(edit, <AddTag connectionId={category.tagsByCategoryId.__id} categoryId={category.rowId} />)}
        </Grid>
    )
}