import type { AppProps } from "next/app";
// import "antd/dist/antd.css";
import GlobalStyle from "@/styles/global";
import MainLayout from "@/layouts/MainLayout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
