export function FeaturedWebinar(): JSX.Element {
  return (
    <div
      id="featured-webinar"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-yellow-600 dark:text-yellow-500">
              Featured Webinar
            </p>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
              Synthetic Monorepos: the Solution for Agentic Development Across
              Repository Boundaries
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              A walkthrough of how AI development tools amplify coordination
              overhead in multi-repo setups, and how synthetic monorepos
              eliminate cross-repository friction without a migration. Includes
              a preview of new platform features and a live Q&amp;A.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Juri Strumpflohner
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sr. Director of DX, Nx
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Victor Savkin
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Co-Founder &amp; CTO, Nx
                </p>
              </div>
            </div>

            <div className="mt-auto border-t border-slate-200 pt-5 dark:border-slate-700">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                April 8, 2026 · 1 hour
              </p>
              <div className="mt-3">
                <a
                  href="https://go.nx.dev/april2026-webinar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  Watch the recording
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-yellow-600 dark:text-yellow-500">
              Early Access
            </p>
            <div className="mt-3 flex items-start gap-4">
              <img
                src="/images/polygraph-logo.svg"
                alt="Polygraph"
                className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
              />
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                Polygraph implements synthetic monorepos
              </h2>
            </div>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Polygraph brings monorepo-level intelligence to your existing
              multi-repo setup, no code migration required. Map your
              repositories into a unified dependency graph and ship coordinated
              changes across every repo in a single session.
            </p>

            <div className="mt-auto border-t border-slate-200 pt-5 dark:border-slate-700">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Now in early access
              </p>
              <div className="mt-3">
                <a
                  href="https://trypolygraph.com/#form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  Get early access
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
