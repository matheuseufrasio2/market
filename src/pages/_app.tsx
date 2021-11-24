import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Market</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta name="description" content="A MarketShop for buy some clothes" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
