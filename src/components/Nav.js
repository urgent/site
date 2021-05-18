import { Grid, Box, Menu, MenuButton, Image } from '@chakra-ui/react'

export default function Nav() {
    return (
        <Grid
            as="nav"
            gridTemplateColumns="[navLeftMargin] 10px [logo] 48px [menu] auto [button] 48px [navRightMargin] 10px"
            gridRow="nav"
            gridColumn="sidebar / -1"
            pt={4}
        >
            <Image width={12} src="/images/smooms.io.svg" alt="smooms.io" sx={{ gridColumn: "logo" }} />
            <Box sx={{ gridColumn: "menu" }} mt={3} ml={3}>
                <Menu>
                    <MenuButton mx={2}>Product</MenuButton>
                    <MenuButton mx={2}>Company</MenuButton>
                    <MenuButton mx={2}>Blog</MenuButton>
                    <MenuButton mx={2}>Contact</MenuButton>
                </Menu>
            </Box>

        </Grid>
    )
}