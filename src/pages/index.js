import React from "react";
import Nav from "../components/Nav";
import { Collapsable } from "../components/Sidebar"
import Tiles from "../components/Tiles"
import Mobile from "../components/Mobile"
import { withRelay } from 'relay-nextjs';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import { Grid, Box } from '@chakra-ui/react'

const HomeQuery = graphql`
  query pages_HomeQuery {
    ...NavFragment_organization
    ...NavFragment_userConfig
    ...SidebarFragment_categories
    ...SidebarFragment_messages
    ...TilesFragment_messages
  }
`;

function Home({ preloadedQuery }) {
  const query = usePreloadedQuery(HomeQuery, preloadedQuery);

  return <>
    <Grid
      data-cy="grid"
      templateColumns="[nav] 4rem [sidebar] 2fr [content] 7fr"
      bg={"background.50"}
      color={"text.600"}
      minHeight="100vh"
      d={["none", "none", "none", "grid", "grid"]}
    >
      <Nav query={query} />
      <Box gridColumn="sidebar"><Collapsable query={query} /></Box>
      <Grid
        as="main"
        gridColumn="content"
        pt={2}
        mx="auto"
        sx={{ textAlign: "center" }}
        width="100%"
      >
        <Tiles query={query} />
      </Grid>
    </Grid>
    <Box d={["inherit", "inherit", "inherit", "none", "none"]}>
      <Mobile query={query} />
    </Box>
  </>
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(Home, HomeQuery, {
  // This property is optional.
  error: <>Error</>,
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

    return { token: ctx.req.cookies[process.env.COOKIE_NAME] };
  },
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async (
    ctx,
    // The object returned from serverSideProps. If you don't need a token
    // you can remove this argument.
    { token }
  ) => {
    const { createServerEnvironment } = await import('../lib/server_environment');
    return createServerEnvironment(token);
  },
});