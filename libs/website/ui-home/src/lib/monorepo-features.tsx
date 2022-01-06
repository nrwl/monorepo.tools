import {
  CloudDownloadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  DocumentDownloadIcon,
  HandIcon,
  LightBulbIcon,
  LightningBoltIcon,
  PresentationChartLineIcon,
  ServerIcon,
  SortDescendingIcon,
  StatusOnlineIcon,
  SwitchVerticalIcon,
  TerminalIcon,
} from '@heroicons/react/solid';

const Supported = () => (
  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full"/>
);
const Unsupported = () => (
  <span className="mr-3 w-2 h-2 bg-red-500 rounded-full"/>
);

export function MonorepoFeatures() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2
            className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo tools
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
            How do they compare? let's see how each tools answer to each
            features.
          </p>
        </div>


        {/*FAST*/}
        <div
          className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Fast
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded"/>
        </div>

        {/*Local Computation Caching*/}
        <div
          id="local-computation-caching"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <DocumentDownloadIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to store and replay file and process output of tasks. This means that, at least on the same
              machine, you will never build or test the same thing twice.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Like React, Nx does tree diffing when restoring the results from its cache, which, on average, makes it
                faster than
                other tools (<a
                href="https://github.com/vsavkin/large-monorepo">see this benchmark</a>).
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>


        {/*Local task orchestration*/}
        <div
          id="local-task-orchestration"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <SwitchVerticalIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local task orchestration
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to run tasks in the correct order and in parallel. All the listed tools can do it in about the
              same way, except Lerna, which is more limited.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna's ability to do task coordination is more limited compared to the rest of the tools. It is not
                able to mix and match different targets (e.g., tests and buids), so it results in mode idle time.
              </dd>
            </div>
          </dl>
        </div>

        {/*Distributed Computation Caching*/}
        <div
          id="distributed-computation-caching"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CloudDownloadIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to share cache artifacts across different environments. This means that your whole
              organisation, including CI agents, will never build or test the same thing twice.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/*Distributed Task Execution*/}
        <div
          id="distributed-task-execution"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CollectionIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed task execution
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to distribute a command across many machines, while largely preserving the dev ergonomics or
              running it on a single machine.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx's implementation isn't as sophisticated as Bazel's but it can be turned on with a small configuration
                change.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's implementation is the most sophisticated one and can scale to repos with billions of lines of
                code. It's also difficult to set up.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/*Transparent Remote Execution*/}
        <div
          id="transparent-remote-execution"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <ServerIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Transparent remote execution
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to execute any command on multiple machines while developing locally.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Nx
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/*Affected*/}
        <div
          id="detecting-affected-projects-packages"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <LightBulbIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Detecting affected projects/packages
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Determine what might be affected by a change, to run only build/test affected projects.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto"
                width={490}
                src="/images/dependency-graph.svg"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/*UNDERSTANDABLE*/}

        <div
          className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Understandable
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded"/>
        </div>


        {/*Workspace analysis*/}
        <div
          id="workspace-analysis"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <PresentationChartLineIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Workspace analysis
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to understand the understand the project graph of the workspace without extra configuration.

              Bazel requires developers to author BUILD files to specify how different tasks in the workspace relate.
              Other tools do some form of analysis.
            </p>

            <div className="mt-10" aria-hidden="true">
              <iframe
                className="relative mx-auto max-w-full rounded-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v87Y8NgAYLo"
                title="Interactive dependency graph visualization with Nx"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                By default, Nx's implementation analyses <code>package.json</code>, JavaScript, and TypeScript files.
                It's pluggable and can be extended to support other platforms (e.g, Go, Java, Rust).
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel's implementation requires developers to author BUILD files.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage's implementation analyses package.json files.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo's implementation analyses package.json files.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna's implementation analyses package.json files.
              </dd>
            </div>
          </dl>
        </div>

        {/*Dependency Graph Visualization*/}
        <div
          id="dependency-graph-visualization"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <PresentationChartLineIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dependency graph visualization
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Visualize dependency relationships between projects and/or tasks.
            </p>

            <div className="mt-10" aria-hidden="true">
              <iframe
                className="relative mx-auto max-w-full rounded-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v87Y8NgAYLo"
                title="Interactive dependency graph visualization with Nx"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx comes ith an interactive visualizer that allows you to filter and explore large workspaces.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel's implementation supports a custom query language to filter out node you are not interested in.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo's implementation is not interactive and doesn't provide any way to filter the graph, so works
                for small repos.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/> Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>


        {/*MANAGEMENT*/}
        <div
          className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Managable
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded"/>
        </div>

        {/*Code Sharing*/}
        <div
          id="code-sharing"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CodeIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Source code sharing
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Facilitates sharing of discrete pieces source code. The tools support code sharing to a different degree.
              Bazel is the most flexible, then Nx, and then the rest of the tools that can only share NPM packages.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Nx
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full"/>
                  Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/*Consistent Tooling*/}
        <div
          id="consistent-tooling"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <TerminalIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Consistent tooling
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The tool helps you get a consistent experience regardless of what you use to develop your projects:
              different JavaScript frameworks, Go, Java, etc.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx's implementation is pluggable. It is able to invoke npm scripts by default, but can be extended to
                invoke other tools (e.g., Gradle).
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's build rules act like plugins for different technologies and frameworks.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage's implementation is limited to npm scripts.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo's implementation is limited to npm scripts.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna's implementation is limited to npm scripts.
              </dd>
            </div>
          </dl>
        </div>


        {/*Code Generation*/}
        <div
          id="code-generation"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CogIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code generation
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Native support for generating code
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Nx
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Bazel
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/*Explicit Project Constrains*/}
        <div
          id="explicit-project-constrains"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div
              className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <StatusOnlineIcon className="w-6 h-6"/>
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Project constraints and visibility
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Supports definition of rules to constrain dependency relationships within the repo. For instance,
              developers can mark some projects as private to their team so no one else can depend on them.
              Developers can also mark projects based on the technology used (e.g., React or Nest.js) and make sure that backend projects don't import frontend ones.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Developers can annotated projects in any way they seem fit, establish invariants, and Nx will make sure they hold. It allows developers to annotate what is private and what is not, what is experimental and what is stable etc. Nx also allows you to define public API for each package, so other developers aren't able to deep import into them.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported/>
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel supports visibility rules.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Lage
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Turborepo
                </p>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p
                  className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported/>
                  Lerna
                </p>
              </dt>
            </div>
          </dl>
        </div>

      </div>
    </div>
  );
}

export default MonorepoFeatures;
