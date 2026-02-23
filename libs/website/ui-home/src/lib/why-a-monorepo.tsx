import { LinkIcon } from '@heroicons/react/24/outline';

export function WhyAMonorepo(): JSX.Element {
  return (
    <div
      data-test-id="why-a-monorepo"
      id="why-a-monorepo"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # The Polyrepo Tax
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#why-a-monorepo"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          Isolation buys autonomy. But autonomy has a compounding cost.
        </p>
      </div>
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h1
            id="polyrepo-concept"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            A &ldquo;Polyrepo&rdquo;
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#polyrepo-concept"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            The opposite of a monorepo is often called a
            &ldquo;polyrepo&rdquo;: each team or application lives in its own
            repository, with its own dependencies, tooling, build artifact, and
            CI pipeline.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/polyrepo-practice.svg"
            alt="polyrepo practice"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Organizations adopt polyrepos to give teams autonomy: independent
            choices about libraries, release cadence, and contribution rules.
            But this autonomy comes through{' '}
            <b className="text-semibold">isolation</b>, and isolation
            doesn&apos;t eliminate the need for integration. It just delays it.
            Shared contracts still need to align. Breaking changes still need
            coordinating. The feedback just arrives later in the development
            cycle, when it&apos;s harder and more expensive to act on.
          </p>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            That delayed feedback is the polyrepo tax:
          </p>
        </div>
        <div className="lg:gap-22 mt-12 grid gap-16 pt-12 lg:grid-cols-2">
          {/*item*/}
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Polyrepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Cumbersome code sharing
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Sharing code across repos means setting up a dedicated
                repository, CI, package publishing, and version management.
                Consumers must reconcile incompatible versions of shared
                dependencies. The overhead discourages sharing in the first
                place.
              </p>
            </div>
          </section>
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Polyrepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Significant code duplication
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                When sharing is too costly, teams reimplement common services
                and components in each repo. This multiplies maintenance,
                security patching, and quality control across every copy.
              </p>
            </div>
          </section>
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Polyrepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Costly cross-repo changes
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                A bug in a shared library means multiple PRs across
                disconnected histories, sequenced merges, and compatibility
                gymnastics: beta releases, consumer upgrades, stable releases,
                repeat.
              </p>
            </div>
          </section>
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Polyrepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Hard to enforce conventions
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Each repo makes its own choices about tooling, dependencies,
                code structure, and documentation. Enforcing organizational
                standards (dependency policies, API design guidelines, security
                rules) means maintaining separate configs and review processes
                per repo. Drift is the default.
              </p>
            </div>
          </section>
        </div>

        {/* AI bridge callout */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
            <div className="px-6 pt-10 pb-12 text-center sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                <span className="block text-gray-900 dark:text-white">
                  <span role="img" aria-hidden="true">
                    🤖
                  </span>{' '}
                  This tax gets worse with AI
                </span>
              </h1>
              <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
                Repo boundaries are session boundaries: every time an AI agent
                crosses into another repo, it loses all context and starts from
                scratch. It sees specs and docs, not actual implementations. The
                human becomes the coordination layer, manually copying types,
                tracking CI failures, and sequencing releases across repos.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h1
            id="monorepo-concept"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            A &ldquo;Monorepo&rdquo;
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-concept"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            A monorepo directly addresses each of these costs:
          </p>
        </div>

        <div className="lg:gap-22 mt-12 grid gap-16 pt-12 lg:grid-cols-2">
          {/*item*/}
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Monorepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Share code without publishing overhead
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Use the existing CI setup. No versioned packages needed when all
                consumers are in the same repo. Sharing a new library is as
                simple as creating a folder.
              </p>
            </div>
          </section>
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Monorepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Single source of truth
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Common services and components live in one place. Fix a bug
                once, every consumer gets the fix. No copies to track down.
              </p>
            </div>
          </section>
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Monorepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Atomic commits across projects
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Everything works together at every commit. A breaking change in
                a shared library and the fix in every consumer land in the same
                PR. No sequenced merges, no compatibility dance.
              </p>
            </div>
          </section>
          <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-slate-700 dark:text-gray-300">
                Monorepo
              </span>
            </div>
            <div className="mt-4 block">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Enforceable conventions at scale
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Organizational rules live in one place and apply everywhere:
                code style, dependency policies, repo structure, documentation
                standards. Tooling can enforce constraints automatically (e.g.,
                visibility rules, banned imports, version policies). Consistency
                is the default, not something you chase across dozens of repos.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
