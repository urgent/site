import React, { useState } from 'react'
import { VStack, Box, Image, Icon, Button, Select, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import { graphql, useFragment } from 'react-relay/hooks';
import useMutation from './useMutation'
import { HiOutlineCreditCard, HiOutlineChip, HiOutlineUserGroup, HiOutlineUserRemove, HiChartBar, HiOutlineUserAdd } from 'react-icons/hi';
import { FiLayers, FiLayout, FiGitMerge, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'
import useStore from "../utils/store";

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

function OrganizationMenu({ isOpen, onClose, organizations, btnRef }) {
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
                    focusOrganization(parseInt(e.target.value));
                }}>
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

export default function Nav({ query }) {
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
        colors.edit = '#FABC37';
    }
    colors[focus] = '#FABC37'

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
                <Button bg={colors.edit} color="white" _hover={{ bg: "#FABC37" }} data-cy="edit_mode" onClick={(e) => {
                    setFocus();
                    toggleEdit();
                }}>
                    <Icon as={FiEdit} w={6} h={6} />
                </Button>
                <Button bg={colors.org} color="white" _hover={{ bg: "#FABC37" }} ref={btnRef} onClick={(e) => {
                    setFocus('org');
                    onOpen(e);
                }} >
                    <Icon as={HiOutlineUserGroup} w={6} h={6} />
                </Button>
                <Button bg={colors.chip} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('chip');
                }}>
                    <Icon as={HiOutlineChip} w={6} h={6} />
                </Button>
                <Button bg={colors.card} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('card');
                }}>
                    <Icon as={HiOutlineCreditCard} w={6} h={6} />
                </Button>
                <Button bg={colors.user} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('user');
                }}>
                    <Icon as={HiChartBar} w={6} h={6} />
                </Button>
                <Button bg={colors.layout} color="white" _hover={{ bg: "#FABC37" }} onClick={(e) => {
                    setFocus('layout');
                }}>
                    <Icon as={FiGitMerge} w={6} h={6} />
                </Button>
                <Button bg="none" color="white" _hover={{ bg: "#FABC37" }} onClick={signOut} data-cy="signout">
                    <Icon as={FiLogOut} w={6} h={6} />
                </Button>
                <OrganizationMenu organizations={organizations.allOrganizationUsers} {...{ isOpen, onOpen, onClose, btnRef }} />
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
