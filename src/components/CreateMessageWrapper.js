import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button, Icon, Text } from "@chakra-ui/react"
import { FaGithub } from 'react-icons/fa';

function CreateMessageWrapper() {
  const [session] = useSession()

  return (
    <>
      {!session && <>
        <Button onClick={() => signIn(1)} variant="solid" size="md" backgroundColor="primary.500" _hover={{ background: "hover.500" }}>
          <Icon as={FaGithub} color="text.50" /><Text mx={2} color="text.50">Sign in with Github</Text>
        </Button>
      </>}
      {session && <>
        Signed in as {session.user.name} <br />
        <button onClick={signOut}>Sign out</button>
        <div>
          <h1>Create a new message</h1>
          <input
            name="body"
            placeholder="Message Body"
          />
          <button>Create Message</button>
        </div>
      </>}
    </>
  )
}

export default CreateMessageWrapper;