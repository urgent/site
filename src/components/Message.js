import React, { useCallback } from "react";
import Toolbar from "./Toolbar"
import { Grid, Box, Badge, Button } from "@chakra-ui/react"
import useMutation from './useMutation'

const InsertMessageTagMutation = graphql`
  mutation MessageTagMutation($input:CreateMessageTagInput!, $connections: [ID!]!) {
    createMessageTag(input: $input) {
      messageTag @appendNode(connections: $connections, edgeTypeName: "MessageTagsEdge") {
        tagByTagId {
          name
          categoryByCategoryId {
            color
          }
        }
      }
    }
  }
`;

export function AddTagToMessage({ messageId, tagId, connectionId }) {
  const [isMessageTagPending, insertMessageTag] = useMutation(InsertMessageTagMutation);

  // Editor submit callback
  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      insertMessageTag({
        variables: {
          input: {
            messageId,
            tagId: tagId[0]
          },
          connections: [connectionId]
        },
        updater: store => { },
      });
    },
    [messageId, tagId, connectionId],
  );

  return <Button onClick={onSubmit}>+</Button>;
}

function display(visible, element) {
  if (visible) {
    return element
  }
}

function list(tags) {
  if (tags) {
    return tags.edges.map((edge, index) => <Badge key={index} color="white" mr={1} bg={`#${edge.node.tagByTagId.categoryByCategoryId.color}`}>{edge.node.tagByTagId.name}</Badge>)
  }
}

// this component displays an individual message
export default function Message({ tags, edit, gridColumn, gridRow, children, id, tagFilter }) {
  return (
    <Grid
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="10px"
      textAlign="left"
      gridTemplateRows="[menu] 2em [body] auto [tags] 2em"
      gridTemplateColumns="[body] auto [menu] 4.5em"
      gridColumn={gridColumn}
      gridRow={gridRow}
    >
      <Box
        gridRow="menu"
        gridColumn="menu"
      >
        {display(edit, <Toolbar />)}
      </Box>
      <Box
        gridRow="body"
        gridColumn="body / -1"
        px={4}
        pb={2}
        overflowX="hidden"
      >
        {children}
      </Box>
      <Box
        gridRow="tags"
        gridColumn="body / -1"
        alignSelf="end"
        px={4}
        pb={2}
      >
        {list(tags)}
        {display(edit, <AddTagToMessage messageId={id} tagId={tagFilter} connectionId={tags?.__id} />)}
      </Box>
    </Grid>
  );
}
