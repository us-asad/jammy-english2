import { useEffect } from "react";
import Aos from "aos";
import ScrollToTop from "react-scroll-to-top";
import 'react-multi-carousel/lib/styles.css';
import "aos/dist/aos.css";
import "styles/globals.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  },[]);

  return (
    <main className="overflow-x-hidden min-w-screen min-h-screen selection:bg-main selection:text-white">
      <Component {...pageProps} />
      <ScrollToTop smooth color="#525FE1" />
    </main>
  );
}

export default App;
