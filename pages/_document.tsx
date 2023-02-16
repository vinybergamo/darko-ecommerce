import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Document() {
  const sheet = new ServerStyleSheet();
  const styleTags = sheet.getStyleElement();

  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Next.js + TypeScript + Styled Components"
        />
        <meta name="author" content="Your Name" />
        <meta
          name="keywords"
          content="Next.js, TypeScript, Styled Components"
        />
        <link rel="icon" href="/favicon.ico" />
        {styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
