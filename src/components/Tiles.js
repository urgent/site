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

/**
 * Format input as nodes consistent with Relay query
 * 
 * @param {*} nodes 
 * @returns 
 */
export function format(nodes) {
  return {
    "edges": nodes
  }
}


/**
 * Filter messages per selected tags, app edit mode, message edit mode
 * @param { Object[] } messages Relay result
 * @param { Number[] } tagFilter Tag IDs 
 * @param { Boolean } edit App edit mode status
 * @param { Number } focusedMessage ID of message where edit button was clicked
 * @param { Boolean } messageMode Message edit mode status
 * @returns { Object[] } Relay result filtered per app controls
 */
export function filter(messages, tagFilter, edit, focusedMessage, messageMode) {
  if (messageMode === "edit") {
    // message in edit mode. hide all messages not being edited
    const [messageId] = focusedMessage;
    const nodes = messages.edges.filter((edge) => edge.node.rowId === messageId)
    return format(nodes)
  }

  if (tagFilter.length === 0) {
    // no tag filter, display all
    return messages
  }

  const nodes = messages.edges.filter((edge) => {
    if (!Array.isArray(edge.node.messageTagsByMessageId.edges)) {
      // no tags, can't match tagFilter
      return false;
    }
    else if (edge.node.messageTagsByMessageId.edges === []) {
      // empty tags, can't match tagFilter
      return false;
    }
    else {
      const tags = edge.node.messageTagsByMessageId.edges.map(edge => edge.node.tagByTagId.rowId)
      // is one tag in filter?
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
          connections: [messages.__id]
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
      {filter(messages, tagFilter, edit, focusedMessage, messageMode).edges.map((edge, index) => (
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
                connections: [messages.__id]
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