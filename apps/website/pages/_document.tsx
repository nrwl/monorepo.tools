import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className="scroll-smooth selection:bg-yellow-500 selection:text-gray-800"
      lang="en"
    >
      <Head>
        <link rel="icon" href="/images/browser/icon.svg" type="image/svg+xml" />
        <link rel="favicon" href="/images/browser/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/browser/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/browser/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/browser/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/browser/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
