import React from 'react'
import { CollapsableItem, AddCategory } from './Category'
import { useSidebar } from './useSidebar'
import { Accordion } from "@chakra-ui/react"
import useStore from '../utils/store'


export function Collapsable({ query }) {
  const organization = useStore((state) => state.organization);
  const [categories, moveCategory, messageTagConnections] = useSidebar({ query });

  return (
    <>
      <Accordion minHeight="90vh" allowMultiple={true} >
        {categories?.allCategories?.edges?.filter((edge) => edge.node.organizationId === organization).map((edge, index) => {
          return <CollapsableItem key={edge.node.rowId} category={edge.node} moveCategory={moveCategory} messageTagConnections={messageTagConnections} sidebarConnection={categories.allCategories.__id} />
        }
        )}
      </Accordion>
      <AddCategory connectionId={categories?.allCategories?.__id} />
    </>
  );
}