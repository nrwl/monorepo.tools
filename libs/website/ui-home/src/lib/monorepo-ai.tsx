import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/24/outline';
import { ArrowLongRightIcon, PlayIcon } from '@heroicons/react/24/solid';

const points = [
  {
    number: '01',
    title: 'Full visibility',
    polyrepo:
      'An AI agent can only see the code inside the current repository. Everything beyond that boundary has to come from documentation, published type definitions, or manual explanations that may be incomplete or out of date.',
    monorepo: (
      <>
        The agent reads the <strong>actual implementation</strong>: real API
        handlers, real data types, real shared libraries. Plans are higher
        quality because they are{' '}
        <strong>based on the code itself</strong>.
      </>
    ),
  },
  {
    number: '02',
    title: 'Context flows freely',
    polyrepo:
      'When work spans multiple repos, the human becomes the bridge. You describe the API shape, point the agent to docs, explain what the other service expects. Context gets lost at every repo boundary.',
    monorepo: (
      <>
        No walls between projects. The agent navigates from{' '}
        <strong>frontend to backend to shared libraries</strong> directly.
        Context is discovered, not transferred.{' '}
        <strong>No manual handoff</strong> needed.
      </>
    ),
  },
  {
    number: '03',
    title: 'Cross-cutting work, finally',
    polyrepo:
      'Refactoring, migrations, dependency upgrades: the tedious, error-prone work that teams keep postponing. AI agents are perfect for it, but repo boundaries limit what they can see and change. Cross-repo changes stay manual, slow, and fragile.',
    monorepo: (
      <>
        The agent has full access to{' '}
        <strong>apply changes across projects</strong>, run affected tests,
        and submit everything as <strong>one PR</strong>. The work that was
        always delayed because it was cumbersome becomes routine.
      </>
    ),
  },
  {
    number: '04',
    title: 'Instant feedback loops',
    polyrepo:
      'Breaking changes surface late. You publish to staging, wait for the downstream repo to update, and discover the failure in a new session with no context of what changed or why. The feedback cycle is slow and disconnected.',
    monorepo: (
      <>
        Change the backend and <strong>frontend tests break immediately</strong>.
        The agent knows why, because it made the change. It proposes a fix:{' '}
        <strong>update the frontend or make the API non-breaking</strong>.
        The whole loop happens in one session, with full context.
      </>
    ),
  },
];

function YouTubeEmbed({
  videoId,
  thumbnailSrc,
  title,
}: {
  videoId: string;
  thumbnailSrc: string;
  title: string;
}): JSX.Element {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group/play relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailSrc}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover/play:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover/play:bg-black/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover/play:scale-110 sm:h-20 sm:w-20">
          <PlayIcon className="ml-1 h-8 w-8 text-gray-900 sm:h-10 sm:w-10" />
        </div>
      </div>
    </button>
  );
}

export function MonorepoAI(): JSX.Element {
  return (
    <div
      id="monorepo-ai"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Monorepos Amplify AI Agents
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#monorepo-ai"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          The architecture your AI agents are missing.
        </p>
      </div>

      <article className="relative mx-auto mt-24 max-w-5xl lg:mt-36">
        <div className="space-y-20">
          {points.map((point) => (
            <section key={point.number} className="group relative">
              {/* Number + Title */}
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="shrink-0 text-5xl font-black tabular-nums text-slate-200 transition-colors group-hover:text-yellow-500 dark:text-slate-700 dark:group-hover:text-yellow-500 sm:text-6xl">
                  {point.number}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                  {point.title}
                </h2>
              </div>

              {/* Polyrepo → Monorepo transition */}
              <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
                {/* Polyrepo - muted/faded */}
                <div className="rounded-lg border border-dashed border-slate-300 bg-slate-100/50 px-5 py-4 dark:border-slate-600 dark:bg-slate-900/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Polyrepo
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {point.polyrepo}
                  </p>
                </div>

                <div className="hidden items-center self-center lg:flex">
                  <ArrowLongRightIcon className="h-8 w-8 text-green-400 dark:text-green-500" />
                </div>

                {/* Monorepo - vibrant/bright */}
                <div className="rounded-lg border border-green-200 bg-green-50/50 px-5 py-4 dark:border-green-900/50 dark:bg-green-950/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                    Monorepo
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-gray-800 dark:text-gray-200">
                    {point.monorepo}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Video embed */}
        <div className="mt-24">
          <p className="mb-6 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
            See it in action: monorepo vs polyrepo with AI agents
          </p>
          <YouTubeEmbed
            videoId="alIto5fqrfk"
            thumbnailSrc="/images/ai/poly-vs-monorepo-ai.png"
            title="Monorepo vs Polyrepo with AI Agents"
          />
        </div>
      </article>
    </div>
  );
}
