import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import { ThemeContextProvider } from "../hooks/theme-context";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout? : (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) : ReactNode => page)
  return (
    <ThemeContextProvider>
      {/* <Layout> */}
        {getLayout(<Component {...pageProps} />)}
      {/* </Layout> */}
    </ThemeContextProvider>
  );
}

export default MyApp;
