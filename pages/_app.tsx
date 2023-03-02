import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import type { AppProps } from "next/app";
// import "antd/dist/antd.css";
import GlobalStyle from "@/styles/global";
import MainLayout from "@/layouts/MainLayout/MainLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <GlobalStyle />
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    </>
  );
}
