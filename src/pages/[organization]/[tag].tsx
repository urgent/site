import React from "react";
import Nav from "../../components/Nav";
import { Collapsable } from "../../components/Sidebar";
import Tiles from "../../components/Tiles";
import Mobile from "../../components/Mobile";
import { withRelay } from "relay-nextjs";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { Grid, Box } from "@chakra-ui/react";
import { getClientEnvironment } from "../../lib/client_environment";

const HomeQuery = graphql`
  query Tag_HomeQuery($organization: Int, $tag: [Int]) {
    query {
      ...NavFragment_organization
      ...NavFragment_organizationUsers
      ...NavFragment_userConfig
      ...NavFragment_invite
      tile(organizationId: $organization, tagId: $tag) {
        ...TilesFragment_messages
        ...useSidebarFragment_messages
      }
      allCategories(condition: { organizationId: $organization }) {
        ...useSidebarFragment_categories
      }
    }
  }
`;

function Home({ preloadedQuery }) {
  const { query } = usePreloadedQuery(HomeQuery, preloadedQuery) as any;

  return (
    <>
      <Grid
        data-cy="grid"
        templateColumns="[nav] 4rem [sidebar] 2fr [content] 7fr"
        bg={"background.50"}
        color={"text.600"}
        minHeight="100vh"
        d={["none", "none", "none", "grid", "grid"]}
      >
        <Nav query={query} />
        <Box gridColumn="sidebar" maxHeight="99vh" overflowY="scroll">
          <Collapsable {...{ query }} />
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
          <Tiles query={(query as any).tile} />
        </Box>
      </Grid>
      <Box d={["inherit", "inherit", "inherit", "none", "none"]}>
        <Mobile query={query} />
      </Box>
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
      "../../lib/server_environment"
    );
    return createServerEnvironment(token);
  },
  variablesFromContext: (ctx) => {
    return {
      ...ctx.query,
      ...{
        tag: (ctx.query.tag as string).split("&").map(parseInt),
        organization: parseInt(ctx.query.organization as string),
      },
    };
  },
});

// needs to move in SSG, getServerSideProps
/*if (!organization) {
        // if user config exists, use as default organization. If not, use first row in organization query
        if (userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization > 0) {
            focusOrganization(userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization);
        } else {
            focusOrganization(organizationUsers.allOrganizationUsers?.edges[0]?.node?.organizationByOrganizationId.rowId);
        }
    }*/
