export function WhyAMonorepo() {
  return (
    <div
      id="why-a-monorepo"
      className="bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative">
        <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
          # But why?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">
          Let's go deeper into the rabbit hole.
        </p>
      </div>
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">
            A &ldquo;Polyrepo&rdquo;
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            For the sake of this discussion, let's say the opposite of monorepo
            is "polyrepo". Polyrepo is the current standard way of developing
            applications: a repo for each team, application, or project. And
            it's common that each repo has a single build artifact, and simple
            build pipeline.
          </p>
          <img
            className="mt-10 w-full h-full object-cover"
            src="/images/polyrepo-practice.svg"
            alt=""
          />
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            The industry has moved to the polyrepo way of doing things for one
            big reason: team autonomy. Teams want to make their own decisions
            about what libraries they'll use, when they'll deploy their apps or
            libraries, and who can contribute to or use their code.
          </p>
          <img
            className="mt-10 w-full h-full object-cover"
            src="/images/spectrum-real-world.svg"
            alt=""
          />
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            Those are all good things, so why should teams do anything
            differently? Because this autonomy is provided by isolation, and
            isolation harms collaboration. More specifically, these are common
            drawbacks to a polyrepo environment:
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-22">
          {/*item*/}
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-900">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                Cumbersome code sharing
              </p>
              <p className="mt-3 text-base text-gray-400">
                To share code across repositories, you'd likely create a
                repository for the shared code. Now you have to set up the
                tooling and CI environment, add committers to the repo, and set
                up package publishing so other repos can depend on it. And let's
                not get started on reconciling incompatible versions of third
                party libraries across repositories...
              </p>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-900">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                Significant code duplication
              </p>
              <p className="mt-3 text-base text-gray-400">
                no one wants to go through the hassle of setting up a shared
                repo, so teams just write their own implementations of common
                services and components in each repo. This wastes up-front time,
                but also increases the burden of maintenance, security, and
                quality control as the components and services change.
              </p>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-900">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                Costly cross-repo changes to shared libraries and consumers
              </p>
              <p className="mt-3 text-base text-gray-400">
                when a shared library in a separate repo need to be changed
                together (new feature, regression, breaking change), the
                developer has to set their environment up to work on two repos
                at once, and then submit the change to two different
                repositories, with disconnected revision histories.
              </p>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-900">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                Inconsistent tooling
              </p>
              <p className="mt-3 text-base text-gray-400">
                Each project uses its own set of commands for running tests,
                building, serving, linting, deploying, and so forth.
                Inconsistency creates mental overhead remembering which commands
                to use from project to project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">
            A &ldquo;Monorepo&rdquo;
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            As we saw, we can end up in pretty tricky situation when working in
            a polyrepo, but how a monorepo can help use solve all of them?
          </p>
        </div>

        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-22">
          {/*item*/}
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-900">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                No overhead to create new projects
              </p>
              <p className="mt-3 text-base text-gray-400">
                Use the existing CI setup, and no need to publish versioned
                packages if all consumers are in the same repo.
              </p>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-900">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                Atomic commits across projects
              </p>
              <p className="mt-3 text-base text-gray-400">
                Everything works together at every commit. There's no such thing
                as a breaking change when you fix everything in the same commit.
              </p>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-900">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                One version of everything
              </p>
              <p className="mt-3 text-base text-gray-400">
                No need to worry about incompatibility because of projects
                depending on conflicting versions of third party libraries.
              </p>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-900">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <p className="text-xl font-semibold text-gray-300">
                Developer mobility
              </p>
              <p className="mt-3 text-base text-gray-400">
                Get a consistent way of building and testing applications
                written using different tools and technologies. Developers can
                confidently contribute to other teams’ applications and verify
                that their changes are safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAMonorepo;
