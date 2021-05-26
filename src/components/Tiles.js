import React, { useState, useCallback } from "react";
import Message from "./Messsage"
import { Editor } from './Editor';
import { Grid } from "@chakra-ui/react"
import { graphql, useFragment } from 'react-relay';
import useMutation from './useMutation'

const InsertMessageMutation = graphql`
  mutation TilesInsertMessageMutation($input:[message_insert_input!]!) {
    insert_message(objects: $input) {
      affected_rows
      returning {
        id
        content
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


  const data = useFragment(
    graphql`
          fragment TilesFragment_messages on query_root {
            message_connection {
              edges {
                node {
                  content
                  message_tags {
                    tag {
                      name
                      category {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `, messages
  );

  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);

  // Editor submit callback
  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      insertMessage({
        variables: {
          input: {
            content: editorText,
            user_id: userId,
            message_tags: tagFilter
          },
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
      {filter(data, tagFilter).message_connection.edges.map((edge, index) => <Message key={index} edit={edit} tags={edge.node.message_tags}>{edge.node.content}</Message>)}
      <Message gridColumn="span 2" gridRow="span 2">
        <Editor value={editorText} onChange={setEditorText} onSubmit={onSubmit} />
      </Message>
    </Grid>)
}