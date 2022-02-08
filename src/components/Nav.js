import React, { useState } from 'react'
import { VStack, Box, Image, Icon, Button, Select, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import { Grid, GridItem, Heading, Divider, Flex, Spacer } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay/hooks';
import useMutation from './useMutation'
import { HiOutlineCreditCard, HiOutlineChip, HiOutlineUserGroup, HiOutlineUserRemove, HiChartBar, HiOutlineUserAdd } from 'react-icons/hi';
import { FiGitMerge, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'
import useStore from "../utils/store";
import { useRouter } from "next/router";
import { decode } from "../utils/route";

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

const InsertInviteMutation = graphql`
  mutation NavInsertInviteMutation($input:CreateInviteInput!, $connections: [ID!]!) {
    createInvite(input: $input) {
        invite @appendNode(connections: $connections, edgeTypeName: "InvitesEdge") {
            organizationId
            email
        }
      }
    }
`;

const DeleteOrganizationUserMutation = graphql`
  mutation NavDeleteOrganizationUserMutation($input:DeleteOrganizationUserInput!, $connections: [ID!]!) {
    deleteOrganizationUser(input: $input) {
        organizationUser {
            id @deleteEdge(connections: $connections)
            organizationByOrganizationId {
                rowId
                slug
                userByUserId {
                    email
                }
            }
        }
    }
  }
`;

const DeleteInviteMutation = graphql`
  mutation NavDeleteInviteMutation($input:DeleteInviteInput!, $connections: [ID!]!) {
    deleteInvite(input: $input) {
        invite {
            id @deleteEdge(connections: $connections)
            organizationId
            email
        }
    }
  }
`;

const organizationUsersFragment = graphql`
  fragment NavFragment_organizationUsers on Query 
  @argumentDefinitions(organization: {type: "Int"}) {
    allOrganizationUsers(condition: {organizationId: $organization}) {
      __id
      edges {
        node {
          userId
          organizationId
          userByUserId {
            email
          }
          organizationByOrganizationId {
            rowId
            slug
            userByUserId {
                email
            }
          }
        }
      }
    }
  }
`;

const organizationFragment = graphql`
    fragment NavFragment_organization on Query {
        allOrganizations {
            edges {
                node {
                    rowId
                    slug
                }
            }
        }
    }
`

const inviteFragment = graphql`
  fragment NavFragment_invite on Query 
  @argumentDefinitions(organization: {type: "Int"}) {
    allInvites(condition: {organizationId: $organization}) {
      __id
      edges {
        node {
            id
            organizationId
            email
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

function sendEmail(email, slug) {
    return fetch('/api/invite', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: `email=${email}&slug=${slug}` // body data type must match "Content-Type" header
    });
}


function OrganizationMenu({ isOpen, onClose, btnRef, query }) {
    const [addEmail, setAddEmail] = useState('');
    const [isConfigPending, insertConfig] = useMutation(InsertConfigMutation);
    const [isInvitePending, insertInvite] = useMutation(InsertInviteMutation)
    const [isDeleteOrgUserPending, deleteOrgUser] = useMutation(DeleteOrganizationUserMutation)
    const [isDeleteInvitePending, deleteInvite] = useMutation(DeleteInviteMutation)
    const { allOrganizationUsers } = useFragment(organizationUsersFragment, query);
    const defaultOrganization = allOrganizationUsers?.edges[0].node.organizationByOrganizationId;
    const defaultUser = allOrganizationUsers?.edges[0].node.userByUserId;
    const { allOrganizations } = useFragment(organizationFragment, query);
    const { allInvites } = useFragment(inviteFragment, query);
    const router = useRouter();
    const { organization, tag } = router.query;
    const tags = decode(tag).map((tag) => parseInt(tag));


    function onAddUser() {
        // slug not used in insert invite
        sendEmail(addEmail, defaultOrganization.slug);
        // run relay mutation
        insertInvite({
            variables: {
                input: {
                    organizationId: organization,
                    email: addEmail,
                },
                connections: [allInvites.__id]
            },
            updater: store => { },
        })
    }

    function onRemoveUser(userId) {
        deleteOrgUser({
            variables: {
                input: {
                    organizationId: organization,
                    userId,
                },
                connections: [allOrganizationUsers.__id]
            }
        })
    }

    function onRemoveInvite(email) {
        deleteInvite({
            variables: {
                input: {
                    organizationId: organization,
                    email,
                },
                connections: [allInvites.__id]
            }
        })
    }

    return <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
    >
        <DrawerOverlay />
        <DrawerContent sx={{ left: "3.5rem", paddingRight: "3.5rem" }}>
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
                            window.location(`/${e.target.value}`);
                        }}
                        width='200px'
                        bg='black'
                        color="white"
                        borderRadius="20"
                        value={organization}
                    >
                        {allOrganizations?.edges?.map((edge) => {
                            const { rowId, slug } = edge.node;
                            return <option key={rowId} value={rowId} defaultValue={organization} style={{ backgroundColor: "black" }}>{slug}</option>
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
                    <Box>{defaultUser?.email}</Box>
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
                    {allInvites?.edges?.filter((edge) => {
                        const { email } = edge.node;
                        // do not show user's own invite, and show only focused organization
                        return (email !== defaultUser?.email)
                    }).map((edge) => {
                        const { email } = edge.node;
                        return (
                            <span key={email}>
                                <Box>{email}</Box>
                                <Button size="sm" onClick={() => onRemoveInvite(email)} style={gridButtonStyle}>Remove</Button>
                                <Button size="sm" onClick={() => sendEmail(email)} style={gridButtonStyle}>Resend Invite</Button>
                            </span>
                        )
                    })}
                    {allOrganizationUsers?.edges?.filter((edge) => {
                        // do not show user's own organization entry
                        return (edge.node.userByUserId.email !== defaultUser?.email)
                    }).map((edge) => {
                        const { userByUserId, organizationByOrganizationId, userId } = edge.node;
                        const { slug } = organizationByOrganizationId;
                        const { email } = userByUserId;
                        return (
                            <span key={slug}>
                                <Box>{email}</Box>
                                <Button size="sm" onClick={() => onRemoveUser(userId)} style={gridButtonStyle}>Remove</Button>
                                <Button size="sm" onClick={() => sendEmail(email)} style={gridButtonStyle}>Reset Password</Button>
                            </span>
                        )
                    })}
                    <Input type="email" placeholder="Email" style={gridInputStyle} onChange={(e) => setAddEmail(e.target.value)} />
                    <Button size="sm" style={gridButtonStyle} onClick={onAddUser}>Add</Button>
                </Grid>
            </DrawerBody>

            <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer >
}

export default function Nav({ query }) {
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
                <Image gridColumn="logo" mt={2} width={8} src="/images/align_white.png" alt="smooms.io" />
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
                <OrganizationMenu {...{ isOpen, onOpen, onClose, btnRef, query }} />
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
            <Image gridColumn="logo" mt={2} width={8} src="/images/align_white.png" alt="smooms.io" />
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
