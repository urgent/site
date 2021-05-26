import Message from "../components/Messsage"
import { Grid } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import { Editor } from './Editor';

export function format(nodes) {
  return {
    "message_connection": {
      "edges": nodes
    }
  }
}

export function filter(messages, tagFilter) {
  if (tagFilter.length === 0) {
    // no tag filter, display all
    return messages
  } else {
    const nodes = messages.message_connection.edges.filter((edge) => {
      if (!Array.isArray(edge.node.message_tags)) {
        // no tags, can't match tagFilter
        return false;
      }
      else if (edge.node.message_tags === []) {
        // empty tags, can't match tagFilter
        return false;
      }
      else {
        // is one tag in filter?
        const tags = edge.node.message_tags.map(relation => relation.tag.name)
        return tagFilter.every((tag) => {
          const comparison = tags.includes(tag)
          return comparison
        })
      }
    })
    return format(nodes)
  }
}

export default function Tiles({ edit, messages, tagFilter }) {

  const data = useFragment(
    graphql`
          fragment TilesFragment_messages on query_root {
            message_connection {
              edges {
                node {
                  content
                  message_tags {
                    tag {
                      name
                      category {
                        name
                        color
                      }
                    }
                  }
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
      {filter(data, tagFilter).message_connection.edges.map((edge, index) => <Message key={index} edit={edit} tags={edge.node.message_tags}>{edge.node.content}</Message>)}
      <Message gridColumn="span 2" gridRow="span 2">
        <Editor />
      </Message>
    </Grid>)
}