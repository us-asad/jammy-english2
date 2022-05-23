import 'react-multi-carousel/lib/styles.css';
import "styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <main className="overflow-x-hidden min-w-screen min-h-screen selection:bg-main selection:text-white">
      <Component {...pageProps} />
    </main>
  );
}

export default App;
