/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchCreateMessageTag = /* GraphQL */ `
  mutation BatchCreateMessageTag($messageTags: [CreateMessageTagInput]) {
    batchCreateMessageTag(messageTags: $messageTags) {
      id
      tagID
      messageID
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          tags {
            items {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createMessageTag = /* GraphQL */ `
  mutation CreateMessageTag(
    $input: CreateMessageTagInput!
    $condition: ModelMessageTagConditionInput
  ) {
    createMessageTag(input: $input, condition: $condition) {
      id
      tagID
      messageID
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          tags {
            items {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateMessageTag = /* GraphQL */ `
  mutation UpdateMessageTag(
    $input: UpdateMessageTagInput!
    $condition: ModelMessageTagConditionInput
  ) {
    updateMessageTag(input: $input, condition: $condition) {
      id
      tagID
      messageID
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          tags {
            items {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteMessageTag = /* GraphQL */ `
  mutation DeleteMessageTag(
    $input: DeleteMessageTagInput!
    $condition: ModelMessageTagConditionInput
  ) {
    deleteMessageTag(input: $input, condition: $condition) {
      id
      tagID
      messageID
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          tags {
            items {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            tag {
              id
              categoryID
              label
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              username
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      categoryID
      label
      username
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      categoryID
      label
      username
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      categoryID
      label
      username
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      body
      username
      tags {
        items {
          id
          tagID
          messageID
          _version
          _deleted
          _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      body
      username
      tags {
        items {
          id
          tagID
          messageID
          _version
          _deleted
          _lastChangedAt
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            messages {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
