import React from 'react'
import { Category, AddCategory } from './Category'
import { useSidebar } from './useSidebar'
import { Accordion } from "@chakra-ui/react"

const categoriesFragment = graphql`
fragment useSidebarFragment_categories on CategoriesConnection {
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
}`;

export function Sidebar({ query }) {
  const categories = useFragment(categoriesFragment, query.allCategories);
  const [data, moveCategory, messageTagConnections] = useSidebar({ query });
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