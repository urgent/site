import Tag from "../components/Tag"
import { Grid, Box, Wrap, WrapItem } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export default function Category({ children }) {
    return (
        <Grid
            maxWidth={[16, 24, 36, 48, 48]}
            minHeight={24}
            mx="auto"
            my={4}
            borderRadius="10px"
            fontSize={[8, 12, 12, 12, 12]}
            textAlign="left"
            boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
            gridTemplateRows="[titlebar] 24px [body] auto"
            gridTemplateColumns="[content] auto [corner] 24px"
        >
            <Box
                gridRow="titlebar"
                gridColumn="corner"
                pt={1}
            >
                <HamburgerIcon />
            </Box>
            <Box
                gridRow="titlebar"
                gridColumn="content"
                pl={1}
                pt={1}
            >
                {children}
            </Box>
            <Wrap
                gridRow="body"
                gridColumn="content / -1"
                my={2}
                justify="center"
                spacing={4}
            >
                {["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5", "Cat 6", "Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5", "Cat 6", "Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5", "Cat 6"].map((node) => <WrapItem><Tag>{node}</Tag></WrapItem>)}
            </Wrap>
        </Grid>
    )
}