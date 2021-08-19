import { HStack, IconButton } from "@chakra-ui/react"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"
import useStore from "../utils/store";

export default function Toolbar({ editClick, deleteClick, editActive, children }) {
    const edit = useStore((state) => state.edit);

    return <>
        {edit && <HStack spacing={1}>
            <IconButton isActive={editActive} data-cy="edit" onClick={editClick} size={"sm"} aria-label="Edit" icon={<HiOutlinePencil />}></IconButton>
            {children}
            <IconButton data-cy="trash" onClick={deleteClick} size={"sm"} aria-label="Trash" icon={<HiOutlineTrash />}></IconButton>
        </HStack>}
    </>
}