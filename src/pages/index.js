import MainWrapper from "../components/MainWrapper";
import { withRelay } from 'relay-nextjs';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';


// The $uuid variable is injected automatically from the route.
const HomeQuery = graphql`
  query pages_HomeQuery {
    ...MainWrapperFragment_messages
  }
`;

function Home({ preloadedQuery }) {

  const messages = usePreloadedQuery(HomeQuery, preloadedQuery);

  return (
    <MainWrapper className="mainWrapper" messages={messages} />
  )
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

    return { token: ctx.req.cookies['next-auth.session-token'] };
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