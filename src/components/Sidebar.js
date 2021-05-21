import Category from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';


/*

query MyQuery {
  message_connection {
    edges {
      node {
        message_message_tag {
          message_tag_tag {
            name
            category {
              name
            }
          }
        }
        content
      }
    }
  }
}


*/

export default function Sidebar({ edit, categories }) {
  const data = useFragment(
    graphql`
            fragment SidebarFragment_categories on query_root {
                category_connection {
                    edges {
                        node {
                            tags {
                                name
                            }
                            name
                        }
                    }
                }
            }
            `, categories
  );

  return (
    <Box
      gridColumn="sidebar"
      gridRow="body"
    >
      {data.category_connection.edges.map((edge, index) => <Category key={index} edit={edit} category={edge.node} />)}
    </Box>
  )
}