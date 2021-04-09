/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      categoryID
      label
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
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      categoryID
      label
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
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      categoryID
      label
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
  }
`;
export const onCreateMessageTag = /* GraphQL */ `
  subscription OnCreateMessageTag {
    onCreateMessageTag {
      id
      tagID
      messageID
      tag {
        id
        categoryID
        label
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
  }
`;
export const onUpdateMessageTag = /* GraphQL */ `
  subscription OnUpdateMessageTag {
    onUpdateMessageTag {
      id
      tagID
      messageID
      tag {
        id
        categoryID
        label
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
  }
`;
export const onDeleteMessageTag = /* GraphQL */ `
  subscription OnDeleteMessageTag {
    onDeleteMessageTag {
      id
      tagID
      messageID
      tag {
        id
        categoryID
        label
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
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      body
      tags {
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
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      body
      tags {
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
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      body
      tags {
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
  }
`;
