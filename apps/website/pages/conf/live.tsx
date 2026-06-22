import { AiConfLivePage } from '@monorepo-tools/website/ui-conf';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

export function LivePage() {
  const router = useRouter();
  const title = 'Live · AI ❤️ Monorepos Conf 2026';
  const description =
    'Watch AI ❤️ Monorepos Conf 2026 live. A half-day virtual conference on agentic AI in monorepos, June 23, 2026.';
  const image = 'https://monorepo.tools/images/conf/og/conf.png?v=20260610';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title,
          description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: 'AI ❤️ Monorepos Conf 2026',
              type: 'image/png',
            },
          ],
          site_name: 'monorepo.tools',
        }}
        twitter={{
          handle: '@NxDevTools',
          site: '@monorepotools',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta key="twitter-title" name="twitter:title" content={title} />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={description}
        />
        <meta key="twitter-image" name="twitter:image" content={image} />
        <meta
          key="twitter-image-alt"
          name="twitter:image:alt"
          content="AI ❤️ Monorepos Conf 2026"
        />
      </Head>
      <AiConfLivePage />
    </>
  );
}

export default LivePage;
