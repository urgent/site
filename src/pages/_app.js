import { SmoomsProvider } from "../utils/SmoomsState";
import { Provider } from 'next-auth/client'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app';
import { getClientEnvironment } from '../lib/client_environment';
import { ChakraProvider, Grid } from "@chakra-ui/react";
import { theme } from "../components/theme";

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment(),
});

function MyApp({ Component, pageProps }) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv;

  return (
    <SmoomsProvider>
      <Provider session={pageProps.session}>
        <RelayEnvironmentProvider environment={env}>
          <ChakraProvider theme={theme}>
            <Grid
              data-cy="grid"
              templateColumns="[sidebar] 1fr [content] 3fr [info] 1fr"
              templateRows="[nav] 3rem [body] auto [footer] 600px"
              bg={"background.50"}
              color={"text.600"}
              minHeight="100vh"
            >
              <Component {...pageProps} {...relayProps} />
            </Grid>
          </ChakraProvider>
        </RelayEnvironmentProvider>
      </Provider>
    </SmoomsProvider>
  );
}

export default MyApp;