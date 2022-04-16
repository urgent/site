import React, { useState, useMemo } from "react";
import { Category, AddCategory } from "./Category";
import { useSidebar } from "./useSidebar";
import { Accordion, VStack, Box, Grid } from "@chakra-ui/react";
import { graphql, useFragment } from "react-relay";
import { SketchPicker } from "react-color";
import { useRouter } from "next/router";

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
                id
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
          rowId
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
  edit,
}: {
  query: any;
  path: string;
  tags?: number[];
  edit?: boolean;
}) {
  const { sidebarCategories } = useFragment(categoriesFragment, query);
  const messages = useFragment(messageFragment, query);
  const [sidebarCollection, moveCategory] = useSidebar({
    categories: sidebarCategories,
  });
  const { categories } = sidebarCollection as any;
  const router = useRouter();

  const messageTagConnections = useMemo(() => {
    return messages?.tile?.edges?.map(
      (edge) => edge.node.messageTagsByMessageId.__id
    );
  }, [messages]);

  return (
    <Grid gridTemplateRows={"[categories] auto [edit] 300px"} minHeight="85vh">
      <Accordion
        allowMultiple={true}
        defaultIndex={[0, ...Array(categories.length).keys()]}
        gridArea="categories"
      >
        {categories?.map((edge: any, index: number) => {
          return (
            <Category
              index={index}
              key={edge.node.rowId}
              category={edge.node}
              {...{ tags, moveCategory, path }}
              sidebarConnections={[sidebarCategories.__id]}
              messageConnections={messageTagConnections}
              edit={edit}
              organization={categories[0]?.node.organizationId}
            />
          );
        })}
      </Accordion>
      {edit && (
        <EditSidebar
          connections={[sidebarCategories.__id]}
          organization={categories[0]?.node.organizationId}
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

      <SketchPicker color={color} hange={setColor} />
      <Box mt={4}>
        <AddCategory {...{ connections, organization }} color={color.hex} />
      </Box>
    </Box>
  );
}
