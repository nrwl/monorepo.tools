import {
  AiConfSpeakerPage,
  SPEAKERS,
  Speaker,
} from '@monorepo-tools/website/ui-conf';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

export function SpeakerPage({ speaker }: { speaker: Speaker }) {
  const router = useRouter();
  const title = `${speaker.name} · AI ❤️ Monorepos · Conf 2026`;
  const description = speaker.talkTitle
    ? `${speaker.name} — "${speaker.talkTitle}". ${speaker.bio}`
    : `${speaker.name}, ${speaker.role} at ${speaker.org}. ${speaker.bio}`;
  const image = `https://monorepo.tools/images/conf/og/${speaker.id}.png`;

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
      <AiConfSpeakerPage speaker={speaker} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SPEAKERS.map((s) => ({ params: { id: s.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const speaker = SPEAKERS.find((s) => s.id === params?.id);
  if (!speaker) return { notFound: true };
  return { props: { speaker } };
};

export default SpeakerPage;
