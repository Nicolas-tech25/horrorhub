import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="HorrorHub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HorrorHub" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/png"
          sizes="488x344"
        />
        <meta name="author" content="Nicolas O. Amorim" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
