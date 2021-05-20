import { HStack, IconButton } from "@chakra-ui/react"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

export default function Toolbar() {
    return (
        <HStack spacing={1}>
            <IconButton size={"sm"} aria-label="Edit" icon={<HiOutlinePencil />}></IconButton>
            <IconButton size={"sm"} aria-label="Trash" icon={<HiOutlineTrash />}></IconButton>
        </HStack>
    )
}