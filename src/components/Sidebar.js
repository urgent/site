import React, { useMemo } from 'react';
import Category, { AddCategory } from '../components/Category';
import { Box } from '@chakra-ui/react';
import { graphql, useFragment } from 'react-relay';
import useStore from '../utils/store';

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
              organizationId,
              configCategoriesByCategoryId{
                edges{
                  node{
                    sort
                  }
                }
              }
            }
        }
    }
}
`;

export default function Sidebar({ query }) {
  const messages = useFragment(messageFragment, query);
  const categories = useFragment(categoriesFragment, query);
  // need connections to update
  const connections = useMemo(() => {
    return messages?.allMessages?.edges?.map(edge => {
      return edge.node.messageTagsByMessageId.__id;
    })
  }, [messages]);
  const organization = useStore((state) => state.organization);

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
      {categories?.allCategories?.edges?.filter((edge) => edge.node.organizationId === organization).map((edge, index) => <Category
        key={index}
        category={edge.node}
        // so sidebar component can update messages, like with a delete or edit
        messageConnections={connections}
        sidebarConnection={categories?.allCategories?.__id}
        moveCategory={() => { }}
        index={index}
      />)}
      <AddCategory connectionId={categories?.allCategories?.__id} />
    </Box>
  )
}