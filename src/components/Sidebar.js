import React from 'react'
import { Category, AddCategory } from './Category'
import { useSidebar } from './useSidebar'
import { Accordion } from "@chakra-ui/react"

const categoriesFragment = graphql`
fragment SidebarFragment_categories on Query
@argumentDefinitions(organization: {type: "Int"}) {
  allCategories(condition: { organizationId: $organization }) {
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
        rowId
        name
        color
        organizationId
        configCategoriesByCategoryId {
          edges {
            node {
              collapse
              sort
            }
          }
        }
      }
    }
  }
}`;

// need connectionId. Need field to query
const messageFragment = graphql`
fragment SidebarFragment_messages on Query 
@argumentDefinitions(organization: {type: "Int"}, tag:{type: "[Int]"}) {
    tile(organizationId: $organization, tagId: $tag) {
    edges {
      node {
        messageTagsByMessageId {
          __id
          edges {
            node {
              messageId
            }
          }
        }
      }
    }
  }
}
`;

export function Sidebar({ query }) {
  const categories = useFragment(categoriesFragment, query);
  const messages = useFragment(messageFragment, query);
  const [data, moveCategory, messageTagConnections] = useSidebar({ categories, messages });
  return (
    <>
      <Accordion minHeight="85vh" allowMultiple={true} >
        {categories?.map((edge, index) => {
          return <Category key={edge.node.rowId} category={edge.node} moveCategory={moveCategory} messageTagConnections={messageTagConnections} sidebarConnection={data.categories.__id} />
        }
        )}
      </Accordion>
      <AddCategory connectionId={data.categories?.__id} />
    </>
  );
}