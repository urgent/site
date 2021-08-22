import React, { useCallback } from 'react'
import Category, { AddCategory } from "../components/Category"
import { Box } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useStore from "../utils/store";

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
  const categories = useFragment(categoriesFragment, query);
  const messages = useFragment(messageFragment, query);
  const organization = useStore((state) => state.organization);
  // need connections to update
  const connections = useCallback(() => {
    return messages?.allMessages.edges?.map(edge => {
      return edge.node.messageTagsByMessageId.__id;
    })
  }, [messages]);

  console.log(categories)

  return (
    <Box
      gridColumn="sidebar"
    >
      {categories.allCategories?.edges.filter(edge => edge.node.organizationId === organization).map((edge, index) => <Category
        key={index}
        category={edge.node}
        // so sidebar component can update messages
        messageConnections={connections()}
        sidebarConnection={categories.allCategories?.__id}
      />)}
      <AddCategory connectionId={categories.allCategories?.__id} />
    </Box>
  )
}