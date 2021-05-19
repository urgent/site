import { Grid, Box } from "@chakra-ui/react"

export default function Tiles() {
    return (
        <Grid
            gridTemplateColumns={[
                "repeat(auto-fit, minmax(100px, 1fr))",
                "repeat(auto-fit, minmax(100px, 1fr))",
                "repeat(auto-fit, minmax(200px, 1fr))",
                "repeat(auto-fit, minmax(200px, 1fr))",
                "repeat(auto-fit, minmax(200px, 1fr))"]}
            gridGap="5px"
            gridAutoRows={["100px", "150px", "200px", "200px", "200px"]}
            gridAutoFlow="dense"
        >
            <Box bg="red"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red" gridColumn="span 2"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red" gridColumn="span 2"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red"></Box>
            <Box bg="blue" gridRow="span 2"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red" gridColumn="span 2" gridRow="span 2"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
            <Box bg="red"></Box>
            <Box bg="blue"></Box>
            <Box border="1px solid black"></Box>
        </Grid>)
}