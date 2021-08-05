import React, { useCallback, useState } from 'react'
import { VStack, Box, Image, Icon, Text, Button, Select, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import { BsGear } from 'react-icons/bs';
import useMutation from './useMutation'
import { HiOutlineCreditCard, HiOutlineChip, HiOutlineUserGroup, HiOutlineUserRemove, HiChartBar, HiOutlineUserAdd } from 'react-icons/hi';
import { FiLayers, FiLayout, FiGitMerge, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'

const InsertConfigMutation = graphql`
  mutation NavInsertConfigMutation($input:CreateUserConfigInput!) {
    createUserConfig(input: $input) {
        userConfig {
            defaultOrganization
        }
      }
    }
`;

function OrganizationMenu({ isOpen, onClose, organizations, setFocusedOrganization, focusedOrganization, btnRef }) {
    const [isConfigPending, insertConfig] = useMutation(InsertConfigMutation);
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
    return <Drawer
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
                <FormControl id="email">
                    <FormLabel textAlign="center" marginTop="2rem">Add user</FormLabel>
                    <Input type="email" placeholder="Email" onKeyDown={(e) => onEnter(e, organizations)} />
                    <FormHelperText>User will receive email with sign-in instructions.</FormHelperText>
                </FormControl>
            </DrawerBody>

            <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}

export default function Nav({ edit, organizations, editClick, setFocusedOrganization, focusedOrganization }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [session] = useSession()
    // used for nav button colors
    const [focus, setFocus] = useState();

    const colors = {
        edit: "none",
        org: "none",
        card: "none",
        user: "none",
        bar: "none",
        chip: "none",
        layout: "none",
    };

    colors[focus] = '#FABC37'

    if (edit) {
        colors.edit = '#FABC37';
    }

    if (session) {
        return (
            <VStack
                spacing={2}
                as="nav"
                gridColumn={"nav"}
                bg={'primary.400'}
            >
                <Image gridColumn="logo" width={12} src="/images/logo-invert.png" alt="smooms.io" />
                <Button bg={colors.edit} color="white" _hover={{ bg: "#FABC37" }} data-cy="edit_mode" onClick={(e) => {
                    editClick(e);
                }}>
                    <Icon as={FiEdit} w={6} h={6} />
                </Button>
                <Button bg={colors.org} color="white" _hover={{ bg: "#FABC37" }} ref={btnRef} onClick={(e) => {
                    setFocus('org');
                    onOpen(e);
                }} >
                    <Icon as={BsGear} w={6} h={6} />
                </Button>
                <Button bg={colors.card} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('card');
                }}>
                    <Icon as={HiOutlineCreditCard} w={6} h={6} />
                </Button>
                <Button bg={colors.bar} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('user');
                }}>
                    <Icon as={HiChartBar} w={6} h={6} />
                </Button>
                <Button bg={colors.chip} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('chip');
                }}>
                    <Icon as={HiOutlineChip} w={6} h={6} />
                </Button>
                <Button bg={colors.layout} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('layout');
                }}>
                    <Icon as={FiLayout} w={6} h={6} />
                </Button>
                <Button bg="none" color="white" _hover={{ bg: "#FABC37" }} onClick={signOut} data-cy="signout">
                    <Icon as={FiLogOut} w={6} h={6} />
                </Button>
                <OrganizationMenu {...{ isOpen, onOpen, onClose, organizations, setFocusedOrganization, focusedOrganization, btnRef }} />
            </VStack >
        )
    }
    else {
        return (<VStack
            spacing={2}
            as="nav"
            gridColumn={"nav"}
            bg={'primary.400'}
        >
            <Image gridColumn="logo" width={12} src="/images/logo-invert.png" alt="smooms.io" />
            <Button
                onClick={() => signIn(1)}
                data-cy="signin"
                bg="none"
                color="white"
                _hover={{ bg: "#FABC37" }}
            >
                <Icon as={FiLogIn} w={6} h={6} />
            </Button>
        </VStack>)
    }
}
