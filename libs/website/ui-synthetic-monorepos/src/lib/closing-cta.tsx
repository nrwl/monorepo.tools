export function ClosingCTA(): JSX.Element {
  return (
    <div className="bg-slate-50 py-16 lg:py-24 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
          <div className="px-6 pt-10 pb-12 text-center sm:px-16 sm:pt-16 lg:py-16 xl:py-20 xl:px-20">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              An entry point, not an endpoint
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Start getting monorepo benefits without changing how teams work.
              From there, deepen integration where it makes sense: start
              synthetic, migrate gradually, move at your own pace.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://nx.dev/docs/concepts/synthetic-monorepos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400"
              >
                Learn about synthetic monorepos
              </a>
              <a
                href="https://nx.dev/nx-cloud"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-slate-200 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-800"
              >
                Explore Nx Cloud
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
