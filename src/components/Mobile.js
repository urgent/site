import React, { useState } from 'react'
import { Collapsable } from '../components/Sidebar';
import Tiles from '../components/Tiles';
import { Box, Button, Flex, Spacer, Image, VStack, Icon } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client'
import { FiGitMerge, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';

export default function Mobile({ query }) {
    const [nav, setNav] = useState(true);
    const [session] = useSession()
    if (session) {
        return <>
            {nav && <>
                <Box gridTemplateRows={`[menu] auto [button] 5rem`}>
                    <Box gridRow="menu"><Collapsable query={query} /></Box>
                    <Flex>
                        <Box p="4">
                            <Image src="/images/align_blue.png" h={8} />
                        </Box>
                        <Spacer />
                        <Box p="4">
                            <Button gridRow="button" display="block" mx="auto" bg={'primary.400'} color="white" onClick={() => setNav(false)}>Show Results</Button>
                        </Box>
                    </Flex>
                </Box>
            </>}
            {!nav && <>
                <Flex>
                    <Box p="4">
                        <Button gridRow="button" display="block" mx="auto" bg={'primary.400'} color="white" onClick={() => setNav(true)}>&#x25C0;</Button>
                    </Box>
                    <Spacer />
                    <Box p="4">
                        <Image src="/images/logo.png" h={8} />
                    </Box>
                </Flex>
                <Tiles query={query} />
            </>}
        </>
    } else {
        return (<VStack
            spacing={2}
            as="nav"
            gridColumn={"nav"}
        >
            <Image mt={4} gridColumn="logo" width={12} src="/images/align_blue.png" alt="smooms.io" />
            <Button
                onClick={() => signIn(1)}
                data-cy="signin"
                bg="none"
                color="secondary.400"
            >
                <Icon as={FiLogIn} w={6} h={6} mt={24} boxSize={"3rem"} />
            </Button>
        </VStack>)
    }
}