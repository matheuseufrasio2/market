import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "styles/global";
import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Market Shoes</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta name="description" content="A MarketShop for buy some clothes" />
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
