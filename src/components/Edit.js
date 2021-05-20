import { Button } from "@chakra-ui/react"

export default function Edit({ click, children }) {
    return <Button onClick={click}>{children}</Button>
}