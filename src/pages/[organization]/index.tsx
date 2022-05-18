import React from "react";
import Nav from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import Tiles from "../../components/Tiles";
import Mobile from "../../components/Mobile";
import { withRelay } from "relay-nextjs";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { Grid, Box } from "@chakra-ui/react";
import { getClientEnvironment } from "../../lib/client_environment";
import { useRouter } from "next/router";
import { parse } from "../../utils/route";
import { useMediaQuery } from "react-responsive";

const HomeQuery = graphql`
  query Organization_HomeQuery($organization: Int, $tag: [Int]) {
    query {
      ...TilesFragment_messages
        @arguments(organization: $organization, tag: $tag)
      ...SidebarFragment_messages
        @arguments(organization: $organization, tag: $tag)
      ...SidebarFragment_categories
        @arguments(organization: $organization, tag: $tag)
      ...NavFragment_organization @arguments(organization: $organization)
      ...MessageFragment_tags @arguments(tag: $tag)
    }
  }
`;

function Home(props) {
  const { preloadedQuery, session } = props;
  const { query } = usePreloadedQuery(HomeQuery, preloadedQuery) as any;
  const router = useRouter();
  const { organization, tags } = router.query;
  const path = router.pathname.split("/");
  const parsedTags = parse(tags);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 630px)" });

  return (
    <>
      {isTabletOrMobile && <Mobile tags={parsedTags} {...{ query, session }} />}
      {!isTabletOrMobile && (
        <Grid
          data-cy="grid"
          templateColumns="[nav] 4rem [sidebar] 250px [content] auto"
          bg={"background.50"}
          color={"text.600"}
          minHeight="100vh"
        >
          <Nav {...{ query, organization, path, session }} />
          <Box gridColumn="sidebar" maxHeight="99vh" overflowY="scroll">
            <Sidebar path="" tags={parsedTags} {...{ query }} />
          </Box>
          <Box
            as="main"
            gridColumn="content"
            pt={2}
            mx="auto"
            sx={{ textAlign: "center" }}
            width="100%"
            maxHeight="99vh"
            overflowY="scroll"
          >
            <Tiles tags={parsedTags} {...{ query }} />
          </Box>
        </Grid>
      )}
    </>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
interface NextCtx {
  cookies: any;
}

export default withRelay(Home, HomeQuery, {
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
    const { getSession } = await import("next-auth/react");
    const session = await getSession(ctx);
    return {
      token: (ctx.req as unknown as NextCtx).cookies[process.env.COOKIE_NAME],
      session,
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
      "../../lib/server_environment"
    );
    return createServerEnvironment(token);
  },
  variablesFromContext: (ctx) => {
    return {
      ...ctx.query,
      ...{
        tag: parse(ctx.query.tags),
        organization: parse(ctx.query.organization)[0],
        edit: ctx.query.edit === "true",
        editMessage: parseInt(ctx.query.editMessage as string),
      },
    };
  },
});
