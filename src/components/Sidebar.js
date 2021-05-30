import Category from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';

export default function Sidebar({ edit, categories, tagFilter, tagClick }) {
  const data = useFragment(
    graphql`
            fragment SidebarFragment_categories on Query {
                allCategories {
                    edges {
                        node {
                          tagsByCategoryId {
                            edges {
                              node {
                                name
                              }
                            }
                          }
                          name,
                          color
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
      {data.allCategories.edges.map((edge, index) => <Category key={index} edit={edit} category={edge.node} tagFilter={tagFilter} tagClick={tagClick} />)}
    </Box>
  )
}