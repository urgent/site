import "../../styles/globals.css";
import "../../styles/mainWrapper.css";
import "../../styles/mssgBoard.css";
import "../../styles/sidebar.css";
import "../../styles/catBox.css";
import "../../styles/Nav.css";
import "../../configureAmplify";
import { SmoomsProvider } from "../utils/SmoomsState";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <SmoomsProvider>
      <Component {...pageProps} />
    </SmoomsProvider>
  );
}

export default MyApp;
