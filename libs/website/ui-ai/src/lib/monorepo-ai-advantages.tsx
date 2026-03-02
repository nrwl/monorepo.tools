import { LinkIcon } from '@heroicons/react/24/outline';
import { PolyrepoMonorepoAnimation } from './polyrepo-monorepo-animation';

const aiHelpsItems = [
  {
    title: 'Cross-cutting changes',
    detail:
      'Updating an API used by 40 projects, migrating a pattern, replacing a deprecated library. AI grinds through it, adapting each project to its specific usage.',
  },
  {
    title: 'Navigating unknown codebases',
    detail:
      'Large monorepos outgrow any individual\'s mental model. AI explores, explains, and connects the dots across areas you\'ve never touched.',
  },
  {
    title: 'Understanding blast radius',
    detail:
      'The project graph gives AI a map of every dependency. An agent queries it to find impacted projects, analyzes why they break, and produces a fix plan.',
  },
  {
    title: 'Cross-project debugging',
    detail:
      'A bug in app A, root cause in shared lib B. AI traces through actual dependency chains to find it. In polyrepos, this requires jumping between repos with no shared context.',
  },
  {
    title: 'Tech debt & tooling upgrades',
    detail:
      'Deterministic migrations handle the predictable parts. AI picks up where they leave off, fixing the edge cases that codemods can\'t handle.',
  },
  {
    title: 'Consolidating projects',
    detail:
      'Importing existing repos means aligning build configs, resolving dependency conflicts, and adapting to workspace conventions. AI automates the tedious adaptation work.',
  },
];

export function MonorepoAIAdvantages(): JSX.Element {
  return (
    <div
      id="monorepo-ai-advantages"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # AI and Monorepos Elevate Each Other
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-ai-advantages"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="relative mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h1
              id="powerful-agentic-ai-workflows"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Monorepos Make AI More Powerful
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#powerful-agentic-ai-workflows"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h1>
            <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
              Monorepos provide AI agents with a{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                unified workspace view
              </mark>
              , enabling better dependency tracing and cross-module
              understanding.
            </p>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
              There are{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                no walls between projects
              </mark>
              . The agent navigates from frontend to backend to shared libraries
              directly, working against the actual source code rather than
              relying on documentation and API specs that may be incomplete or
              out of date.
            </p>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
              This enables{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                powerful agentic AI workflows
              </mark>{' '}
              that are nearly impossible across distributed repositories. AI
              agents can perform atomic cross-project changes as single pull
              requests, get instant feedback when something breaks
              downstream, fix it in the same session, and iterate until CI is
              green. The whole loop happens with full context.
            </p>
          </div>

          <div className="mt-8 hidden md:block lg:mt-0">
            <PolyrepoMonorepoAnimation />
          </div>
        </div>

        {/* How AI Makes Monorepos Easier */}
        <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1
              id="ai-makes-monorepos-easier"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Use AI to Make Monorepos Easier
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-makes-monorepos-easier"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h1>
            <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
              Monorepos come with complexity costs that make people hesitant
              to adopt them. AI helps offset this complexity, making monorepo
              adoption much easier.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiHelpsItems.map((item, index) => (
              <div
                key={index}
                className="rounded-md border border-slate-200 bg-slate-100 p-5 dark:border-black dark:bg-slate-900"
              >
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
