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