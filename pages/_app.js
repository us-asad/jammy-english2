import { useEffect } from "react";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import Aos from "aos";
import ScrollToTop from "react-scroll-to-top";
import 'react-multi-carousel/lib/styles.css';
import "aos/dist/aos.css";
import "styles/globals.css";

const progress = new ProgressBar({
  size: 4,
  color: "#fff",
  className: "z-90",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


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
