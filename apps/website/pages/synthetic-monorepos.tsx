import { Footer, Navigation } from '@monorepo-tools/website/ui-commons';
import {
  Introduction,
  PolyrepoReality,
  WhatSyntheticMonoreposProvide,
  HowItWorks,
  AIAgentsAcrossBoundaries,
  ClosingCTA,
} from '@monorepo-tools/website/ui-synthetic-monorepos';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function SyntheticMonoreposPage() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Synthetic Monorepos | Monorepo Tools"
        description="Synthetic monorepos connect separate repositories into a unified dependency graph, giving AI agents and platform teams monorepo-level intelligence without moving code."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Synthetic Monorepos',
          description:
            'Synthetic monorepos connect separate repositories into a unified dependency graph, giving AI agents and platform teams monorepo-level intelligence without moving code.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Synthetic Monorepos - Monorepo intelligence without moving code',
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
        <Introduction />

        <PolyrepoReality />

        <WhatSyntheticMonoreposProvide />

        <HowItWorks />

        <AIAgentsAcrossBoundaries />

        <ClosingCTA />
      </main>

      <Footer />
    </>
  );
}

export default SyntheticMonoreposPage;
