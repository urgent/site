import { HStack, IconButton } from "@chakra-ui/react"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

export default function Toolbar({ editClick, deleteClick }) {
    return (
        <HStack spacing={1}>
            <IconButton onClick={editClick} size={"sm"} aria-label="Edit" icon={<HiOutlinePencil />}></IconButton>
            <IconButton onClick={deleteClick} size={"sm"} aria-label="Trash" icon={<HiOutlineTrash />}></IconButton>
        </HStack>
    )
}