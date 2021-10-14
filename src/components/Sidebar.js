import React, { useMemo, useRef } from 'react';
import Category, { AddCategory } from '../components/Category';
import Tag from "../components/Tag"
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, WrapItem } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useStore from '../utils/store';
import useMutation from './useMutation';
import { ItemTypes } from '../lib/draggable'
import { useDrag, useDrop } from 'react-dnd'


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

  function moveCategory(dragged, hovered) {
    const sorted = drag(sortData.sort)(dragged, hovered)
    sortCategory({
      variables: {
        input: {
          categoryIds: sortData.rowIds,
          sort: sorted
        }
      }
    })
  }

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

export function Collapsable({ query }) {
  const categoriesUnsorted = useFragment(categoriesFragment, query);
  const organization = useStore((state) => state.organization);
  const [isSortCategoryPending, sortCategory] = useMutation(SortCategoryMutation);


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

  function moveCategory(dragged, hovered) {
    const sorted = drag(sortData.sort)(dragged, hovered)
    sortCategory({
      variables: {
        input: {
          categoryIds: sortData.rowIds,
          sort: sorted
        }
      }
    })
  }




  return (
    <Accordion minHeight="90vh" allowMultiple={true} >
      {categories?.allCategories?.edges?.filter((edge) => edge.node.organizationId === organization).map((edge, index) => {

        const ref = useRef(null);
        const [{ handlerId }, drop] = useDrop({
          accept: ItemTypes.CATEGORY,
          collect(monitor) {
            return {
              handlerId: monitor.getHandlerId(),
            };
          },
          hover(item, monitor) {
            if (!ref.current) {
              return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
              return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
              return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
              return;
            }
            // Time to actually perform the action
            moveCategory(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
          },
        });
        const [{ isDragging }, drag] = useDrag({
          type: ItemTypes.CATEGORY,
          item: () => {
            return { ...edge.node, index };
          },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
        });
        drag(drop(ref));

        return <AccordionItem key={edge.node.rowId} ref={ref}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {edge.node.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {edge.node?.tagsByCategoryId?.edges.map((tag, index) => {
              return (
                <WrapItem key={index}>
                  <Tag
                    rowId={tag.node.rowId}
                    color={edge.node?.color}
                    tagConnection={edge.node?.tagsByCategoryId?.__id}
                    tagName={tag.node.name}
                  />
                </WrapItem>
              )
            })}
          </AccordionPanel>
        </AccordionItem>
      }
      )}
    </Accordion>
  );
}