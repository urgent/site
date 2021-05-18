import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button, Icon } from "@chakra-ui/react"
import { FaGithub } from 'react-icons/fa';

function CreateMessageWrapper() {
  const [session] = useSession()

  return (
    <>
      {!session && <>
        <Button onClick={signIn} variant="solid" size="md" backgroundColor="black">
          <Icon as={FaGithub} /> Sign in with Github
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