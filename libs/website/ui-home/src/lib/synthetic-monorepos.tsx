import { LinkIcon } from '@heroicons/react/24/outline';

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
                without moving any code. Your monorepo tool discovers cross-repo
                relationships and gives developers and AI agents the visibility
                and context they need to work across repository boundaries.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Which repo depends on which, what a change affects downstream,
                how projects connect across teams. That information becomes
                accessible in one place, so humans and AI agents can plan and
                execute cross-repo work in a single session.
              </p>
            </div>
            <div>
              <img
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover"
                src="/images/synthetic-monorepo.svg"
                alt="synthetic monorepo diagram showing multiple repositories connected into a unified dependency graph"
              />
            </div>
          </div>
        </article>

        {/* Pull quote */}
        <blockquote className="mx-auto mt-12 max-w-3xl border-l-4 border-yellow-500 py-2 pl-6 lg:mt-16">
          <p className="text-xl font-medium italic text-gray-800 dark:text-gray-200">
            Repository boundaries create walls. A synthetic monorepo
            doesn&rsquo;t tear them down as a monorepo would, but it provides
            tunnels through them with tooling. That visibility is what humans
            and AI agents need to work efficiently across projects.
          </p>
        </blockquote>

        {/* Gradual adoption */}
        <article className="relative mt-12 lg:mt-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl sm:leading-relaxed">
              An entry point, not an endpoint
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              A synthetic monorepo gives you immediate cross-repo visibility
              without requiring any team to change how they work. From there,
              organizations can deepen integration where it makes sense: one
              team, one repo at a time. Start synthetic, migrate gradually, move
              at your own pace.
            </p>
          </div>
        </article>

        {/* Subtle Nx mention */}
        <div className="mx-auto mt-16 max-w-3xl lg:mt-20">
          <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
            <div className="px-6 py-8 text-center sm:px-16">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <a
                  href="https://nx.dev/nx-cloud"
                  className="border-b border-yellow-500 font-medium text-gray-800 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-800"
                >
                  Nx
                </a>{' '}
                supports synthetic monorepos out of the box, connecting your
                existing repositories through Nx Cloud. See{' '}
                <a
                  href="/compare"
                  className="border-b border-yellow-500 font-medium text-gray-800 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-800"
                >
                  /compare
                </a>{' '}
                for a detailed tool comparison.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
