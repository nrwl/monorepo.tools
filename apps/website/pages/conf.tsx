import { AiConfPageBadge } from '@monorepo-tools/website/ui-conf';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();
  const title = 'AI ❤️ Monorepos · Conf 2026';
  const description =
    'A free half-day virtual conference for engineers working at the intersection of monorepos, CI, and agentic AI. June 23, 2026.';
  const image = 'https://monorepo.tools/images/conf/og/conf.png';

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
              alt: title,
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
        <meta key="twitter-image-alt" name="twitter:image:alt" content={title} />
      </Head>
      <AiConfPageBadge />
    </>
  );
}

export default Index;
