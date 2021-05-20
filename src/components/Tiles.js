import Message from "../components/Messsage"
import { Grid } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';


export default function Tiles({ messages }) {

  const data = useFragment(
    graphql`
          fragment TilesFragment_messages on query_root {
            message_connection {
              edges {
                node {
                  content
                }
              }
            }
          }
        `, messages
  );

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
      {data.message_connection.edges.map((edge, index) => <Message key={index}>{edge.node.content}</Message>)}
    </Grid>)
}