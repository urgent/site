import "../../styles/globals.css";
import "../../styles/mainWrapper.css";
import "../../styles/mssgBoard.css";
import "../../styles/sidebar.css";
import "../../styles/catBox.css";
import "../../configureAmplify";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/profile">
          <span>Profile</span>
        </Link>
      </nav>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
