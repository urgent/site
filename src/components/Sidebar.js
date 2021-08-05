import Category, { AddCategory } from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';



export default function Sidebar({ edit, categories, messages, tagFilter, tagClick, focusedOrganization }) {
  const data = useFragment(
    graphql`
            fragment SidebarFragment_categories on Query {
                allCategories {
                    __id
                    edges {
                        node {
                          tagsByCategoryId {
                            __id
                            edges {
                              node {
                                rowId
                                name
                              }
                            }
                          }
                          rowId,
                          name,
                          color,
                          organizationId
                        }
                    }
                }
            }
            `, categories
  );

  return (
    <Box
      gridColumn="sidebar"
    >
      {data.allCategories?.edges.filter(edge => edge.node.organizationId === focusedOrganization).map((edge, index) => <Category key={index} edit={edit} category={edge.node} messages={messages} tagFilter={tagFilter} tagClick={tagClick} focusedOrganization={focusedOrganization} connectionId={edge.node.tagsByCategoryId.__id} />)}
      {edit && <AddCategory connectionId={data.allCategories?.__id} focusedOrganization={focusedOrganization} />}
    </Box>
  )
}