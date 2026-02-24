import { LinkIcon } from '@heroicons/react/24/outline';

export function Conclusion(): JSX.Element {
  return (
    <article
      data-test-id="your-codebase-determines-your-ai-ceiling"
      id="your-codebase-determines-your-ai-ceiling"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <h1 className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # Your Codebase Determines Your AI Ceiling
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#your-codebase-determines-your-ai-ceiling"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </h1>
      </div>
      <div className="relative mx-auto mt-16 max-w-lg lg:mt-24 lg:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              AI agents are only as effective as the{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                context they can access
              </mark>
              . An agent working inside a single repo with no visibility into
              related projects, no dependency graph, and no way to run
              cross-project tasks will produce isolated, often wrong results. It
              hits a ceiling quickly.
            </p>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
              The difference compounds.{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                Every feature, refactoring, and migration
              </mark>{' '}
              benefits from that structural advantage. If your teams are adopting
              AI tooling but your codebase isn&rsquo;t set up for it,
              you&rsquo;re leaving most of the value on the table.
            </p>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
              A monorepo removes that ceiling. If you&rsquo;re not ready for a
              full consolidation, a{' '}
              <a
                href="#synthetic-monorepos"
                className="border-b border-yellow-500 font-medium text-gray-800 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-800"
              >
                synthetic monorepo
              </a>{' '}
              can be an incremental starting point.
            </p>
          </div>

          {/* CTA */}
          <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
            <div className="px-6 pt-10 pb-12 text-center sm:px-16 sm:pt-16 lg:py-16 xl:py-20 xl:px-20">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                <a
                  href="https://nx.dev"
                  className="border-b border-yellow-500 font-medium text-gray-800 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-800"
                >
                  Nx
                </a>{' '}
                helps you get your codebase AI-ready, whether you&rsquo;re
                starting from a monorepo, polyrepo, or somewhere in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
