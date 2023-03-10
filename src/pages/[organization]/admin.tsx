import React from "react";
import Nav from "../../components/Nav";
import { OrganizationMenu } from "../../components/OrganizationMenu";
import { withRelay } from "relay-nextjs";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { Grid, Box } from "@chakra-ui/react";
import { getClientEnvironment } from "../../lib/client_environment";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const OrganizationQuery = graphql`
  query admin_Query($organization: Int) {
    query {
      ...OrganizationMenuFragment_organization
      ...OrganizationMenuFragment_organizationUsers
        @arguments(organization: $organization)
      ...OrganizationMenuFragment_userConfig
      ...OrganizationMenuFragment_invite @arguments(organization: $organization)
      ...NavFragment_organization @arguments(organization: $organization)
      ...MessageFragment_organization @arguments(organization: $organization)
      ...CategoryFragment_organization @arguments(organization: $organization)
    }
  }
`;

function Organization(props) {
  const { preloadedQuery, CSN } = props;
  let session;
  if (CSN) {
    const { data, status } = useSession();
    session = data;
  } else {
    session = props.session;
  }
  const { query } = usePreloadedQuery(OrganizationQuery, preloadedQuery) as any;
  const router = useRouter();
  const { organization, tag } = router.query;
  const path = router.pathname.split("/");

  return (
    <>
      <Grid
        data-cy="grid"
        templateColumns="[nav] 4rem [content] 9fr"
        bg={"background.50"}
        color={"text.600"}
        minHeight="100vh"
        d={["none", "none", "none", "grid", "grid"]}
      >
        <Nav {...{ query, organization, path, session }} />
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
          <OrganizationMenu {...{ query, organization }} />
        </Box>
      </Grid>
    </>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
interface NextCtx {
  cookies: any;
}

export default withRelay(Organization, OrganizationQuery, {
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
      organization: parseInt(ctx.query.organization as string),
    };
  },
});
