export function FeaturedWebinar(): JSX.Element {
  return (
    <div
      id="featured-webinar"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-yellow-600 dark:text-yellow-500">
              Featured Webinar
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Synthetic Monorepos: the Solution for Agentic Development Across
              Repository Boundaries
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Not seeing the productivity improvements your AI coding tools
              promised? Your repo architecture might be the problem.
            </p>
            <p className="mt-6 text-base text-gray-700 dark:text-gray-300">
              A walkthrough of how AI development tools amplify coordination
              overhead in multi-repo setups, and how synthetic monorepos
              eliminate cross-repository friction without a migration. Includes
              a preview of new platform features and a live Q&amp;A.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
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

            <div className="mt-auto border-t border-slate-200 pt-6 dark:border-slate-700">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                April 8, 2026 · 1 hour
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://go.nx.dev/april2026-webinar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  Watch the recording
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-yellow-600 dark:text-yellow-500">
              Early Access
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Polygraph implements synthetic monorepos
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Map your repositories into a unified dependency graph and ship
              coordinated changes across every repo in a single session.
            </p>
            <p className="mt-6 text-base text-gray-700 dark:text-gray-300">
              Polygraph brings monorepo-level intelligence to your existing
              multi-repo setup, no code migration required. Get early access
              and be the first to coordinate cross-repo work without the
              friction.
            </p>

            <div className="mt-auto border-t border-slate-200 pt-6 dark:border-slate-700">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Now in early access
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://trypolygraph.com/#form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
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
