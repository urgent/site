import { Provider } from 'next-auth/client'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app';
import { getClientEnvironment } from '../lib/client_environment';
import { ChakraProvider, Grid } from "@chakra-ui/react";
import { theme } from "../components/theme";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment(),
});

function MyApp({ Component, pageProps }) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv;

  return (
    <Provider session={pageProps.session}>
      <RelayEnvironmentProvider environment={env}>
        <ChakraProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
            <Grid
              data-cy="grid"
              templateColumns="[nav] 4rem [sidebar] 2fr [content] 7fr"
              bg={"background.50"}
              color={"text.600"}
              minHeight="100vh"
            >
              <Component {...pageProps} {...relayProps} />
            </Grid>
          </DndProvider>
        </ChakraProvider>
      </RelayEnvironmentProvider>
    </Provider>
  );
}

export default MyApp;