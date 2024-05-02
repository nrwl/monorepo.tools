export function Sponsors() {
  return (
    <article className="bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
          <div className="px-6 pt-10 pb-12 text-center sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block text-gray-900 dark:text-white">
                <span role="img" aria-hidden="true">
                  👀
                </span>{' '}
                Options for the Discerning Sponsor
              </span>
            </h1>

            <ul className="mt-12 list-disc space-y-3">
              <li className="space-y-1 text-gray-700 dark:text-gray-300">
                Hundreds of platform architects, managers and engineers from the
                world's top companies attending
              </li>
              <li className="space-y-1 text-gray-700 dark:text-gray-300">
                Makers of{' '}
                <mark className="bg-mw-green rounded-md px-1">
                  top monorepo tools
                </mark>
                , including the entire{' '}
                <mark className="bg-mw-green rounded-md px-1">Nx team</mark>
              </li>
              <li className="space-y-1 text-gray-700 dark:text-gray-300">
                Thousands of live stream viewers + post conf recording views
              </li>
            </ul>

            <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
              <a
                title="Misconceptions about Monorepos: Monorepo != Monolith"
                rel="nofollow"
                className="border-mw-green hover:bg-mw-green border-b transition hover:rounded hover:text-gray-800"
                href="mailto:nxconf@nrwl.io"
              >
                Email us for sponsorship opportunities
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Sponsors;
