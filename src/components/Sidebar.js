import React from 'react'
import { Category, AddCategory } from './Category'
import { useSidebar } from './useSidebar'
import { Accordion } from "@chakra-ui/react"


export function Sidebar({ query }) {
  const [data, moveCategory, messageTagConnections] = useSidebar({ query });
  return (
    <>
      <Accordion minHeight="85vh" allowMultiple={true} >
        {data.categories?.map((edge, index) => {
          return <Category key={edge.node.rowId} category={edge.node} moveCategory={moveCategory} messageTagConnections={messageTagConnections} sidebarConnection={data.categories.__id} />
        }
        )}
      </Accordion>
      <AddCategory connectionId={data.categories?.__id} />
    </>
  );
}