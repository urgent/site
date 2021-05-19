import React from "react";
import { Box } from "@chakra-ui/react"

// this component displays an individual message
export default function Messsage({ key, children }) {
  return (
    <Box
      key={key}
      boxShadow="4px 4px 15px 0 rgb(10 8 59 / 6%)"
      borderRadius="10px"
      px={4}
      py={6}
      textAlign="left"
    >{children}</Box>
  );
}
