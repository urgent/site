import Category, { AddCategory } from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';

function display(visible, connectionId) {
  if (visible) {
    return <AddCategory connectionId={connectionId} />;
  }
}

export default function Sidebar({ edit, categories, messages, tagFilter, tagClick }) {
  const data = useFragment(
    graphql`
            fragment SidebarFragment_categories on Query {
                allCategories {
                    __id
                    @connection(key: "SidebarFragment_allCategories")
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
      {data.allCategories?.edges.map((edge, index) => <Category key={index} edit={edit} category={edge.node} messages={messages} tagFilter={tagFilter} tagClick={tagClick} />)}
      {display(edit, data.allCategories?.__id)}
    </Box>
  )
}