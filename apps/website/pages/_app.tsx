import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://monorepo.tools/images/monorepo.png"
        />
        <meta name="twitter:site" content="@monorepotools" />
        <meta name="twitter:creator" content="@nrwl_io" />
        <meta
          name="description"
          content="Everything you need to know about monorepos, and the tools to build them."
        />
        <meta property="og:title" content="Monorepo explained" />
        <meta
          property="og:description"
          content="Everything you need to know about monorepos, and the tools to build them."
        />
        <meta property="og:url" content="https://monorepo.tools" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://monorepo.tools/images/monorepo.png"
        />
        <meta property="og:image:alt" content="monorepo official logo" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:site_name" content="monorepo.tools" />
        <title>Monorepo explained</title>
        <meta
          name="description"
          content="Everything you need to know about monorepos, and the tools to build them."
        />
      </Head>
      <main className="monorepo.tools bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-display">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
