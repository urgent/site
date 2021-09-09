import React, { useRef, useCallback } from 'react'
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

export default function Editor({ value, onChange, editMessage, setEditMessage, tileConnections, setEditorText }) {
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
  const [isUpdateMessagePending, updateMessage] = useMutation(UpdateMessageMutation);
  const organization = useStore((state) => state.organization);
  const editorRef = useRef(null);
  const edit = useStore((state) => state.edit);
  const [message] = useStore((state) => state.message);
  const filter = useStore((state) => state.filter);

  // Editor submit
  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const delta = JSON.stringify(editorRef.current.getEditor().getContents());
    if (edit && editMessage) {
      updateMessage({
        variables: {
          input: {
            id: message,
            content: delta,
          },
        },
        updater: store => { },
      });
      setEditMessage(false)
      setEditorText('');
    } else {
      insertMessage({
        variables: {
          input: {
            organizationId: organization,
            content: delta,
            tags: filter,
          },
          connections: [tileConnections]
        },
        updater: store => { },
      });
      // Reset the comment text
      setEditorText('');
    }
  },
    [editorRef, edit, editMessage, updateMessage, message, setEditMessage, insertMessage, organization, tileConnections, setEditorText, filter]);

  return (
    <>
      <div data-cy="editor"><Textarea value={value} onChange={(e) => onChange(e.target.value)} /></div>
      <br /><br /><br />
      <button data-cy="save" onClick={onSubmit}>Save</button>
    </>
  )
}