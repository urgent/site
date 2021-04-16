/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateMessageTag = /* GraphQL */ `
  subscription OnCreateMessageTag {
    onCreateMessageTag {
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
    }
  }
`;
export const onUpdateMessageTag = /* GraphQL */ `
  subscription OnUpdateMessageTag {
    onUpdateMessageTag {
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
    }
  }
`;
export const onDeleteMessageTag = /* GraphQL */ `
  subscription OnDeleteMessageTag {
    onDeleteMessageTag {
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
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($username: String) {
    onCreateTag(username: $username) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($username: String) {
    onUpdateTag(username: $username) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($username: String) {
    onDeleteTag(username: $username) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($username: String) {
    onCreateMessage(username: $username) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($username: String) {
    onUpdateMessage(username: $username) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($username: String) {
    onDeleteMessage(username: $username) {
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
