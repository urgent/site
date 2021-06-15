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
        id
        content
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
    "message_connection": {
      "edges": nodes
    }
  }
}

export function filter(messages, tagFilter, edit) {
  if (tagFilter.length === 0 || edit) {
    // no tag filter or in edit mode, display all
    return messages
  } else {
    const nodes = messages.allMessages?.edges.filter((edge) => {
      if (!Array.isArray(edge.node.messageTagsByMessageId)) {
        // no tags, can't match tagFilter
        return false;
      }
      else if (edge.node.messageTagsByMessageId === []) {
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
    return format(nodes)
  }
}

export default function Tiles({ edit, messages, userId, tagFilter }) {
  const [editorText, setEditorText] = useState('');
  const [session] = useSession()
  const data = useFragment(TilesFragment, messages);
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
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
    [editorText, setEditorText, userId, tagFilter, insertMessage],
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
      {filter(data, tagFilter, edit).allMessages?.edges.map((edge, index) => <Message key={index} edit={edit} tags={edge.node.messageTagsByMessageId} tagFilter={tagFilter} id={edge.node.rowId}>{edge.node.content}</Message>)}
      <Message gridColumn="span 2" gridRow="span 2">
        <Editor value={editorText} onChange={setEditorText} onSubmit={onSubmit} >
        </Editor>
      </Message>
    </Grid>)
}