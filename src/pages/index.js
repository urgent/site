import React, { useState, useCallback } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar"
import Tiles from "../components/Tiles"
import { withRelay } from 'relay-nextjs';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { Grid } from '@chakra-ui/react'
import useStore from "../utils/store";

// The $uuid variable is injected automatically from the route.
const HomeQuery = graphql`
  query pages_HomeQuery {
    ...NavFragment_organization
    ...SidebarFragment_categories
    ...SidebarFragment_messages
    ...TilesFragment_messages
    ...pagesFragment_userConfig
  }
`;

const userConfigFragment = graphql`
  fragment pagesFragment_userConfig on Query {
    allUserConfigs {
      edges {
        node {
          defaultOrganization
        }
      }
    }
  }
`;

function Home({ preloadedQuery }) {
  const query = usePreloadedQuery(HomeQuery, preloadedQuery);
  const userConfig = useFragment(userConfigFragment, query);
  const focusOrganization = useStore((state) => state.focusOrganization);
  // if user config exists, use as default organization. If not, use first row in organization query
  if (userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization > 0) {
    focusOrganization(userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization);
  } else {
    focusOrganization(organizations.allOrganizationUsers?.edges[0]?.node?.organizationByOrganizationId.rowId);
  }

  return <>
    <Nav query={query} />
    <Sidebar query={query} />
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