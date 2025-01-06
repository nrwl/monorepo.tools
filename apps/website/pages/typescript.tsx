import { Footer, Header } from '@monorepo-tools/website/ui-commons';
import { Introduction, PathAliases, ProjectStructure, TypeReferences, Workspaces } from '@monorepo-tools/website/ui-typescript';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Monorepo Explained | TypeScript"
        description="Everything you need to know about TypeScript monorepos."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Monorepo Explained',
          description:
            'Everything you need to know about TypeScript monorepos.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Everything you need to know about TypeScript monorepos.',
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
      {/* <Header /> */}

      <main>
        <Introduction />
        <ProjectStructure/>
        <PathAliases/>
        <Workspaces/>
        <TypeReferences/>


        <div>{/* <ToolsReview /> */}</div>

      </main>

      <Footer />
    </>
  );
}

export default Index;
