import React, { useState } from 'react'
import { VStack, Box, Image, Icon, Button, Select, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import { Grid, GridItem, Heading, Divider, Flex, Spacer } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay/hooks';
import useMutation from './useMutation'
import { HiOutlineCreditCard, HiOutlineChip, HiOutlineUserGroup, HiOutlineUserRemove, HiChartBar, HiOutlineUserAdd } from 'react-icons/hi';
import { FiLayers, FiLayout, FiGitMerge, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'
import useStore from "../utils/store";

const gridButtonStyle = {
    color: "white",
    backgroundColor: "#888888",
    borderRadius: "15px"
};

const gridInputStyle = {
    borderColor: "#adadad",
    color: "#adadad",
    borderRadius: "15px",
    borderWidth: "2px"
}

const InsertConfigMutation = graphql`
  mutation NavInsertConfigMutation($input:CreateUserConfigInput!) {
    createUserConfig(input: $input) {
        userConfig {
            defaultOrganization
        }
      }
    }
`;

const organizationFragment = graphql`
  fragment NavFragment_organization on Query {
    allOrganizationUsers {
      __id
      edges {
        node {
          organizationByOrganizationId {
            rowId
            slug
          }
        }
      }
    }
  }
`;

const userConfigFragment = graphql`
  fragment NavFragment_userConfig on Query {
    allUserConfigs {
      edges {
        node {
          defaultOrganization
        }
      }
    }
  }
`;

const allUsersFragment = graphql`
  fragment NavAllUsers on Query {
    allUsers{
      edges{
        node{
            id
            name
            email
        }
      }
    }
  }
`;

function OrganizationMenu({ isOpen, onClose, organizations, btnRef, users }) {
    const organization = useStore((state) => state.organization);
    const focusOrganization = useStore((state) => state.focusOrganization);
    const [isConfigPending, insertConfig] = useMutation(InsertConfigMutation);

    async function onEnter(e, organizations) {
        if (e.key !== 'Enter') {
            return;
        }
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
    }

    return <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
    >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader>
                <Flex>
                    <Spacer />
                    <Select
                        onChange={(e) => {
                            insertConfig({
                                variables: {
                                    input: {
                                        defaultOrganization: parseInt(e.target.value),
                                    },
                                },
                                updater: store => { },
                            });
                            focusOrganization(parseInt(e.target.value));
                        }}
                        width='200px'
                        bgColor='black'
                        color="white"
                        borderRadius="20"
                    >
                        {organizations?.edges?.filter((edge) => {
                            return edge.node?.hasOwnProperty('organizationByOrganizationId')
                        }).map((edge) => {
                            const { rowId, slug } = edge.node?.organizationByOrganizationId;
                            if (organization === rowId) {
                                return <option key={rowId} value={rowId} selected="selected">{slug}</option>
                            }
                            else {
                                return <option key={rowId} value={rowId}>{slug}</option>
                            }
                        })}
                    </Select>
                </Flex>
            </DrawerHeader>
            <DrawerBody m="5">
                <Heading as="h2" size="xl" my="5" color="#666666">
                    Admins
                </Heading>
                <Grid
                    templateColumns="repeat(6, 1fr)"
                    gap={6}
                    mb="5"
                >
                    {users?.edges?.map((edge) => {
                        return (
                            <>
                                <Box>{edge.node.name}</Box>
                                <Box>{edge.node.email}</Box>
                                <Button size="sm" style={gridButtonStyle}>Remove</Button>
                                <Button size="sm" style={gridButtonStyle}>Make User</Button>
                                <Button size="sm" style={gridButtonStyle}>Change Email</Button>
                                <Button size="sm" style={gridButtonStyle}>Reset Password</Button>
                            </>
                        )
                    })}
                    <Input type="name" placeholder="Name" style={gridInputStyle} />
                    <Input type="email" placeholder="Email" style={gridInputStyle} />
                    <Button size="sm" style={gridButtonStyle}>Add</Button>
                </Grid>

                <Divider orientation="horizontal" />

                <Heading as="h2" size="xl" my="5" color="#666666">
                    Users
                </Heading>
                <Grid
                    templateColumns="repeat(6, 1fr)"
                    gap={6}
                    mb="5"
                >
                    {users?.edges?.map((edge) => {
                        return (
                            <>
                                <Box>{edge.node.name}</Box>
                                <Box>{edge.node.email}</Box>
                                <Button size="sm" style={gridButtonStyle}>Remove</Button>
                                <Button size="sm" style={gridButtonStyle}>Make User</Button>
                                <Button size="sm" style={gridButtonStyle}>Change Email</Button>
                                <Button size="sm" style={gridButtonStyle}>Reset Password</Button>
                            </>
                        )
                    })}
                    <Input type="name" placeholder="Name" style={gridInputStyle} />
                    <Input type="email" placeholder="Email" style={gridInputStyle} />
                    <Button size="sm" style={gridButtonStyle} onClick={(e) => (onAddUser(e))}>Add</Button>
                </Grid>
            </DrawerBody>

            <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}

export default function Nav({ query }) {
    const users = useFragment(allUsersFragment, query);
    const organizations = useFragment(organizationFragment, query);
    const userConfig = useFragment(userConfigFragment, query);
    const organization = useStore((state) => state.organization);
    const focusOrganization = useStore((state) => state.focusOrganization);

    // needs to move in SSG, getServerSideProps
    if (!organization) {
        // if user config exists, use as default organization. If not, use first row in organization query
        if (userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization > 0) {
            focusOrganization(userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization);
        } else {
            focusOrganization(organizations.allOrganizationUsers?.edges[0]?.node?.organizationByOrganizationId.rowId);
        }
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [session] = useSession()
    // used for nav button colors
    const [focus, setFocus] = useState();
    const edit = useStore((state) => state.edit);
    const toggleEdit = useStore((state) => state.toggleEdit);


    const colors = {
        edit: "none",
        org: "none",
        card: "none",
        user: "none",
        bar: "none",
        chip: "none",
        layout: "none",
    };

    if (edit) {
        colors.edit = 'secondary.400';
    }
    colors[focus] = 'secondary.400'

    if (session) {
        return (
            <VStack
                spacing={2}
                as="nav"
                gridColumn={"nav"}
                bg={'primary.400'}
                position={["static", "static", "static", "static", "fixed"]}
                height={["auto", "auto", "auto", "auto", "100vh"]}
            >
                <Image gridColumn="logo" width={12} src="/images/align-white-icon.svg" alt="smooms.io" />
                <Button bg={colors.edit} color="white" _hover={{ bg: 'secondary.400' }} data-cy="edit_mode" onClick={(e) => {
                    setFocus();
                    toggleEdit();
                }}>
                    <Icon as={FiEdit} w={6} h={6} />
                </Button>
                <Button bg={colors.org} color="white" _hover={{ bg: 'secondary.400' }} ref={btnRef} onClick={(e) => {
                    setFocus('org');
                    onOpen(e);
                }} >
                    <Icon as={HiOutlineUserGroup} w={6} h={6} />
                </Button>
                <Button bg={colors.chip} color="white" _hover={{ bg: 'secondary.400' }} onClick={(e) => {
                    setFocus('chip');
                }}>
                    <Icon as={HiOutlineChip} w={6} h={6} />
                </Button>
                <Button bg={colors.card} color="white" _hover={{ bg: 'secondary.400' }} onClick={(e) => {
                    setFocus('card');
                }}>
                    <Icon as={HiOutlineCreditCard} w={6} h={6} />
                </Button>
                <Button bg={colors.user} color="white" _hover={{ bg: 'secondary.400' }} onClick={(e) => {
                    setFocus('user');
                }}>
                    <Icon as={HiChartBar} w={6} h={6} />
                </Button>
                <Button bg={colors.layout} color="white" _hover={{ bg: 'secondary.400' }} onClick={(e) => {
                    setFocus('layout');
                }}>
                    <Icon as={FiGitMerge} w={6} h={6} />
                </Button>
                <Button bg="none" color="white" _hover={{ bg: 'secondary.400' }} onClick={signOut} data-cy="signout">
                    <Icon as={FiLogOut} w={6} h={6} />
                </Button>
                <OrganizationMenu users={users.allUsers} organizations={organizations.allOrganizationUsers} {...{ isOpen, onOpen, onClose, btnRef }} />
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
            <Image gridColumn="logo" width={12} src="/images/align-white-icon.svg" alt="smooms.io" />
            <Button
                onClick={() => signIn(1)}
                data-cy="signin"
                bg="none"
                color="white"
                _hover={{ bg: 'secondary.400' }}
            >
                <Icon as={FiLogIn} w={6} h={6} />
            </Button>
        </VStack>)
    }
}
