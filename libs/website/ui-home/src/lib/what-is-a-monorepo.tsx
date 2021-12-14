import { LinkIcon } from '@heroicons/react/solid';

export function WhatIsAMonorepo() {
  return (
    <div
      id="what-is-a-monorepo"
      className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden lg:py-24"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <header className="relative">
          <div className="text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl group">
            # What is a Monorepo?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-is-a-monorepo"
              className="text-gray-900 dark:text-white flex inline-flex items-center"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
            Let's define what we and others typically mean when we talk about
            Monorepos.
          </p>
        </header>

        <article className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-2xl leading-loose font-bold text-gray-800 dark:text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed">
              A monorepo is a single repository containing{' '}
              <mark className="px-1 bg-yellow-500 rounded-md">
                multiple distinct projects
              </mark>
              , with{' '}
              <mark className="px-1 bg-yellow-500 rounded-md">
                well-defined relationships
              </mark>
              .
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              We at Nrwl think this is the most consistent and accurate
              statement of what a monorepo is among all the established monorepo
              tools.
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
                Consider a repository with several projects in it. We definitely
                have “code collocation”, but if there are no well defined
                relationships among them, we would not call it a monorepo.
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
