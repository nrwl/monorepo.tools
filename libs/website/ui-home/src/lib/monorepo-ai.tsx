import { LinkIcon } from '@heroicons/react/24/outline';

const points = [
  {
    number: '01',
    title: 'Full visibility, not documentation',
    description:
      'In a polyrepo, an AI agent can only see the code inside the current repository. Everything beyond that boundary has to come from documentation, published type definitions, or manual explanations. In a monorepo, the agent reads the actual implementation: real API handlers, real data types, real shared libraries. Plans are higher quality because they are based on the code itself, not a description of it that may be incomplete or out of date.',
  },
  {
    number: '02',
    title: 'Context transfers automatically',
    description:
      'When work spans multiple repos, the human becomes responsible for transferring context at every boundary. You describe the API shape, point the agent to docs, explain what the other service expects. In a monorepo, the agent navigates from frontend to backend to shared libraries directly. The context is just there. No manual knowledge transfer, no risk of information getting lost in the handoff.',
  },
  {
    number: '03',
    title: 'AI-suited work needs full access',
    description:
      'Refactoring, migrations, impact analysis, dependency upgrades across consumers: these are tasks that require ingesting a lot of code and making coordinated changes. They are also tedious, error-prone work for humans, exactly where AI agents add the most value. But repo boundaries limit what the agent can see and change. In a monorepo, the agent has full access to apply the change, run affected tests, and submit it as one PR.',
  },
];

export function MonorepoAI(): JSX.Element {
  return (
    <div
      id="monorepo-ai"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # Monorepos Amplify AI Agents
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

      <article className="relative mx-auto mt-24 max-w-4xl lg:mt-36">
        <div className="space-y-16">
          {points.map((point) => (
            <section key={point.number} className="group relative">
              <div className="flex items-start gap-6 sm:gap-8">
                <span className="shrink-0 text-5xl font-black tabular-nums text-slate-200 transition-colors group-hover:text-yellow-500 dark:text-slate-700 dark:group-hover:text-yellow-500 sm:text-6xl">
                  {point.number}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                    {point.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    {point.description}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
