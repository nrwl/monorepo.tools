import { LinkIcon } from '@heroicons/react/24/outline';
import {
  CodeBracketIcon,
  CubeIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  BeakerIcon,
  EyeIcon,
  CogIcon,
  ChartBarIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline';

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

        <div className="mx-auto mt-24 max-w-2xl">
          <h1
            id="powerful-agentic-ai-workflows"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            Monorepos Make AI More Powerful
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#polyrepo-concept"
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
            , enabling better dependency tracing and cross-module understanding.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mx-auto mt-8 w-2/3 rounded-lg shadow-lg"
            src="/images/ai/ai-operating-efficiently.avif"
            alt="AI operating efficiently in monorepos"
          />
          <p className="mt-8 text-xl text-gray-700 dark:text-gray-300">
            But it's not just about context. Having all related projects in the
            same place enables{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              powerful agentic AI workflows
            </mark>{' '}
            that are nearly impossible across distributed repositories. AI
            agents can perform atomic cross-project changes as single pull
            requests with full testing and review.
          </p>
        </div>

        {/* How AI Makes Monorepos Easier */}
        <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
          {/* Header and image layout */}
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:order-1">
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

            <div className="mt-8 lg:order-2 lg:mt-0">
              <img
                className="mx-auto w-full rounded-lg shadow-lg"
                src="/images/ai/ai-supporting-monorepos.avif"
                alt="AI supporting and enhancing monorepo development workflows"
              />
            </div>
          </div>

          {/* Features in 2x2 grid */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            <div className="relative">
              <dt>
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <ArrowsRightLeftIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-left text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Agentic Refactoring
                </p>
              </dt>
              <dd className="ml-16 mt-2 text-left text-base text-gray-700 dark:text-gray-300">
                AI can perform maintenance refactorings like removing dead code,
                updating deprecated patterns, and cleaning up tech debt that
                otherwise gets left behind and accumulates over time.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <BeakerIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-left text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Codebase Exploration
                </p>
              </dt>
              <dd className="ml-16 mt-2 text-left text-base text-gray-700 dark:text-gray-300">
                AI can instantly map dependencies and guide you to the right
                files when integrating frontend components with backend APIs
                across different projects.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-left text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Impact Analysis
                </p>
              </dt>
              <dd className="ml-16 mt-2 text-left text-base text-gray-700 dark:text-gray-300">
                AI can analyze a shared library update to predict which teams
                will be affected and involve the right code owners to discuss
                and plan out changes.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-left text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Monorepo Tooling Maintenance
                </p>
              </dt>
              <dd className="ml-16 mt-2 text-left text-base text-gray-700 dark:text-gray-300">
                AI can automate tooling modernization across projects, updating
                configurations and handling dependency conflicts when upgrading
                build tools, linters, or testing frameworks.
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  );
}
