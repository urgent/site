import { Button } from "@chakra-ui/react"

export default function Edit({ click, children }) {
    return <Button bg="white" color="primary.500" data-cy="edit_mode" onClick={click}>{children}</Button>
}