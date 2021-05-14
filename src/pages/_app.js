import "../../styles/globals.css";
import "../../styles/mainWrapper.css";
import "../../styles/mssgBoard.css";
import "../../styles/sidebar.css";
import "../../styles/catBox.css";
import "../../styles/Nav.css";
import { SmoomsProvider } from "../utils/SmoomsState";
import Link from "next/link";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <SmoomsProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </SmoomsProvider>
  );
}

export default MyApp;
