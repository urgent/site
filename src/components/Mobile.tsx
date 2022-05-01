import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import Tiles from "./Tiles";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Image,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiGitMerge, FiLogIn, FiLogOut, FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Mobile({ query, tags }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <>
        {tags.length === 0 && (
          <>
            <Box gridTemplateRows={`[menu] auto [button] 5rem`}>
              <Box gridRow="menu">
                <Sidebar path="" {...{ query, tags }} />
              </Box>
              <Flex>
                <Box p="4">
                  <Image src="/images/align3_webclip.png" h={8} />
                </Box>
                <Spacer />
              </Flex>
            </Box>
          </>
        )}
        {tags.length !== 0 && (
          <>
            <Flex>
              <Box p="4">
                <Button
                  gridRow="button"
                  display="block"
                  mx="auto"
                  bg={"primary.400"}
                  color="white"
                  onClick={() => router.push(`/`, "/", { shallow: true })}
                  position="fixed"
                  opacity="0.7"
                >
                  &#x25C0;
                </Button>
              </Box>
              <Spacer />
              <Box p="4">
                <Image src="/images/align_blue.png" h={8} />
              </Box>
            </Flex>
            <Tiles {...{ query, tags }} />
          </>
        )}
      </>
    );
  } else {
    return (
      <VStack spacing={2} as="nav" gridColumn={"nav"}>
        <Image
          mt={4}
          gridColumn="logo"
          width={12}
          src="/images/align_blue.png"
          alt="smooms.io"
        />
        <Button
          onClick={() => signIn()}
          data-cy="signin"
          bg="none"
          color="secondary.400"
        >
          <Icon as={FiLogIn} w={6} h={6} mt={24} boxSize={"3rem"} />
        </Button>
      </VStack>
    );
  }
}
