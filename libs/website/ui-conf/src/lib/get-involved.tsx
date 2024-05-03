export function GetInvolved() {
  return (
    <section className="relative z-10 mx-auto mt-24 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <header className="relative">
        <div
          id="get-involved"
          className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          Get Involved
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#get-involved"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <div className="mt-3 grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
        {/*LINKS*/}
        <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
          <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Become a sponsor
            </h2>
            <ul className="mt-4 list-disc space-y-3 px-4">
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
          </div>
          <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
            <a
              href="mailto:nxconf@nrwl.io"
              title="What is a monorepo?"
              className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Email for sponsorship opportunities
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
          <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Become a speaker
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Share your monorepo knowledge with the world as a speaker at
              Monorepo World! Speakers receive free admission to the event, as
              well as travel and accommodation.
            </p>
          </div>
          <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
            <a
              href="https://sessionize.com/monorepo-world"
              title="Why using a monorepo?"
              className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Submit a proposal<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
