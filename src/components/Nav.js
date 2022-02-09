import React, { useState } from 'react'
import { VStack, Image, Icon, Button, useDisclosure } from '@chakra-ui/react'
import { HiOutlineCreditCard, HiOutlineChip, HiOutlineUserGroup, HiChartBar } from 'react-icons/hi';
import { FiGitMerge, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'
import useStore from "../utils/store";
import { useRouter } from "next/router";

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [session] = useSession()
    // used for nav button colors
    const [focus, setFocus] = useState();
    const edit = useStore((state) => state.edit);
    const toggleEdit = useStore((state) => state.toggleEdit);
    const router = useRouter();
    const { query, pathname } = router;
    const { organization } = query;
    const menu = pathname.split('/')[2];

    const colors = {
        edit: "none",
        admin: "none",
        card: "none",
        user: "none",
        bar: "none",
        chip: "none",
        layout: "none",
    };

    colors[menu] = 'secondary.400'

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
                <Button bg={colors.admin} color="white" _hover={{ bg: 'secondary.400' }} ref={btnRef} onClick={(e) => {
                    if (menu === 'admin') {
                        window.location.href = `/${organization}`;
                    } else {
                        window.location.href = `/${organization}/admin`
                    }
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
