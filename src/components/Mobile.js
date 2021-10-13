import React, { useState } from 'react'
import { Collapsable } from '../components/Sidebar';
import Tiles from '../components/Tiles';
import { Box, Button, Flex, Spacer, Image } from '@chakra-ui/react';

export default function Mobile({ query }) {
    const [nav, setNav] = useState(true);
    return <>
        {nav && <>
            <Box gridTemplateRows={`[menu] auto [button] 5rem`}>
                <Box gridRow="menu"><Collapsable query={query} /></Box>
                <Flex>
                    <Box p="4">
                        <Image src="/images/logo.png" h={8} />
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
}