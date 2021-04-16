/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        tags {
          items {
            id
            categoryID
            label
            username
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
      tags {
        items {
          id
          categoryID
          label
          username
          category {
            id
            name
            createdAt
            updatedAt
            tags {
              nextToken
              startedAt
            }
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
            startedAt
          }
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        createdAt
        updatedAt
        tags {
          items {
            id
            categoryID
            label
            username
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessageTags = /* GraphQL */ `
  query SyncMessageTags(
    $filter: ModelMessageTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagID
        messageID
        createdAt
        updatedAt
        tag {
          id
          categoryID
          label
          username
          category {
            id
            name
            createdAt
            updatedAt
            tags {
              nextToken
              startedAt
            }
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
            startedAt
          }
          createdAt
          updatedAt
        }
        message {
          id
          body
          username
          tags {
            items {
              id
              tagID
              messageID
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        username
        category {
          id
          name
          createdAt
          updatedAt
          tags {
            items {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        messages {
          items {
            id
            tagID
            messageID
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      categoryID
      label
      username
      category {
        id
        name
        createdAt
        updatedAt
        tags {
          items {
            id
            categoryID
            label
            username
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      messages {
        items {
          id
          tagID
          messageID
          createdAt
          updatedAt
          tag {
            id
            categoryID
            label
            username
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
          message {
            id
            body
            username
            tags {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoryID
        label
        username
        category {
          id
          name
          createdAt
          updatedAt
          tags {
            items {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        messages {
          items {
            id
            tagID
            messageID
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        username
        tags {
          items {
            id
            tagID
            messageID
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      body
      username
      tags {
        items {
          id
          tagID
          messageID
          createdAt
          updatedAt
          tag {
            id
            categoryID
            label
            username
            category {
              id
              name
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
          message {
            id
            body
            username
            tags {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const mssgsByUsername = /* GraphQL */ `
  query MssgsByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mssgsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        username
        tags {
          items {
            id
            tagID
            messageID
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        body
        username
        tags {
          items {
            id
            tagID
            messageID
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
