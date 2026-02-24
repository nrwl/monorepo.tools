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
                without moving any code. Which repo depends on which, what a
                change affects downstream, how projects relate across teams:
                all of that becomes visible automatically.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                <strong>For platform engineers and architects</strong>, no more
                manually cataloging and cross-referencing repos. Tooling on top
                of the graph enables conformance checking, impact analysis, and
                coordinated changes across boundaries.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                <strong>For AI agents</strong>, the graph exposes metadata that
                lets them see beyond individual repo boundaries. Instead of
                operating at a local maximum within a single repo, agents can
                read cross-repo relationships and perform coordinated changes
                across polyrepos.
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
            A synthetic monorepo doesn&rsquo;t tear down the walls between
            repos. It creates tunnels through them, giving humans and AI agents
            the visibility to effectively work across boundaries.
          </p>
        </blockquote>

        {/* Gradual adoption callout */}
        <div className="mx-auto mt-12 max-w-7xl lg:mt-20">
          <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
            <div className="px-6 pt-10 pb-12 text-center sm:px-16 sm:pt-16 lg:py-16 xl:py-20 xl:px-20">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                An entry point, not an endpoint
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Start getting monorepo benefits without changing how teams work.
                From there, deepen integration where it makes sense: start
                synthetic, migrate gradually, move at your own pace.{' '}
                <a
                  href="https://nx.dev/nx-cloud"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Nx
                </a>{' '}
                supports{' '}
                <a
                  href="https://nx.dev/docs/concepts/synthetic-monorepos"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  synthetic monorepos
                </a>{' '}
                out of the box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
