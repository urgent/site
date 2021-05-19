import React from "react";
import { Box } from "@chakra-ui/react"

// this component displays an individual message
export default function Messsage({ children }) {
  return (
    <Box>{children}</Box>
  );
}
