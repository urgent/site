/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      tags {
        items {
          id
          categoryID
          label
          category {
            id
            name
            tags {
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            items {
              id
              tagID
              messageID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tags {
          items {
            id
            categoryID
            label
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      categoryID
      label
      category {
        id
        name
        tags {
          items {
            id
            categoryID
            label
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          tagID
          messageID
          tag {
            id
            categoryID
            label
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          message {
            id
            body
            tags {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryID
        label
        category {
          id
          name
          tags {
            items {
              id
              categoryID
              label
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            tagID
            messageID
            tag {
              id
              categoryID
              label
              createdAt
              updatedAt
            }
            message {
              id
              body
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      body
      tags {
        items {
          id
          tagID
          messageID
          tag {
            id
            categoryID
            label
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          message {
            id
            body
            tags {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        tags {
          items {
            id
            tagID
            messageID
            tag {
              id
              categoryID
              label
              createdAt
              updatedAt
            }
            message {
              id
              body
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
