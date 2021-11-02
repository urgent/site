import React, { useState } from 'react'
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation'
import useStore from "../utils/store"

const UpdateCategoryMutation = graphql`
  mutation useCategoryClickUpdateMutation($input:UpdateCategoryInput!) {
    updateCategory(input: $input) {
      category {
        rowId
        name
        color
        tagsByCategoryId {
            __id
            edges {
                node {
                    name
                }
            }
        }
      }
    }
  }
`;

const DeleteCategoryMutation = graphql`
    mutation useCategoryClickDeleteMutation($input:DeleteCategoryInput!, $connections: [ID!]!) {
        deleteCategory(input: $input) {
            category {
                __id @deleteEdge(connections: $connections)
            }
            query {
                allMessages {
                    nodes {
                        messageTagsByMessageId {
                            __id @deleteEdge(connections: $connections)
                            edges {
                                node {
                                messageId
                                }
                            }
                        }
                        content
                    }
                }
                allCategories {
                    __id @deleteEdge(connections: $connections)
                }
            }
        }
    }
`
export function useCategory({ focusedCategory, setFocusedCategory, editCategoryText, editCategoryColor }) {
    const [isUpdateCategoryPending, updateCategory] = useMutation(UpdateCategoryMutation);
    const [isDeleteCategoryPending, deleteCategory] = useMutation(DeleteCategoryMutation);

    function onEnter(e) {
        if (e.key !== 'Enter') {
            return;
        }
        updateCategory({
            variables: {
                input: {
                    id: focusedCategory,
                    name: editCategoryText,
                    color: editCategoryColor
                },
            },
        });
        setFocusedCategory(false)
    }

    function del({ categoryId, messageTagConnections, sidebarConnection }) {
        deleteCategory({
            variables: {
                input: {
                    categoryId: categoryId
                },
                connections: [...messageTagConnections, sidebarConnection],
            },
            updater: store => { },
        })
    }


    return [onEnter, del]
}