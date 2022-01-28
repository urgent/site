import React from 'react'
import { CollapsableItem, AddCategory } from './Category'
import { useSidebar } from './useSidebar'
import { Accordion } from "@chakra-ui/react"
import useStore from '../utils/store'


export function Collapsable({ query }) {
  const organization = useStore((state) => state.organization);
  const [data, moveCategory, messageTagConnections] = useSidebar({ query });
  return (
    <>
      <Accordion minHeight="85vh" allowMultiple={true} >
        {data.categories?.map((edge, index) => {
          return <CollapsableItem key={edge.node.rowId} category={edge.node} moveCategory={moveCategory} messageTagConnections={messageTagConnections} sidebarConnection={data.categories.__id} />
        }
        )}
      </Accordion>
      <AddCategory connectionId={data.categories?.__id} />
    </>
  );
}