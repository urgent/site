import React from 'react'
import SignIn from "../components/SignIn"
import Edit from "../components/Edit"
import { Grid, Box, Image, Icon, Text, Button, Select, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react'
import { BsGear } from 'react-icons/bs';

export default function Nav({ organizations, editClick, navOrgClick, focusedOrganization }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Grid
            as="nav"
            gridTemplateColumns={[
                ["[navLeftMargin] 10px [logo] 48px [edit] 112px [signin] 176px [config] 64px [navRightMargin] 10px"],
                ["[navLeftMargin] 10px [logo] 48px [edit] 112px [signin] 176px [config] 64px [navRightMargin] 10px"],
                ["[navLeftMargin] 10px [logo] 48px [edit] auto [signin] 176px [config] 64px [navRightMargin] 10px"]
            ]
            }
            gridRow="nav"
            gridColumn={["sidebar / -1", "sidebar / -1", "sidebar / -1", "content", "content"]}
            pt={4}
        >
            <Image gridColumn="logo" width={12} src="/images/smooms.io.svg" alt="smooms.io" />
            <Box gridColumn="edit" ml={8} mt={2}>
                <Edit click={editClick}><Text>Edit</Text></Edit>
            </Box>
            <Box gridColumn="signin" mt={2} >
                <SignIn>
                    <Text color="text.50">Sign in</Text>
                </SignIn>
            </Box>
            <Box gridColumn="config" mt={2} >
                <Button bg="none" ref={btnRef} onClick={onOpen} >
                    <Icon as={BsGear} w={6} h={6} />
                </Button>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement="bottom"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Organization</DrawerHeader>

                    <DrawerBody>
                        <Select onChange={navOrgClick}>
                            {organizations.edges.map((edge) => {
                                if (focusedOrganization == edge.node.rowId) {
                                    return <option value={edge.node.rowId} selected="selected">{edge.node.slug}</option>
                                } else {
                                    return <option value={edge.node.rowId}>{edge.node.slug}</option>
                                }
                            })}
                        </Select>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </Grid >
    )
}
