import "styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <main className="overflow-x-hidden min-w-screen min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}

export default App;
