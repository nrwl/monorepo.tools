import { Footer, Navigation } from '@monorepo-tools/website/ui-commons';
import {
  MonorepoFeatures,
  ToolsReview,
} from '@monorepo-tools/website/ui-compare';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Compare() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Compare Monorepo Tools | Monorepo Tools"
        description="Choosing a monorepo tool? Compare Bazel, Gradle, Lage, Lerna, moon, Nx, Pants, Rush, and Turborepo across features like caching, task orchestration, and AI support."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Compare Monorepo Tools',
          description:
            'Choosing a monorepo tool? Compare Bazel, Gradle, Lage, Lerna, moon, Nx, Pants, Rush, and Turborepo across features like caching, task orchestration, and AI support.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Compare Monorepo Tools - Feature comparison across all major tools',
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
      <Navigation />

      <main>
        <ToolsReview />

        <MonorepoFeatures />
      </main>

      <Footer />
    </>
  );
}

export default Compare;
