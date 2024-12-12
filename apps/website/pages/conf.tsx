import {
  CodeOfConduct,
  GetInvolved,
  Header,
  Intro,
  Tickets,
  Speakers,
  Location,
  Sponsors,
} from '@monorepo-tools/website/ui-conf';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  return (
    <div className="selection:bg-mw-green">
      <NextSeo
        title="Monorepo World 2024"
        description="Monorepo World is the ultimate conference where platform architects and tool builders come together to advance the state of software development. Join us and share ideas to make development faster, more scalable, and more collaborative."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Monorepo World 2024',
          description:
            'Monorepo World is the ultimate conference where platform architects and tool builders come together to advance the state of software development. Join us and share ideas to make development faster, more scalable, and more collaborative.',
          images: [
            {
              url: 'https://monorepo.tools/images/conf/og-monorepo-world-24.jpg',
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
      <Header />

      <main>
        <Intro />

        <Tickets />

        <Location />

        <Speakers />

        <GetInvolved />

        <Sponsors />

        <CodeOfConduct />
      </main>
    </div>
  );
}

export default Index;
