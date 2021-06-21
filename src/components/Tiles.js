import React, { useState, useCallback } from "react";
import Message from "./Message"
import { Editor } from './Editor';
import { Grid } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation'
import { signIn, signOut, useSession } from 'next-auth/client'

const InsertMessageMutation = graphql`
  mutation TilesInsertMessageMutation($input:CreateMessageInput!, $connections: [ID!]!) {
    createMessage(input: $input) {
      message @appendNode(connections: $connections, edgeTypeName: "MessagesEdge") {
        rowId
        content
      }
    }
  }
`;

const DeleteMessageMutation = graphql`
  mutation TilesDeleteMessageMutation($input:DeleteMessageInput!, $connections: [ID!]!) {
    deleteMessage(input: $input) {
      message {
        id @deleteEdge(connections: $connections)
      }
    }
  }
`;

const TilesFragment = graphql`
          fragment TilesFragment_messages on Query {
            allMessages {
              __id
              edges {
                node {
                  rowId
                  content
                  messageTagsByMessageId {
                    __id
                    edges {
                      node {
                        tagByTagId {
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
          }
        `

/**
 * Format input as nodes consistent with Relay query
 * 
 * @param {*} nodes 
 * @returns 
 */
export function format(nodes) {
  return {
    "allMessages": {
      "edges": nodes
    }
  }
}

export function filter(messages, tagFilter, edit, focusedMessage, messageMode) {
  if (messageMode === "edit") {
    // message in edit mode. hide all messages not being edited
    const [messageId] = focusedMessage;
    const nodes = messages.allMessages?.edges.filter((edge) => edge.node.rowId === messageId)
    return format(nodes)
  }


  if (tagFilter.length === 0 || edit) {
    // no tag filter or in edit mode, display all
    return messages
  }

  const nodes = messages.allMessages?.edges.filter((edge) => {
    if (!Array.isArray(edge.node.messageTagsByMessageId.edges)) {
      // no tags, can't match tagFilter
      return false;
    }
    else if (edge.node.messageTagsByMessageId.edges === []) {
      // empty tags, can't match tagFilter
      return false;
    }
    else {
      // is one tag in filter?
      const tags = edge.node.messageTagsByMessageId.edges.map(edge => edge.node.tagByTagId.rowId)
      return tagFilter.every((filter) => {
        const comparison = tags.includes(filter)
        return comparison
      })
    }
  })

  // so filtered data has same structure as unfiltered data
  return format(nodes)
}

export default function Tiles({ edit, messages, tagFilter, focusedMessage, setFocusedMessage }) {
  const [editorText, setEditorText] = useState('');
  const [messageMode, setMessageMode] = useState('view')
  const [session] = useSession()
  const data = useFragment(TilesFragment, messages);
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
  const [isDeleteMessagePending, deleteMessage] = useMutation(DeleteMessageMutation);

  // Editor submit callback
  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      insertMessage({
        variables: {
          input: {
            content: editorText,
          },
          connections: [data.allMessages.__id]
        },
        updater: store => { },
      });
      // Reset the comment text
      setEditorText('');
    },
    [editorText, setEditorText, insertMessage],
  );

  return (
    <Grid
      gridTemplateColumns={[
        "repeat(auto-fit, minmax(100px, 1fr))",
        "repeat(auto-fit, minmax(100px, 1fr))",
        "repeat(auto-fit, minmax(200px, 1fr))",
        "repeat(auto-fit, minmax(200px, 1fr))",
        "repeat(auto-fit, minmax(200px, 1fr))"]}
      gridGap="5px"
      gridAutoRows={["100px", "150px", "200px", "200px", "200px"]}
      gridAutoFlow="dense"
    >
      {filter(data, tagFilter, edit, focusedMessage, messageMode).allMessages?.edges.map((edge, index) => (
        <Message
          key={index}
          edit={edit}
          tags={edge.node.messageTagsByMessageId}
          tagFilter={tagFilter}
          id={edge.node.rowId}
          setFocusedMessage={setFocusedMessage}
          gridColumn={["span 2", "span 2", "span 2", "auto", "auto"]}
          gridRow={["span 2", "span 2", "span 2", "auto", "auto"]}
          editClick={(messageId, collectionId, content) => {
            if (messageMode === 'edit') {
              // turn off edit mode
              setMessageMode('view')
              setEditorText('')
            } else {
              // run edit
              setMessageMode('edit')
              setFocusedMessage([messageId, collectionId])
              setEditorText(content)
            }
          }}
          deleteClick={(messageId, collectionId) => {
            deleteMessage({
              variables: {
                input: {
                  messageId: messageId,
                },
                connections: [data.allMessages.__id]
              },
              updater: store => { },
            });
          }}
        >
          {edge.node.content}
        </Message>
      ))}
      <Message gridColumn="span 2" gridRow="span 2">
        <Editor value={editorText} onChange={setEditorText} onSubmit={onSubmit} >
        </Editor>
      </Message>
    </Grid>)
}