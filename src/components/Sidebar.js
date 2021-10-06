import React, { useMemo, useCallback } from 'react';
import Category, { AddCategory } from '../components/Category';
import Tag from "../components/Tag"
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, WrapItem, Button, Flex, Spacer, Image } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useStore from '../utils/store';
import useMutation from './useMutation';

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
}`;

const SortCategoryMutation = graphql`
  mutation SidebarSortMutation($input:SortCategoryInput!) {
    sortCategory(input: $input) {
      query {
        allCategories {
          __id
          edges {
          node {
            tagsByCategoryId {
              __id
              edges {
                node {
                  name
                  rowId
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
    }
  }
}
`

export function drag(data) {

  return (dragIndex, hoverIndex) => {

    const removed = [
      ...data.slice(0, dragIndex),
      ...data.slice(dragIndex + 1)
    ];


    const newHoverIndex = removed.indexOf(data[hoverIndex]);
    if (dragIndex > hoverIndex) {
      const first = removed.slice(0, newHoverIndex)
      const entry = data[dragIndex]
      const end = removed.slice(newHoverIndex)
      return [...first, entry, ...end]
    } else {
      const first = removed.slice(0, newHoverIndex + 1)
      const entry = data[dragIndex]
      const end = removed.slice(newHoverIndex + 1)
      return [...first, entry, ...end]
    }
  }
}


export default function Sidebar({ query }) {
  const messages = useFragment(messageFragment, query);
  const categoriesUnsorted = useFragment(categoriesFragment, query);
  const [isSortCategoryPending, sortCategory] = useMutation(SortCategoryMutation);
  // need connections to update
  const connections = useMemo(() => {
    return messages?.allMessages?.edges?.map(edge => {
      return edge.node.messageTagsByMessageId.__id;
    })
  }, [messages]);
  const organization = useStore((state) => state.organization);

  const categories = useMemo(() => ({
    allCategories: {
      edges: categoriesUnsorted.allCategories.edges.map(edge => {
        return {
          node: {
            sort: edge.node.configCategoriesByCategoryId?.edges[0]?.node.sort,
            ...edge.node
          }
        }
      }).sort((a, b) => {
        if (a.node.sort < b.node.sort) {
          return -1;
        } else {
          return 1;
        }
      })
    }
  }), [categoriesUnsorted]);

  const sortData = useMemo(() => {

    return {
      rowIds: categories.allCategories.edges.map(edge => edge.node.rowId),
      sort: categories.allCategories.edges.map((edge, index) => {
        if (edge.node.sort > 0) {
          return edge.node.sort;
        } else {
          return index + 1;
        }
      })
    }
  }, [categories])

  const moveCategory = useCallback((dragged, hovered) => {
    const sorted = drag(sortData.sort)(dragged, hovered)
    sortCategory({
      variables: {
        input: {
          categoryIds: sortData.rowIds,
          sort: sorted
        }
      }
    })
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
      {categories?.allCategories?.edges?.filter((edge) => edge.node.organizationId === organization).map((edge, index) => <Category
        key={index}
        category={edge.node}
        // so sidebar component can update messages, like with a delete or edit
        messageConnections={connections}
        sidebarConnection={categoriesUnsorted?.allCategories?.__id}
        moveCategory={moveCategory}
        index={index}
      />)}
      <AddCategory connectionId={categoriesUnsorted?.allCategories?.__id} />
    </Box>
  )
}

export function Collapsable({ query, onClick }) {
  const categoriesUnsorted = useFragment(categoriesFragment, query);
  const organization = useStore((state) => state.organization);


  const categories = useMemo(() => ({
    allCategories: {
      edges: categoriesUnsorted.allCategories.edges.map(edge => {
        return {
          node: {
            sort: edge.node.configCategoriesByCategoryId?.edges[0]?.node.sort,
            ...edge.node
          }
        }
      }).sort((a, b) => {
        if (a.node.sort < b.node.sort) {
          return -1;
        } else {
          return 1;
        }
      })
    }
  }), [categoriesUnsorted]);

  const sortData = useMemo(() => {

    return {
      rowIds: categories.allCategories.edges.map(edge => edge.node.rowId),
      sort: categories.allCategories.edges.map((edge, index) => {
        if (edge.node.sort > 0) {
          return edge.node.sort;
        } else {
          return index + 1;
        }
      })
    }
  }, [categories])

  const moveCategory = useCallback((dragged, hovered) => {
    const sorted = drag(sortData.sort)(dragged, hovered)
    sortCategory({
      variables: {
        input: {
          categoryIds: sortData.rowIds,
          sort: sorted
        }
      }
    })
  }, [categories]);

  return (
    <Box gridTemplateRows={`[menu] auto [button] 5rem`}>
      <Accordion gridRow="menu" minHeight="90vh">
        {categories?.allCategories?.edges?.filter((edge) => edge.node.organizationId === organization).map((edge, index) => <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {edge.node.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {edge.node?.tagsByCategoryId?.edges.map((edge, index) => {
              return (
                <WrapItem key={index}>
                  <Tag
                    rowId={edge.node.rowId}
                    color={edge.node?.color}
                    tagConnection={edge.node?.tagsByCategoryId?.__id}
                    tagName={edge.node.name}
                  />
                </WrapItem>
              )
            })}
          </AccordionPanel>
        </AccordionItem>)}
      </Accordion>
      <Flex>
        <Box p="4">
          <Image src="/images/logo.png" h={8} />
        </Box>
        <Spacer />
        <Box p="4">
          <Button gridRow="button" display="block" mx="auto" bg={'primary.400'} color="white" onClick={onClick}>Show Results</Button>
        </Box>
      </Flex>
    </Box>
  );
}