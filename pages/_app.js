import { useEffect } from "react";
import Aos from "aos";
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
    </main>
  );
}

export default App;
