import React, { useState } from "react";
import Toolbar from "./Toolbar"
import { Grid, Box, Badge, Button } from "@chakra-ui/react"


export function AddTagToMessage({ click }) {
  return <Button onClick={click}>+</Button>;
}

function display(visible, element) {
  if (visible) {
    return element
  }
}

function list(tags) {
  if (tags) {
    return tags.edges.map((edge, index) => <Badge key={index} color="white" mr={1} bg={`#${edge.node.tagByTagId?.categoryByCategoryId.color}`}>{edge.node.tagByTagId?.name}</Badge>)
  }
}

// this component displays an individual message
export default function Message({ tags, edit, gridColumn, gridRow, children, id, setFocusedMessage, editClick, deleteClick }) {
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
        {display(edit, <Toolbar editClick={() => editClick(id, tags?.__id, children)} deleteClick={() => deleteClick(id, tags?.__id)} />)}
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
        {display(edit, <AddTagToMessage click={() => setFocusedMessage([id, tags?.__id])} />)}
      </Box>
    </Grid>
  );
}
