import React, { useState } from "react";
import { Category, AddCategory } from "./Category";
import { useSidebar } from "./useSidebar";
import { Accordion, VStack, Box, Grid } from "@chakra-ui/react";
import { graphql, useFragment } from "react-relay";
import { SketchPicker } from "react-color";

const categoriesFragment = graphql`
  fragment SidebarFragment_categories on Query
  @argumentDefinitions(organization: { type: "Int" }, tag: { type: "[Int]" }) {
    sidebarCategories(organizationId: $organization) {
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

export function Sidebar({
  query,
  tags,
  path,
  onClick,
  edit,
  organization,
}: {
  query: any;
  path: string;
  tags?: number[];
  onClick?: any;
  edit?: boolean;
  organization?: number;
}) {
  const categories = useFragment(categoriesFragment, query);
  const messages = useFragment(messageFragment, query);
  const [sidebarCollection, moveCategory, messageTagConnections] = useSidebar({
    categories: categories.sidebarCategories,
    messages,
  });

  // need collection index, to open dropdown
  const active_categories = Array.from(
    new Set(
      categories?.sidebar?.edges.map(
        (edge) => edge.node.categoryByCategoryId.rowId
      )
    )
  );
  const active_index = sidebarCollection?.categories?.reduce(
    (previousValue, currentValue, index) => {
      if (active_categories.includes(currentValue.node.rowId)) {
        previousValue = [...previousValue, index];
      }
      return previousValue;
    },
    []
  );

  return (
    <Grid gridTemplateRows={"[categories] auto [edit] 300px"} minHeight="85vh">
      <Accordion
        allowMultiple={true}
        defaultIndex={[0, ...Array(sidebarCollection.categories.length).keys()]}
        gridArea="categories"
      >
        {sidebarCollection.categories?.map((edge: any, index: number) => {
          return (
            <Category
              index={index}
              key={edge.node.rowId}
              category={edge.node}
              {...{ tags, moveCategory, path, onClick }}
              connections={[categories.sidebarCategories.__id]}
              edit={edit}
            />
          );
        })}
      </Accordion>
      {edit && (
        <EditSidebar
          connections={[categories.sidebarCategories.__id]}
          {...{ organization }}
          title="Persona"
        />
      )}
    </Grid>
  );
}

export function EditSidebar({ title, connections, organization }) {
  const [color, setColor] = useState({ hex: "#000000" });

  return (
    <Box gridArea="edit">
      <h2>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
      </h2>

      <SketchPicker color={color} onChange={setColor} />
      <Box mt={4}>
        <AddCategory {...{ connections, organization }} color={color.hex} />
      </Box>
    </Box>
  );
}
