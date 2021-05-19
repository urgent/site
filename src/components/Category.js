import { Grid, Box } from "@chakra-ui/react"
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
            gridTemplateRows="[titlebar] 16px [body] auto"
            gridTemplateColumns="[content] auto [corner] 16px"
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
        </Grid>
    )
}