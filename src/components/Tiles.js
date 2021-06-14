import React, { useState, useCallback } from "react";
import Message from "./Messsage"
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
                  content
                  messageTagsByMessageId {
                    edges {
                      node {
                        tagByTagId {
                          name
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

export function filter(messages, tagFilter) {
  if (tagFilter.length === 0) {
    // no tag filter, display all
    return messages
  } else {
    const nodes = messages.message_connection.edges.filter((edge) => {
      if (!Array.isArray(edge.node.message_tags)) {
        // no tags, can't match tagFilter
        return false;
      }
      else if (edge.node.message_tags === []) {
        // empty tags, can't match tagFilter
        return false;
      }
      else {
        // is one tag in filter?
        const tags = edge.node.message_tags.map(relation => relation.tag.name)
        return tagFilter.every((tag) => {
          const comparison = tags.includes(tag)
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
      {filter(data, tagFilter).allMessages.edges.map((edge, index) => <Message key={index} edit={edit} tags={edge.node.message_tags}>{edge.node.content}</Message>)}
      <Message gridColumn="span 2" gridRow="span 2">
        <Editor value={editorText} onChange={setEditorText} onSubmit={onSubmit} >
        </Editor>
      </Message>
    </Grid>)
}