import { AiConfPageSplit } from '@monorepo-tools/website/ui-conf';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="AI ❤️ Monorepos · Conf 2026"
        description="A free half-day virtual conference for engineers working at the intersection of monorepos, CI, and agentic AI. June 23, 2026."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'AI ❤️ Monorepos · Conf 2026',
          description:
            'A free half-day virtual conference for engineers working at the intersection of monorepos, CI, and agentic AI. June 23, 2026.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'AI ❤️ Monorepos · Conf 2026',
              type: 'image/jpg',
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
      <AiConfPageSplit />
    </>
  );
}

export default Index;
