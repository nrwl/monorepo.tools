import { LinkIcon } from '@heroicons/react/24/outline';

export function WhatIsAMonorepo(): JSX.Element {
  return (
    <div
      data-test-id="what-is-a-monorepo"
      id="what-is-a-monorepo"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # What is a Monorepo?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-is-a-monorepo"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Let's define what we and others typically mean when we talk about
            Monorepos.
          </p>
        </header>

        <article className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl sm:leading-relaxed">
              A monorepo is a single repository containing{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                multiple distinct projects
              </mark>
              , with{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
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

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
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
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl sm:leading-relaxed">
                Not just &ldquo;code colocation&rdquo;
              </h2>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Consider a repository with several projects in it. We definitely
                have “code colocation”, but if there are no well defined
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

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
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
