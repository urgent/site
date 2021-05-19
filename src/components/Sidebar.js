import { Box } from "@chakra-ui/react"

export default function Sidebar() {
    return (
        <Box
            gridColumn="sidebar"
            gridRow="body"
        >
            <Box>Category 1</Box>
            <Box>Category 2</Box>
            <Box>Category 3</Box>
        </Box>
    )
}