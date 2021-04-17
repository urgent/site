/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          messageTags {
            items {
              id
              tagID
              messageID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          messageTags {
            items {
              id
              tagID
              messageID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          messageTags {
            items {
              id
              tagID
              messageID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messageTags {
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          owner
          message {
            id
            body
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messageTags {
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          owner
          message {
            id
            body
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messageTags {
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          owner
          message {
            id
            body
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateMessageTag = /* GraphQL */ `
  subscription OnCreateMessageTag($owner: String) {
    onCreateMessageTag(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messageTags {
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
            owner
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
      }
      owner
      message {
        id
        body
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messageTags {
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
            owner
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
      }
    }
  }
`;
export const onUpdateMessageTag = /* GraphQL */ `
  subscription OnUpdateMessageTag($owner: String) {
    onUpdateMessageTag(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messageTags {
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
            owner
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
      }
      owner
      message {
        id
        body
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messageTags {
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
            owner
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
      }
    }
  }
`;
export const onDeleteMessageTag = /* GraphQL */ `
  subscription OnDeleteMessageTag($owner: String) {
    onDeleteMessageTag(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messageTags {
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
            owner
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
      }
      owner
      message {
        id
        body
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messageTags {
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
            owner
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
      }
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($username: String) {
    onCreateMessage(username: $username) {
      id
      body
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messageTags {
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          owner
          message {
            id
            body
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($username: String) {
    onUpdateMessage(username: $username) {
      id
      body
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messageTags {
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          owner
          message {
            id
            body
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($username: String) {
    onDeleteMessage(username: $username) {
      id
      body
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messageTags {
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
          owner
          message {
            id
            body
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            messageTags {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
