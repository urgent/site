import { HStack, IconButton } from "@chakra-ui/react"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

export default function Toolbar({ editClick, deleteClick, children }) {
    return (
        <HStack spacing={1}>
            <IconButton data-cy="edit" onClick={editClick} size={"sm"} aria-label="Edit" icon={<HiOutlinePencil />}></IconButton>
            {children}
            <IconButton data-cy="trash" onClick={deleteClick} size={"sm"} aria-label="Trash" icon={<HiOutlineTrash />}></IconButton>

        </HStack>
    )
}