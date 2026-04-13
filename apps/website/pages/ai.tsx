import { Footer, Navigation } from '@monorepo-tools/website/ui-commons';
import {
  Introduction,
  MonorepoAIAdvantages,
  HowToolsEnableAI,
  FastFeedback,
  CIPressure,
  AINative,
  AIToolsComparison,
  NoMonorepoFallback,
  // Resources,
} from '@monorepo-tools/website/ui-ai';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Monorepos & AI | Monorepo Tools"
        description="Discover how AI and monorepos elevate each other: unified context enables powerful agentic workflows, while smart integration via project graphs and MCP makes AI more effective."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Monorepos & AI',
          description:
            'Discover how AI and monorepos elevate each other: unified context enables powerful agentic workflows, while smart integration via project graphs and MCP makes AI more effective.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Monorepos & AI - How they work together for better development',
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

        <MonorepoAIAdvantages />

        <HowToolsEnableAI />

        <FastFeedback />

        <CIPressure />

        <AINative />

        <AIToolsComparison />

        <NoMonorepoFallback />

        {/* <Resources /> */}
      </main>

      <Footer />
    </>
  );
}

export default Index;
