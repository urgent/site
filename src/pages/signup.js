import { Form, Field } from 'react-final-form'
import { Box, Grid, GridItem, Image, Heading, Button, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

async function onSubmit(values) {
    const response = await fetch('/api/register', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(values) // body data type must match "Content-Type" header
    });
    const { url } = await response.json();
    window.location = url;
}

function validate() {
    return true;
}

export default function Signup() {
    return <Grid
        templateColumns="[left] 1fr [middle] 5fr [right] 1fr"
        templateRows="[nav] 50px [body] 1fr"
    >
        <GridItem
            gridColumn="1 / -1"
            gridRow="nav"
            bg={"primary.400"}
        >
            <Image src="/images/align-white-icon.svg" ml={4} height={12} />

        </GridItem>
        <GridItem
            gridColumn="middle"
            gridRow="body"
        >
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <Box mt={8}>
                        <form onSubmit={handleSubmit}>
                            <Heading mb={4}>Register for Align</Heading>
                            <FormLabel mt={4} mb={0} color={"gray.500"}>Admin Email</FormLabel>
                            <Field name="email" component="input" type="email" placeholder="elon@openai.com" style={{ width: "32rem", height: "3rem", background: "#EDF2F7", marginBottom: "4px", padding: "12px", borderRadius: "4px" }} />
                            <FormLabel mt={4} mb={0} color={"gray.500"}>Company Name</FormLabel>
                            <Field name="company" component="input" placeholder="Open AI" style={{ width: "32rem", height: "3rem", background: "#EDF2F7", marginBottom: "4px", padding: "12px", borderRadius: "4px" }} />
                            <FormLabel mt={4} mb={0} color={"gray.500"}>Industry</FormLabel>
                            <Field name="industry" component="select" defaultValue="Artificial Intelligence" style={{ width: "32rem", height: "3rem", background: "#EDF2F7", marginBottom: "4px", padding: "12px", borderRadius: "4px" }} >
                                <option>Artificial Intelligence</option>
                                <option>Software</option>
                            </Field>
                            <FormLabel mt={4} mb={0} color={"gray.500"}>Sales Org Headcount (# Align Seats)</FormLabel>
                            <Field name="seats" component="input" type="number" placeholder="123" style={{ width: "32rem", height: "3rem", background: "#EDF2F7", marginBottom: "4px", padding: "12px", borderRadius: "4px" }} />
                            <Box mt={4} mb={0} >
                                <Button _hover={{ bg: "primary.500" }} bg={"secondary.500"} color="white" py={8} px={16} borderRadius={28} fontSize={20} fontWeight="bold" textTransform={"uppercase"} type="submit">Register</Button>
                            </Box>
                        </form>
                    </Box>
                )}
            />
        </GridItem>
    </Grid>
}