import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { sendPageViewEvent } from '@monorepo-tools/website/feature-analytics';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const gMeasurementId = 'G-DQ2F7L3B1L';
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleRouteChange = (url: URL) =>
      sendPageViewEvent({ id: gMeasurementId, path: url.toString() });
    router.events.on('routeChangeStart', (url) => handleRouteChange(url));
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  if (!mounted) return null;
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
          content="https://monorepo.tools/images/mono.png"
        />
        <meta property="og:image:alt" content="monorepo official logo" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="505" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content="monorepo.tools" />
        <title>Monorepo explained</title>
        <meta
          name="description"
          content="Everything you need to know about monorepos, and the tools to build them."
        />
        <link rel="icon" href="/images/browser/favicon-32x32.ico" sizes="32" />
        <link rel="icon" href="/images/browser/icon.svg" type="image/svg+xml" />
        <link
          rel="apple-touch-icon"
          href="/images/browser/apple-touch-icon.png"
        />
        <link rel="favicon" href="/images/browser/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <main className="monorepo.tools antialiased bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-display">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="gtag-script-url"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gMeasurementId}`}
      />
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${gMeasurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Hotjar Analytics */}
      <Script
        id="hotjar-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2793300,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    </>
  );
}

export default CustomApp;
