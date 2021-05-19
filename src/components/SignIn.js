import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@chakra-ui/react'


export default function SignIn({ children }) {
    const [session] = useSession()
    if (session) {
        return <>
            Signed in as {session.user.name} <br />
            <button onClick={signOut}>Sign out</button>
        </>
    }
    else {
        return (
            <Button
                onClick={() => signIn(1)}
                variant="solid"
                size="sm"
                backgroundColor="primary.500"
                _hover={{ background: "hover.500" }}
            >
                {children}
            </Button>
        )
    }

}