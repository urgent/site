import { signIn, signOut, useSession } from 'next-auth/client'
import { Button, Icon, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';


export default function SignIn() {
    const [session] = useSession()
    if (session) {
        return <>
            Signed in as {session.user.name} <br />
            <button onClick={signOut}>Sign out</button>
        </>
    }
    else {
        return <Button onClick={() => signIn(1)} variant="solid" size="md" backgroundColor="primary.500" _hover={{ background: "hover.500" }}>
            <Icon as={FaGithub} color="text.50" /><Text mx={2} color="text.50">Sign in with Github</Text>
        </Button>
    }

}