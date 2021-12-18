import ToolsReview from './tools-review';

export function Index() {
  return (
    <>
      {/*HEADER*/}
      <div className="w-full bg-slate-800">
        <div
          id="animated-background"
          className="transform-gpu lg:bg-contain bg-clip-border bg-origin-border bg-right bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/header-background.svg)',
          }}
        >
          <header className=" min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="max-w-max mx-auto">
              <div className="w-full">
                <span className="text-5xl font-extrabold text-white tracking-tighter sm:text-8xl">
                  monorepo
                </span>
                <span className="text-3xl font-semibold text-blue-500 tracking-tight sm:text-5xl">
                  .tools
                </span>
              </div>
              <div className="mt-14 flex justify-end">
                <div className="sm:w-2/3 sm:border-l-4 border-blue-500">
                  <h1 className="pl-8 py-3 text-2xl font-normal text-gray-200">
                    Everything you need to know about monorepos, and the tools
                    to build them.
                  </h1>
                  <p className="text-right text-sm italic text-gray-400">
                    - Made with love by Nrwl (the company behind Nx)
                  </p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <main>
        {/*OUR VISION*/}
        <div className="mt-32 bg-slate-800">
          {/* Header */}
          <div className="relative pt-64 pb-32 bg-slate-800">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt=""
              />
              <div
                className="absolute inset-0 bg-slate-800 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Understanding Monorepos
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Monorepos are hot right now, especially among Web developers. We
                build this resource to help developers understand what monorepos
                are, what benefits they can bring, and the tools available to
                make monorepo development delightful.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                There are many great tools, built by great teams, with different
                philosophies. We do our best to represent each tool objectively,
                and we welcome pull requests if we got something wrong!
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                The tools we'll focus on are: Nx (by Nrwl), Turborepo (by
                Vercel), Lerna, Rush (by Microsoft), and Bazel (by Google). We
                chose these tools because of their usage or recognition in the
                Web development community.
              </p>
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
              <div className="flex flex-col bg-slate-800 rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <h3 className="text-xl font-medium text-gray-200">
                    What's a monorepo
                  </h3>
                  <p className="mt-4 text-base text-gray-300">
                    Let's have a common unsterstanding of what a Monorepo is.
                  </p>
                </div>
                <div className="p-6 bg-gray-900 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href="#"
                    className="text-base font-medium text-blue-600 hover:text-blue-500"
                  >
                    What's a monorepo<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col bg-slate-800 rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <h3 className="text-xl font-medium text-gray-200">
                    Why you should care
                  </h3>
                  <p className="mt-4 text-base text-gray-300">
                    What are the situation solved by monorepos.
                  </p>
                </div>
                <div className="p-6 bg-gray-900 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href="#"
                    className="text-base font-medium text-blue-600 hover:text-blue-500"
                  >
                    Why a monorepo?<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col bg-slate-800 rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <h3 className="text-xl font-medium text-gray-200">
                    Features of a monorepo
                  </h3>
                  <p className="mt-4 text-base text-gray-300">
                    What to expect from a monorepo tool
                  </p>
                </div>
                <div className="p-6 bg-gray-900 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href="#"
                    className="text-base font-medium text-blue-600 hover:text-blue-500"
                  >
                    Monorepo features<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*INTRODUCTION*/}
        {/*WHAT A MONOREPO*/}
        <div className="py-16 bg-slate-800 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                # What's a Monorepo?
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">
                Let's defined what we mean when we talk about Monorepos.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
                  &ldquo;A monorepo is a single repository containing multiple
                  distinct projects, with well-defined relationships.&rdquo;
                </h3>
                <p className="mt-3 text-lg text-gray-300">
                  We at Nrwl think this Google/Bazel definition is the most
                  consistent and accurate statement of what a monorepo is.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto"
                  width={490}
                  src="/images/monorepo-polyrepo.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
                    Not just &ldquo;code collocation&rdquo;
                  </h3>
                  <p className="mt-3 text-lg text-gray-300">
                    If a repository has several projects in it, but the
                    relationships between those projects aren't clear, it would
                    be considered "code collocation" but not a monorepo for the
                    sake of this discussion.
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    Likewise, if a repository contains a massive application
                    without division and encapsulation of discrete parts, it's
                    just a big repo. You can give it a fancy name like
                    "garganturepo," but we're sorry to say, it's not a monorepo.
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    In fact, such a repo is prohibitively monolithic, which is
                    often the first thing that comes to mind when people think
                    of monorepos. Keep reading, and you'll see that a good
                    monorepo is the opposite of monolithic.
                  </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto"
                    width={490}
                    src="images/monolith-modular.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MONOLITH CALLOUT*/}
        <div className="bg-slate-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block text-white">
                    ✋ Monolith &#8800; Monorepo
                  </span>
                </h2>
                <p className="mt-4 text-xl leading-6 text-gray-300">
                  In fact, such a repo is prohibitively monolithic, which is
                  often the first thing that comes to mind when people think of
                  monorepos. Keep reading, and you'll see that a good monorepo
                  is the opposite of monolithic
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHY MONOREPO*/}
        <div className="bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
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
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-4xl">
                A &ldquo;Polyrepo&rdquo;
              </h2>
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                For the sake of this discussion, let's say the opposite of
                monorepo is "polyrepo". Polyrepo is the current standard way of
                developing applications: a repo for each team, application, or
                project. And it's common that each repo has a single build
                artifact, and simple build pipeline.
              </p>
              <img
                className="mt-10 w-full h-full object-cover"
                src="/images/polyrepo-practice.svg"
                alt=""
              />
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                The industry has moved to the polyrepo way of doing things for
                one big reason: team autonomy. Teams want to make their own
                decisions about what libraries they'll use, when they'll deploy
                their apps or libraries, and who can contribute to or use their
                code.
              </p>
              <img
                className="mt-10 w-full h-full object-cover"
                src="/images/spectrum-real-world.svg"
                alt=""
              />
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                Those are all good things, so why should teams do anything
                differently? Because this autonomy is provided by isolation, and
                isolation harms collaboration. More specifically, these are
                common drawbacks to a polyrepo environment:
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
                    tooling and CI environment, add committers to the repo, and
                    set up package publishing so other repos can depend on it.
                    And let's not get started on reconciling incompatible
                    versions of third party libraries across repositories...
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
                    repo, so teams just write their own implementations of
                    common services and components in each repo. This wastes
                    up-front time, but also increases the burden of maintenance,
                    security, and quality control as the components and services
                    change.
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
                    developer has to set their environment up to work on two
                    repos at once, and then submit the change to two different
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
                    Inconsistency creates mental overhead remembering which
                    commands to use from project to project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-4xl">
                A &ldquo;Monorepo&rdquo;
              </h2>
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                As we saw, we can end up in pretty tricky situation when working
                in a polyrepo, but how a monorepo can help use solve all of
                them?
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
                    Everything works together at every commit. There's no such
                    thing as a breaking change when you fix everything in the
                    same commit.
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
                    written using different tools and technologies. Developers
                    can confidently contribute to other teams’ applications and
                    verify that their changes are safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="py-16 bg-slate-800 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                # Monorepo features
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus magnam voluptatum cupiditate veritatis in, accusamus
                quisquam.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
                  Management
                </h3>
                <p className="mt-3 text-lg text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur minima sequi recusandae, porro maiores officia
                  assumenda aliquam laborum ab aliquid veritatis impedit odit
                  adipisci optio iste blanditiis facere. Totam, velit.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*hand*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Code boundaries
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>

                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*code*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Code sharing
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>

                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*terminal*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Consistent tooling
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto"
                  width={490}
                  src="https://place-hold.it/980x1140/f1f1f1"
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
                    Understanding your workspace
                  </h3>
                  <p className="mt-3 text-lg text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit ex obcaecati natus eligendi delectus, cum deleniti
                    sunt in labore nihil quod quibusdam expedita nemo.
                  </p>

                  <dl className="mt-10 space-y-4">
                    <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                          {/*presentation chart line*/}
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                          Dependency graph visualization
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        Pariatur minima sequi recusandae, porro maiores officia
                        assumenda aliquam impedito iste blanditiis facere.
                      </dd>
                    </div>
                    <div className="relative px-4 py-6 bg-gray-900 rounded-xl border border-black">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                          {/*lightbulb*/}
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                          Detecting affected projects/packages
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        Pariatur minima sequi recusandae, porro maiores officia
                        assumenda aliquam impedito iste blanditiis facere.
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto"
                    width={490}
                    src="/images/dependency-graph.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
                  Tasks management
                </h3>
                <p className="mt-3 text-lg text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur minima sequi recusandae, porro maiores officia
                  assumenda aliquam laborum ab aliquid veritatis impedit odit
                  adipisci optio iste blanditiis facere. Totam, velit.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*switchvertical*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Local task coordination
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>

                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*documentdownload*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Local computation caching
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>

                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*clouddonwload*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Distributed computation caching
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>

                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*collection*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Distributed task execution
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>

                  <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                        {/*server*/}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                        Transparent remote execution
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      Pariatur minima sequi recusandae, porro maiores officia
                      assumenda aliquam impedito iste blanditiis facere.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto"
                  width={490}
                  src="https://place-hold.it/980x1140/f1f1f1"
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
                    Scalability & powered growth
                  </h3>
                  <p className="mt-3 text-lg text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit ex obcaecati natus eligendi delectus, cum deleniti
                    sunt in labore nihil quod quibusdam expedita nemo.
                  </p>

                  <dl className="mt-10 space-y-4">
                    <div className="relative px-4 py-6 bg-gray-900 rounded-md border border-black">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                          {/*lightningbolt*/}
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                          Performance
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        Pariatur minima sequi recusandae, porro maiores officia
                        assumenda aliquam impedito iste blanditiis facere.
                      </dd>
                    </div>
                    <div className="relative px-4 py-6 bg-gray-900 rounded-xl border border-black">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                          {/*cog*/}
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                          Code generation
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        Pariatur minima sequi recusandae, porro maiores officia
                        assumenda aliquam impedito iste blanditiis facere.
                      </dd>
                    </div>
                    <div className="relative px-4 py-6 bg-gray-900 rounded-xl border border-black">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                          {/*statusonline*/}
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                          Explicit project constrains
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        Pariatur minima sequi recusandae, porro maiores officia
                        assumenda aliquam impedito iste blanditiis facere.
                      </dd>
                    </div>
                    <div className="relative px-4 py-6 bg-gray-900 rounded-xl border border-black">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
                          {/*sortdescending*/}
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
                          Enforcing code style
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        Pariatur minima sequi recusandae, porro maiores officia
                        assumenda aliquam impedito iste blanditiis facere.
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto"
                    width={490}
                    src="https://place-hold.it/980x1140/f1f1f1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*CONCLUSION*/}
        <div className="bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative">
            <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
              # A perception shift
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">
              It's complex, we know. But you're not alone in this journey.
            </p>
          </div>
          <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-4xl">
                It is more than code & tools, it changes your organization
              </h2>
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p>
            </div>
          </div>
        </div>

        <div>
          <ToolsReview />
        </div>
      </main>

      <footer className="mt-24 lg:mt-36 bg-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-300"
              >
                What monorepo?
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-300"
              >
                Why monorepo?
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-300"
              >
                Monorepo features
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021 monorepo.tools, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Index;
