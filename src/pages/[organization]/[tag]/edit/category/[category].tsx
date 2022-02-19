import React from "react";
import Nav from "../../../../../components/Nav";
import { Sidebar } from "../../../../../components/Sidebar";
import { withRelay } from "relay-nextjs";
import {
  graphql,
  usePreloadedQuery,
  useFragment,
  useMutation,
} from "react-relay/hooks";
import { Grid, Box } from "@chakra-ui/react";
import { getClientEnvironment } from "../../../../../lib/client_environment";
import Editor from "../../../../../components/Editor";
import { arrayCast, decode } from "../../../../../utils/route";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const EditQuery = graphql`
  query Category_categoryQuery(
    $category: Int!
    $organization: Int!
    $tag: [Int]
  ) {
    query {
      ...Category_categoryFragment @arguments(category: $category)
      ...SidebarFragment_messages
        @arguments(organization: $organization, tag: $tag)
      ...SidebarFragment_categories
        @arguments(organization: $organization, tag: $tag)
      ...NavFragment_organization @arguments(organization: $organization)
    }
  }
`;

const categoryFragment = graphql`
  fragment Category_categoryFragment on Query
  @argumentDefinitions(category: { type: "Int!" }) {
    query {
      categoryByRowId(rowId: $category) {
        name
        color
        sort
      }
    }
  }
`;

const UpdateMessageMutation = graphql`
  mutation CategoryUpdateMessageMutation($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      messages {
        rowId
        content
        loomSharedUrl
        organizationId
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

function Edit({ preloadedQuery }) {
  const { query } = usePreloadedQuery(EditQuery, preloadedQuery) as any;
  const data = useFragment(categoryFragment, query);
  const { categoryByRowId } = data.query;
  const [isUpdateMessagePending, updateMessage] = useMutation(
    UpdateMessageMutation
  ) as [boolean, (config?: any) => void];
  const editor = useEditor({
    extensions: [StarterKit],
    content: categoryByRowId.name,
  });

  function onSubmit() {
    updateMessage({
      variables: {
        input: {
          id: categoryByRowId.rowId,
          name: editor.getJSON(),
        },
      },
      updater: (store) => {},
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
      <Nav {...{ query }} />
      <Box gridColumn="sidebar" maxHeight="99vh" overflowY="scroll">
        <Sidebar {...{ query }} />
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
        <Editor {...{ editor, onSubmit }} />
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

export default withRelay(Edit, EditQuery, {
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
      "../../../../../lib/server_environment"
    );
    return createServerEnvironment(token);
  },
  variablesFromContext: (ctx) => {
    return {
      ...ctx.query,
      ...{
        category: arrayCast(parseInt)(ctx.query.category),
        tag: decode(ctx.query.tag).map(arrayCast(parseInt)),
        organization: arrayCast(parseInt)(ctx.query.organization),
      },
    };
  },
});
