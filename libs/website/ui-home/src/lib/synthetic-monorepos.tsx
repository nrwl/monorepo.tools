import { LinkIcon } from '@heroicons/react/24/outline';
import { SyntheticMonorepoAnimation } from '@monorepo-tools/website/ui-synthetic-monorepos';

export function SyntheticMonorepos(): JSX.Element {
  return (
    <div
      id="synthetic-monorepos"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Synthetic Monorepos
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#synthetic-monorepos"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Consolidating all your repos into one isn&rsquo;t always feasible.
            Synthetic monorepos give you monorepo-level intelligence across
            existing repositories without moving code.
          </p>
        </header>

        <article className="relative mx-auto mt-12 max-w-lg lg:mt-16 lg:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                A synthetic monorepo{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  connects separate repositories into a unified dependency graph
                </mark>{' '}
                without moving any code. Which repo depends on which, what a
                change affects downstream, how projects relate across teams:
                all of that becomes visible automatically.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                <strong>Platform engineers</strong> get conformance checking and
                impact analysis across boundaries.{' '}
                <strong>AI agents</strong> get a map of how repos relate, so
                they can reason and coordinate changes across the whole org
                instead of one repo at a time.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                <a
                  href="/synthetic-monorepos"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Read the deep dive &rarr;
                </a>
              </p>
            </div>
            <div className="hidden md:block">
              <SyntheticMonorepoAnimation />
            </div>
          </div>
        </article>

        {/* Pull quote */}
        <blockquote className="mx-auto mt-12 max-w-3xl border-l-4 border-yellow-500 py-2 pl-6 lg:mt-16">
          <p className="text-xl font-medium italic text-gray-800 dark:text-gray-200">
            A synthetic monorepo doesn&rsquo;t tear down the walls between
            repos. It creates tunnels through them, giving humans and AI agents
            the visibility to effectively work across boundaries.
          </p>
        </blockquote>

      </div>
    </div>
  );
}
