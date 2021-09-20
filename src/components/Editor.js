import React, { useCallback } from 'react'
import { Textarea } from "@chakra-ui/react"
import { graphql } from 'react-relay';
import useMutation from './useMutation'
import useStore from "../utils/store";


const InsertMessageMutation = graphql`
  mutation EditorInsertMessageMutation($input:CreateMessageInput!, $connections: [ID!]!) {
    createMessage(input: $input) {
      messages @appendNode(connections: $connections, edgeTypeName: "MessagesEdge") {
        rowId
        content
        organizationId
        messageTagsByMessageId {
            __id
            edges {
              node {
                __id
                tagId
                tagByTagId {
                  __id
                  rowId
                  name
                  categoryByCategoryId {
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
`;

const UpdateMessageMutation = graphql`
  mutation EditorUpdateMessageMutation($input:UpdateMessageInput!) {
    updateMessage(input: $input) {
      messages {
        rowId
        content
        organizationId
        messageTagsByMessageId {
            __id
            edges {
              node {
                __id
                tagId
                tagByTagId {
                  __id
                  rowId
                  name
                  categoryByCategoryId {
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
`;

export default function Editor({ tileConnections }) {
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
  const [isUpdateMessagePending, updateMessage] = useMutation(UpdateMessageMutation);
  const organization = useStore((state) => state.organization);
  const edit = useStore((state) => state.edit);
  const [message] = useStore((state) => state.message);
  const filter = useStore((state) => state.filter);
  const editorValue = useStore((state) => state.editorValue);
  const setEditorValue = useStore((state) => state.setEditorValue);
  const editMessage = useStore((state) => state.editMessage);
  const setEditMessage = useStore((state) => state.setEditMessage);

  // Editor submit
  const onSubmit = useCallback((event) => {
    event.preventDefault();

    if (edit && editMessage) {
      updateMessage({
        variables: {
          input: {
            id: message,
            content: editorValue,
          },
        },
        updater: store => { },
      });
      setEditMessage(false)
      setEditorValue('');
    } else {
      insertMessage({
        variables: {
          input: {
            organizationId: organization,
            content: editorValue,
            tags: filter,
          },
          connections: [tileConnections]
        },
        updater: store => { },
      });
      // Reset the comment text
      setEditorValue('');
    }
  },
    [editorValue, edit, editMessage, updateMessage, message, setEditMessage, insertMessage, organization, tileConnections, filter]);

  return (
    <>
      <div data-cy="editor"><Textarea value={editorValue} onChange={(e) => setEditorValue(e.target.value)} /></div>
      <br /><br /><br />
      <button data-cy="save" onClick={onSubmit}>Save</button>
    </>
  )
}