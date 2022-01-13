export function WhatIsAMonorepo() {
  return (
    <div
      id="what-is-a-monorepo"
      className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden lg:py-24"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <header className="relative">
          <div className="text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # What's a Monorepo?
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
            Let's define what we and others typically mean when we talk about
            Monorepos.
          </p>
        </header>

        <article className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-2xl leading-loose font-bold text-gray-800 dark:text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed">
              &ldquo;A monorepo is a single repository containing{' '}
              <mark className="px-1 bg-yellow-500 rounded-md">
                multiple distinct projects
              </mark>
              , with{' '}
              <mark className="px-1 bg-yellow-500 rounded-md">
                well-defined relationships
              </mark>
              .&rdquo;
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              We at Nrwl think this definition is the most consistent and
              accurate statement of what a monorepo is among established
              monorepo tools.
            </p>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              aria-hidden="true"
              loading="lazy"
              className="relative mx-auto"
              width={490}
              src="/images/monorepo-polyrepo.svg"
              alt="monorepo vs polyrepo"
            />
          </div>
        </article>

        <article className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h2 className="text-2xl leading-loose font-bold text-gray-800 dark:text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed">
                Not just &ldquo;code collocation&rdquo;
              </h2>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                If a repository has several projects in it, but the
                relationships between those projects aren't clear, it would be
                considered "code collocation" but not a monorepo for the sake of
                this discussion.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Likewise, if a repository contains a massive application without
                division and encapsulation of discrete parts, it's just a big
                repo. You can give it a fancy name like "garganturepo," but
                we're sorry to say, it's not a monorepo.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                In fact, such a repo is prohibitively monolithic, which is often
                the first thing that comes to mind when people think of
                monorepos. Keep reading, and you'll see that a good monorepo is
                the opposite of monolithic.
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <img
                aria-hidden="true"
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="images/monolith-modular.svg"
                alt="monolith vs modular"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default WhatIsAMonorepo;
