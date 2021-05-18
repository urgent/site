import { Grid, Box, Menu, MenuButton, Image, Icon, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';
import SignIn from "../components/SignIn"

export default function Nav() {
    return (
        <Grid
            as="nav"
            gridTemplateColumns="[navLeftMargin] 10px [logo] 48px [menu] auto [button] 128px [navRightMargin] 10px"
            gridRow="nav"
            gridColumn={["sidebar / -1", "sidebar / -1", "sidebar / -1", "content", "content"]}
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
            <Box sx={{ gridColumn: "button" }} mt={2} >
                <SignIn caption={
                    <>
                        <Icon as={FaGithub} color="text.50" /><Text mx={2} color="text.50">Sign in</Text>
                    </>
                } />
            </Box>
        </Grid >
    )
}