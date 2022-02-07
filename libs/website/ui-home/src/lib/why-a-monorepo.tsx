import { LinkIcon } from '@heroicons/react/solid';

export function WhyAMonorepo() {
  return (
    <div
      data-test-id="why-a-monorepo"
      id="why-a-monorepo"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # But why?
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
          Let's go deeper into the rabbit hole.
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
            For the sake of this discussion, let's say the opposite of monorepo
            is a "polyrepo". A polyrepo is the current standard way of
            developing applications: a repo for each team, application, or
            project. And it's common that each repo has a single build artifact,
            and simple build pipeline.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/polyrepo-practice.svg"
            alt="polyrepo practice"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            The industry has moved to the polyrepo way of doing things for one
            big reason: <b className="text-semibold">team autonomy</b>. Teams
            want to make their own decisions about what libraries they'll use,
            when they'll deploy their apps or libraries, and who can contribute
            to or use their code.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/spectrum-real-world.svg"
            alt="spectrum real world"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Those are all good things, so why should teams do anything
            differently? Because this autonomy is provided by isolation, and
            isolation harms collaboration. More specifically, these are common
            drawbacks to a polyrepo environment:
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
                To share code across repositories, you'd likely create a
                repository for the shared code. Now you have to set up the
                tooling and CI environment, add committers to the repo, and set
                up package publishing so other repos can depend on it. And let's
                not get started on reconciling incompatible versions of third
                party libraries across repositories...
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
                No one wants to go through the hassle of setting up a shared
                repo, so teams just write their own implementations of common
                services and components in each repo. This wastes up-front time,
                but also increases the burden of maintenance, security, and
                quality control as the components and services change.
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
                Costly cross-repo changes to shared libraries and consumers
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Consider a critical bug or breaking change in a shared library:
                the developer needs to set up their environment to apply the
                changes across multiple repositories with disconnected revision
                histories. Not to speak about the coordination effort of
                versioning and releasing the packages.
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
                Inconsistent tooling
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Each project uses its own set of commands for running tests,
                building, serving, linting, deploying, and so forth.
                Inconsistency creates mental overhead of remembering which
                commands to use from project to project.
              </p>
            </div>
          </section>
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
            We can end up in pretty tricky situations when working in a
            polyrepo. But how can a monorepo help solve all of them?
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
                No overhead to create new projects
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Use the existing CI setup, and no need to publish versioned
                packages if all consumers are in the same repo.
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
                Everything works together at every commit. There's no such thing
                as a breaking change when you fix everything in the same commit.
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
                One version of everything
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                No need to worry about incompatibilities because of projects
                depending on conflicting versions of third party libraries.
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
                Developer mobility
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Get a consistent way of building and testing applications
                written using different tools and technologies. Developers can
                confidently contribute to other teams’ applications and verify
                that their changes are safe.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default WhyAMonorepo;
