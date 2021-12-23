export function Introduction() {
  return (
    <div className="mt-32 bg-slate-50 dark:bg-slate-800">
      {/* Header */}
      <div className="relative pt-64 pb-32 bg-slate-50 dark:bg-slate-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
          <div
            className="absolute inset-0 bg-slate-50 dark:bg-slate-800 mix-blend-lighten dark:mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Understanding Monorepos
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                Monorepos are hot right now, especially among Web developers. We
                created this resource to help developers understand what
                monorepos are, what benefits they can bring, and the tools
                available to make monorepo development delightful.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                There are many great monorepo tools, built by great teams, with
                different philosophies. We do our best to represent each tool
                objectively, and we welcome pull requests if we got something
                wrong!
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                The tools we'll focus on are:&nbsp;
                <a href="https://nx.dev">Nx (by Nrwl)</a>,&nbsp;
                <a rel="nofollow" href="https://turborepo.org">
                  Turborepo (by Vercel)
                </a>
                ,&nbsp;
                <a rel="nofollow" href="https://lerna.js.org/">
                  Lerna
                </a>
                ,&nbsp;
                <a rel="nofollow" href="https://rushjs.io/">
                  Rush (by Microsoft)
                </a>
                , and&nbsp;
                <a href="https://bazel.build" rel="nofollow">
                  Bazel (by Google)
                </a>
                . We chose these tools because of their usage or recognition in
                the Web development community.
              </p>
            </div>
            <img
              className="rounded-lg"
              width={490}
              src="/images/monorepo.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-28 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Content
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {/*LINKS*/}
          <div className="flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                What's a monorepo
              </h3>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Let's start with a common unsterstanding of what a Monorepo is.
              </p>
            </div>
            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="#what-is-a-monorepo"
                className="text-base font-medium text-blue-600 hover:text-blue-500"
              >
                What's a monorepo<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Why you should care
              </h3>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                What are the situations solved by monorepos.
              </p>
            </div>
            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="#why-a-monorepo"
                className="text-base font-medium text-blue-600 hover:text-blue-500"
              >
                Why a monorepo?<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Features of a monorepo
              </h3>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                What to expect from a monorepo tool
              </p>
            </div>
            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="#monorepo-features"
                className="text-base font-medium text-blue-600 hover:text-blue-500"
              >
                Monorepo features<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
