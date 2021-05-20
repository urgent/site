import SignIn from "../components/SignIn"
import Edit from "../components/Edit"
import { Grid, Box, Image, Icon, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';

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
            <Box gridColumn="menu" ml={8} mt={2}>
                <Edit>Edit</Edit>
            </Box>
            <Box sx={{ gridColumn: "button" }} mt={2} >
                <SignIn>
                    <>
                        <Icon as={FaGithub} color="text.50" /><Text mx={2} color="text.50">Sign in</Text>
                    </>
                </SignIn>
            </Box>
        </Grid >
    )
}