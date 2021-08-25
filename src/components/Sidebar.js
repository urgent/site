import React, { useCallback, useState } from 'react'
import Category, { AddCategory } from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useStore from "../utils/store";
import update from 'immutability-helper';

const categoriesFragment = graphql`
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
`;

const messageFragment = graphql`
          fragment SidebarFragment_messages on Query {
            allMessages {
              __id
              @connection(key: "pagesFragment_allMessages")
              edges {
                node {
                  rowId
                  content
                  organizationId
                  messageTagsByMessageId {
                    __id
                    edges {
                      node {
                        __id
                        tagId
                        messageId
                        tagByTagId {
                          __id
                          rowId
                          name
                          categoryByCategoryId {
                            color
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
`;

export default function Sidebar({ query }) {
  const data = useFragment(categoriesFragment, query);
  const messages = useFragment(messageFragment, query);
  const organization = useStore((state) => state.organization);
  // need connections to update
  const connections = useCallback(() => {
    return messages?.allMessages.edges?.map(edge => {
      return edge.node.messageTagsByMessageId.__id;
    })
  }, [messages]);
  const [categories, setCategories] = useState(data.allCategories?.edges);

  const moveCategory = useCallback((dragIndex, hoverIndex) => {
    const dragCategory = categories[dragIndex];
    setCategories(update(categories, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCategory],
      ],
    }));
  }, [categories]);

  return (
    <Box
      gridColumn="sidebar"
      overflowY={["visible", "visible", "visible", "visible", "scroll"]}
      overflowX={["visible", "visible", "visible", "visible", "hidden"]}
      position={["static", "static", "static", "static", "fixed"]}
      width={["inherit", "inherit", "inherit", "inherit", "20%"]}
      left={["auto", "auto", "auto", "auto", "5rem"]}
      height={["initial", "initial", "initial", "initial", "100vh"]}
    >
      {categories.filter((edge) => edge.node.organizationId === organization).map((edge, index) => <Category
        key={index}
        category={edge.node}
        // so sidebar component can update messages
        messageConnections={connections()}
        sidebarConnection={categories.allCategories?.__id}
        moveCategory={moveCategory}
        index={index}
      />)}
      <AddCategory connectionId={categories.allCategories?.__id} />
    </Box>
  )
}