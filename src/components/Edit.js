import { Button } from "@chakra-ui/react"

export default function Edit({ click, children }) {
    return <Button data-cy="edit_mode" onClick={click}>{children}</Button>
}