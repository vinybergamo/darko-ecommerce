import Layout from "@common/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import Theme from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
