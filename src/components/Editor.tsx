import React, { useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const DynamicLoomSDK = dynamic(() => import("./LoomSDK"), {
  ssr: false,
});

export default function Editor({ content, onChange, onSubmit }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  return (
    <>
      <Box height={100} data-cy="editor">
        <Box as={EditorContent} editor={editor} h={100} />
      </Box>
      <br />
      <br />
      <br />
      <Stack spacing={4} direction="row" align="center">
        <Button
          data-cy="save"
          onClick={onSubmit}
          width="170px"
          borderRadius={20}
        >
          Save
        </Button>
      </Stack>
    </>
  );
}
