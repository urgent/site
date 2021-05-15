import "../../styles/globals.css";
import "../../styles/mainWrapper.css";
import "../../styles/mssgBoard.css";
import "../../styles/sidebar.css";
import "../../styles/catBox.css";
import "../../styles/Nav.css";
import { SmoomsProvider } from "../utils/SmoomsState";
import Link from "next/link";
import { Provider } from 'next-auth/client'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app';
import { getClientEnvironment } from '../lib/client_environment';

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
          <Component {...pageProps} {...relayProps} />
        </RelayEnvironmentProvider>
      </Provider>
    </SmoomsProvider>
  );
}

export default MyApp;