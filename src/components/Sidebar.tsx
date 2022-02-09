import React from "react";
import { Category, AddCategory } from "./Category";
import { useSidebar } from "./useSidebar";
import { Accordion } from "@chakra-ui/react";
import { graphql, useFragment } from "react-relay";

const categoriesFragment = graphql`
  fragment SidebarFragment_categories on Query
  @argumentDefinitions(organization: { type: "Int" }, tag: { type: "[Int]" }) {
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
    sidebar(tagId: $tag) {
      edges {
        node {
          categoryByCategoryId {
            rowId
          }
        }
      }
    }
  }
`;

// need connectionId. Need field to query
const messageFragment = graphql`
  fragment SidebarFragment_messages on Query
  @argumentDefinitions(organization: { type: "Int" }, tag: { type: "[Int]" }) {
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
  const [sidebarCollection, moveCategory, messageTagConnections] = useSidebar({
    categories: categories.allCategories,
    messages,
  });

  // need collection index, to open dropdown
  const active_categories = Array.from(
    new Set(
      categories?.sidebar.edges.map(
        (edge) => edge.node.categoryByCategoryId.rowId
      )
    )
  );
  const active_index = sidebarCollection.categories.reduce(
    (previousValue, currentValue, index) => {
      if (active_categories.includes(currentValue.node.rowId)) {
        previousValue = [...previousValue, index];
      }
      return previousValue;
    },
    []
  );

  return (
    <>
      <Accordion
        minHeight="85vh"
        allowMultiple={true}
        defaultIndex={active_index}
      >
        {sidebarCollection.categories?.map((edge, index) => {
          return (
            <Category
              index={index}
              key={edge.node.rowId}
              category={edge.node}
              moveCategory={moveCategory}
            />
          );
        })}
      </Accordion>
      <AddCategory connectionId={sidebarCollection.categories?.__id} />
    </>
  );
}
