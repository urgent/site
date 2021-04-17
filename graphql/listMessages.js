export const listMessages = /* GraphQL */ `
  query listMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        username
        messageTags {
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