/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      tag {
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
        messages {
          items {
            id
            tagID
            messageID
            tag {
              id
              categoryID
              label
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      message {
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      tag {
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
        messages {
          items {
            id
            tagID
            messageID
            tag {
              id
              categoryID
              label
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      message {
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      tag {
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
        messages {
          items {
            id
            tagID
            messageID
            tag {
              id
              categoryID
              label
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      message {
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
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            message {
              id
              body
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
  }
`;
