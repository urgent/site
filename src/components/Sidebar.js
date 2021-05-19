import Category from "../components/Category"
import { Box } from "@chakra-ui/react"

export default function Sidebar() {
    const data = ["Category 1", "Category 2", "Category 3"]
    return (
        <Box
            gridColumn="sidebar"
            gridRow="body"
        >
            {data.map((node, index) => <Category key={index}>{node}</Category>)}
        </Box>
    )
}