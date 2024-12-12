import { Footer, Header } from '@monorepo-tools/website/ui-commons';
import {
  Conclusion,
  Introduction,
  MonolithCallout,
  MonorepoFeatures,
  MonorepoFeaturesOverview,
  Resources,
  ToolsReview,
  ToolsSupportCallout,
  WhatIsAMonorepo,
  WhyAMonorepo,
} from '@monorepo-tools/website/ui-home';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { AnnouncementBanner } from '@monorepo-tools/website/ui-conf';

export function Index() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Monorepo Explained"
        description="Everything you need to know about monorepos, and the tools to build them."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
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
          handle: '@NxDevTools',
          site: '@monorepotools',
          cardType: 'summary_large_image',
        }}
      />
      <AnnouncementBanner />
      <Header />

      <main>
        <Introduction />

        <WhatIsAMonorepo />

        <MonolithCallout />

        <WhyAMonorepo />

        <MonorepoFeaturesOverview />

        <ToolsSupportCallout />

        <MonorepoFeatures />

        <Conclusion />

        <div>
          <ToolsReview />
        </div>

        <Resources />
      </main>

      <Footer />
    </>
  );
}

export default Index;
