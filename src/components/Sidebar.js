import Category from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';

export default function Sidebar({ edit, categories, tagClick }) {
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