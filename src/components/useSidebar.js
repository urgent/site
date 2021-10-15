import { useMemo } from "react"
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation'

const categoriesFragment = graphql`
fragment useSidebarFragment on Query {
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
  mutation useSidebarSortMutation($input:SortCategoryInput!) {
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

export function useSidebar({ query }) {
  const categories = useFragment(categoriesFragment, query);
  const [isSortCategoryPending, sortCategory] = useMutation(SortCategoryMutation);

  /**
   * Run sort category mutation
   * @param {number} dragged Index of dragged item in category list
   * @param {number} hovered Index of drop zone in category list
   */
  function moveCategory(dragged, hovered) {
    sortCategory({
      variables: {
        input: {
          categoryIds: sidebarCollection.rowIds,
          sort: rearrange(sidebarCollection.sort, dragged, hovered)
        }
      }
    })
  }

  const sidebarCollection = useMemo(() => ({
    // for dnd
    rowIds: categories.allCategories.edges.map(edge => edge.node.rowId),
    sort: categories.allCategories.edges.map((edge, index) => {
      // sort categories if no sort exist, occurs when user has not used DnD before
      if (edge.node.sort > 0) {
        return edge.node.sort;
      } else {
        return index + 1;
      }
    }),
    allCategories: {
      edges: categories.allCategories.edges.map(edge => {
        return {
          node: {
            // sort nodes, graphile has trouble with sort across join
            // would need default category config on user creation to make it work
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
      }),
      __id: categories.allCategories.__id
    }
  }), [categories]);

  return [sidebarCollection, moveCategory]
}