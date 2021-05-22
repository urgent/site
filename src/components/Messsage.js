import React from "react";
import Toolbar from "./Toolbar"
import { Grid, Box, Badge } from "@chakra-ui/react"

function display(visible) {
  if (visible) {
    return <Toolbar />
  }
}

function list(tags) {
  if (tags) {
    return tags.map((relation, index) => <Badge key={index} color="white" mr={1} bg={`#${relation.tag.category.color}`}>{relation.tag.name}</Badge>)
  }
}

// this component displays an individual message
export default function Messsage({ tags, edit, children }) {
  return (
    <Grid
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="10px"
      textAlign="left"
      gridTemplateRows="[menu] 2em [body] auto [tags] 2em"
      gridTemplateColumns="[body] auto [menu] 4.5em"
    >
      <Box
        gridRow="menu"
        gridColumn="menu"
      >
        {display(edit)}
      </Box>
      <Box
        gridRow="body"
        gridColumn="body / -1"
        px={4}
        pb={2}
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
      </Box>
    </Grid>
  );
}
