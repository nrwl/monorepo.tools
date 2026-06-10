import {
  AiConfSpeakerPage,
  SPEAKERS,
  MC,
  Speaker,
} from '@monorepo-tools/website/ui-conf';

// MC isn't in the speakers grid but still has a shareable speaker page.
const SPEAKER_PAGES: Speaker[] = [...SPEAKERS, MC];
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

export function SpeakerPage({ speaker }: { speaker: Speaker }) {
  const router = useRouter();
  const title = `${speaker.name} · AI ❤️ Monorepos · Conf 2026`;
  // The speaker name is already in the title (and on the card), so keep it out
  // of the description. Leading with the talk title means it survives the
  // platform's description truncation instead of being pushed off the end.
  const description = speaker.talkTitle
    ? `"${speaker.talkTitle}" — ${speaker.bio}`
    : `${speaker.role} at ${speaker.org}. ${speaker.bio}`;
  const image = `https://monorepo.tools/images/conf/og/${speaker.id}.png?v=20260604`;

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
              alt: speaker.name,
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
          content={speaker.name}
        />
      </Head>
      <AiConfSpeakerPage speaker={speaker} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SPEAKER_PAGES.map((s) => ({ params: { id: s.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const speaker = SPEAKER_PAGES.find((s) => s.id === params?.id);
  if (!speaker) return { notFound: true };
  return { props: { speaker } };
};

export default SpeakerPage;
