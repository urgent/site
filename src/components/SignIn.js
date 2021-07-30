import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@chakra-ui/react'


export default function SignIn({ children }) {
    const [session] = useSession()
    if (session) {
        return <>
            Signed in as {session.user.name} <br />
            <button onClick={signOut} data-cy="signout">Sign out</button>
        </>
    }
    else {
        return (
            <Button
                onClick={() => signIn(1)}
                variant="solid"
                size="md"
                bg="white"
                _hover={{ background: "muted.100" }}
                data-cy="signin"
            >
                {children}
            </Button>
        )
    }

}