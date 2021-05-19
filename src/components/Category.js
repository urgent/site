import { Box } from "@chakra-ui/react"

export default function Category({ index, children }) {
    return (
        <Box key={index}>
            {children}
        </Box>
    )
}