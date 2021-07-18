import React, { useCallback, useState } from 'react'
import SignIn from "../components/SignIn"
import Edit from "../components/Edit"
import { Grid, Box, Image, Icon, Text, Button, Select, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import { BsGear } from 'react-icons/bs';
import useMutation from './useMutation'
import { useSession } from 'next-auth/client'

const InsertConfigMutation = graphql`
  mutation NavInsertConfigMutation($input:CreateUserConfigInput!) {
    createUserConfig(input: $input) {
        userConfig {
            defaultOrganization
        }
      }
    }
`;

function display(session, component) {
    if (session) {
        return component;
    }
}

export default function Nav({ organizations, editClick, setFocusedOrganization, focusedOrganization, userConfigOrganization }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isConfigPending, insertConfig] = useMutation(InsertConfigMutation);

    const [session] = useSession()

    const onEnter = useCallback(
        async (e, organizations) => {

            if (e.key !== 'Enter') {
                return;
            }
            // to replace, need better coverage as focusedOrganization is used throughout app
            // render loop with setting state in react component drop down map
            const focusedOrganizationText = organizations.edges.filter(org => {

                focusedOrganization === org.node.organizationByOrganizationId.rowId
            })
            const slug = organizations.edges[0].node.organizationByOrganizationId.slug;

            const response = await fetch('/api/invite', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: `email=${e.target.value}&slug=${slug}` // body data type must match "Content-Type" header
            });
            return response.json();
        },
        [focusedOrganization]
    )

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
            <Image gridColumn="logo" width={12} src="/images/logo.png" alt="smooms.io" />
            <Box gridColumn="edit" ml={8} mt={2}>
                <Edit click={editClick}><Text>Edit</Text></Edit>
            </Box>
            <Box gridColumn="signin" mt={2} >
                <SignIn>
                    <Text color="text.50">Sign in</Text>
                </SignIn>
            </Box>
            {display(
                session,
                <Box gridColumn="config" mt={2} >
                    <Button bg="none" ref={btnRef} onClick={onOpen} >
                        <Icon as={BsGear} w={6} h={6} />
                    </Button>
                </Box>
            )}

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
                        <Select onChange={(e) => {
                            insertConfig({
                                variables: {
                                    input: {
                                        defaultOrganization: parseInt(e.target.value),
                                    },
                                },
                                updater: store => { },
                            });
                            setFocusedOrganization(parseInt(e.target.value));
                        }}>
                            {organizations.edges.filter((edge) => {
                                return edge.node?.hasOwnProperty('organizationByOrganizationId')
                            }).map((edge) => {
                                const { rowId, slug } = edge.node?.organizationByOrganizationId;
                                if (focusedOrganization === rowId) {
                                    return <option key={rowId} value={rowId} selected="selected">{slug}</option>
                                }
                                else {
                                    return <option key={rowId} value={rowId}>{slug}</option>
                                }
                            })}
                        </Select>
                        {display(
                            session,
                            <FormControl id="email">
                                <FormLabel textAlign="center" marginTop="2rem">Add user</FormLabel>
                                <Input type="email" placeholder="Email" onKeyDown={(e) => onEnter(e, organizations)} />
                                <FormHelperText>User will receive email with sign-in instructions.</FormHelperText>
                            </FormControl>
                        )}
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
