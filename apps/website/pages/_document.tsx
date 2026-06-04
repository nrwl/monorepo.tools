import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className="scroll-smooth selection:bg-yellow-500 selection:text-gray-800"
      lang="en"
    >
      <Head>
        {/* Capture conf UTM params into sessionStorage BEFORE React hydrates.
            On the static export, Next.js normalizes the URL on hydration and
            drops the query string, so a useEffect would see an empty
            location.search. This inline script runs at parse time, while the
            query is still present. Keep the allowlist + storage key in sync
            with libs/website/ui-conf/src/lib/ai/use-register-url.ts. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(location.pathname.indexOf('/conf')!==0)return;var sp=new URLSearchParams(location.search),out={};['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(function(k){var v=sp.get(k);if(v)out[k]=v;});if(Object.keys(out).length)sessionStorage.setItem('conf_utm',JSON.stringify(out));}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
