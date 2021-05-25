import Tag from "../components/Tag"
import Toolbar from "./Toolbar"
import { Grid, HStack, Box, Wrap, WrapItem } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

function display(visible) {
    if (visible) {
        return <Toolbar />
    }
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
                {display(edit)}
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
                {category.tags.map((tag, index) => (
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
        </Grid>
    )
}