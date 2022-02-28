import React, { useState } from "react";
import Nav from "../../../../components/Nav";
import { Sidebar } from "../../../../components/Sidebar";
import { withRelay } from "relay-nextjs";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { Grid, Box } from "@chakra-ui/react";
import { getClientEnvironment } from "../../../../lib/client_environment";
import Editor from "../../../../components/Editor";
import { arrayCast, decode } from "../../../../utils/route";
import useMutation from "../../../../components/useMutation";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { parse } from "body-parser";

const InsertMessageMutation = graphql`
  mutation messageTagInsertMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      messages {
        rowId
        content
        organizationId
        loomSharedUrl
        messageTagsByMessageId {
          __id
          edges {
            node {
              __id
              tagId
              tagByTagId {
                __id
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
`;

const CreateQuery = graphql`
  query messageTagCreateQuery($organization: Int!, $tag: [Int]) {
    query {
      ...SidebarFragment_messages
        @arguments(organization: $organization, tag: $tag)
      ...SidebarFragment_categories
        @arguments(organization: $organization, tag: $tag)
      ...NavFragment_organization @arguments(organization: $organization)
    }
  }
`;

function Create({ preloadedQuery }) {
  const { query } = usePreloadedQuery(CreateQuery, preloadedQuery) as any;
  const [isInsertMessagePending, insertMessage] = useMutation(
    InsertMessageMutation
  ) as [boolean, (config?: any) => void];
  const router = useRouter();
  const { organization, tag } = router.query;
  const tags = decode(tag).map((_tag) => {
    const res = parseInt(_tag);
    return res;
  });
  const [loom, setLoom] = useState("");
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });
  const path = router.pathname.split("/");

  function onClick() {
    const organizationId = arrayCast(parseInt)(organization);
    const content = JSON.stringify(editor.getJSON());
    const loomSharedUrl = loom;
    insertMessage({
      variables: {
        input: {
          organizationId,
          content,
          loomSharedUrl,
          tags,
        },
      },
      updater: (store) => {
        // redirect to edit page on save
        const payload = store.getRootField("createMessage");
        const messages = payload.getLinkedRecords("messages");
        const rowId = messages[0].getValue("rowId");
        router.push(`/${organization}/${tag}/edit/message/${rowId}`);
      },
    });
  }

  return (
    <Grid
      data-cy="grid"
      templateColumns="[nav] 4rem [sidebar] 2fr [content] 7fr"
      bg={"background.50"}
      color={"text.600"}
      minHeight="100vh"
      d={["none", "none", "none", "grid", "grid"]}
    >
      <Nav {...{ query, organization, path }} />
      <Box gridColumn="sidebar" maxHeight="99vh" overflowY="scroll">
        <Sidebar path="create/message" {...{ query, tags, onClick }} />
      </Box>
      <Box
        as="main"
        gridColumn="content"
        pt={2}
        px={8}
        mx="auto"
        sx={{ textAlign: "center" }}
        width="100%"
        maxHeight="99vh"
        overflowY="scroll"
      >
        <Editor {...{ editor, onClick }} />
      </Box>
    </Grid>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
interface NextCtx {
  cookies: any;
}

export default withRelay(Create, CreateQuery, {
  // Fallback to render while the page is loading.
  // This property is optional.
  fallback: <Loading />,
  // Create a Relay environment on the client-side.
  // Note: This function must always return the same value.
  createClientEnvironment: () => getClientEnvironment(),
  // Gets server side props for the page.
  serverSideProps: async (ctx) => {
    // This is an example of getting an auth token from the request context.
    // If you don't need to authenticate users this can be removed and return an
    // empty object instead.

    return {
      token: (ctx.req as unknown as NextCtx).cookies[process.env.COOKIE_NAME],
    };
  },
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async (
    ctx,
    // The object returned from serverSideProps. If you don't need a token
    // you can remove this argument.
    { token }
  ) => {
    const { createServerEnvironment } = await import(
      "../../../../lib/server_environment"
    );
    return createServerEnvironment(token);
  },
  variablesFromContext: (ctx) => {
    return {
      ...ctx.query,
      ...{
        message: arrayCast(parseInt)(ctx.query.message),
        tag: decode(ctx.query.tag).map(arrayCast(parseInt)),
        organization: arrayCast(parseInt)(ctx.query.organization),
      },
    };
  },
});
