import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { sendPageViewEvent } from '@monorepo-tools/website/feature-analytics';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const gMeasurementId = 'G-DQ2F7L3B1L';

  useEffect(() => {
    const handleRouteChange = (url: URL) =>
      sendPageViewEvent({ id: gMeasurementId, path: url.toString() });
    router.events.on('routeChangeStart', (url) => handleRouteChange(url));
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  return (
    <>
      <DefaultSeo
        title="Monorepo Explained"
        description="Everything you need to know about monorepos, and the tools to build them."
        openGraph={{
          url: 'https://monorepo.tools' + router.asPath,
          title: 'Monorepo Explained',
          description:
            'Everything you need to know about monorepos, and the tools to build them.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Everything you need to know about monorepos, and the tools to build them.',
              type: 'image/jpg',
            },
          ],
          site_name: 'monorepo.tools',
        }}
        twitter={{
          handle: '@nrwl_io',
          site: '@monorepotools',
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider attribute="class">
        <main className="monorepo.tools font-display bg-slate-50 text-gray-700 antialiased dark:bg-slate-800 dark:text-gray-300">
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
