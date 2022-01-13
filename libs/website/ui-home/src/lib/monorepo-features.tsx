import {
  CloudDownloadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  DocumentDownloadIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ServerIcon,
  StatusOnlineIcon,
  SwitchVerticalIcon,
  TerminalIcon,
} from '@heroicons/react/solid';
import ToolsSupportCallout from './tools-support-callout';

const Supported = () => (
  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full" />
);
const Unsupported = () => (
  <span className="mr-3 w-2 h-2 bg-red-500 rounded-full" />
);
const ManualImplementation = () => (
  <span className="mr-3 w-2 h-2 bg-yellow-500 rounded-full" />
);

export function MonorepoFeatures() {
  return (
    <article className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h1 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo tools
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
            How do they compare? let's see how each tools answer to each
            features.
          </p>
        </div>

        {/*FAST*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Fast
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Local Computation Caching*/}
        <section
          id="local-computation-caching"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <DocumentDownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to store and replay file and process output of tasks.
              This means that, at least on the same machine, you will never
              build or test the same thing twice.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Like React, Nx does tree diffing when restoring the results from
                its cache, which, on average, makes it faster than other tools (
                <a href="https://github.com/vsavkin/large-monorepo">
                  see this benchmark comparing Nx, Lage, and Turborepo
                </a>
                ).
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna doesn't support it and will always rerun everything from
                scratch.
              </dd>
            </div>
          </dl>
        </section>

        {/*Local task orchestration*/}
        <section
          id="local-task-orchestration"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <SwitchVerticalIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local task orchestration
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to run tasks in the correct order and in parallel. All
              the listed tools can do it in about the same way, except Lerna,
              which is more limited.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna's ability to do task coordination is more limited compared
                to the rest of the tools. It is not able to mix and match
                different targets (e.g., tests and buids), so it results in mode
                idle time.
              </dd>
            </div>
          </dl>
        </section>

        {/*Distributed Computation Caching*/}
        <section
          id="distributed-computation-caching"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CloudDownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to share cache artifacts across different
              environments. This means that your whole organisation, including
              CI agents, will never build or test the same thing twice.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna cannot reuse computation across machines.
              </dd>
            </div>
          </dl>
        </section>

        {/*Distributed Task Execution*/}
        <section
          id="distributed-task-execution"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CollectionIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed task execution
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to distribute a command across many machines, while
              largely preserving the dev ergonomics or running it on a single
              machine.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx's implementation isn't as sophisticated as Bazel's but it can
                be turned on with a small configuration change.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's implementation is the most sophisticated one and can
                scale to repos with billions of lines of code. It's also
                difficult to set up.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage doesn't support it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo doesn't support it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna doesn't support it.
              </dd>
            </div>
          </dl>
        </section>

        {/*Transparent Remote Execution*/}
        <section
          id="transparent-remote-execution"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <ServerIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Transparent remote execution
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to execute any command on multiple machines while
              developing locally.
            </p>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx doesn't support it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                This is Bazel's biggest differentiator.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage doesn't support it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo doesn't support it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna doesn't support it.
              </dd>
            </div>
          </dl>
        </section>

        {/*Affected*/}
        <section
          id="detecting-affected-projects-packages"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <LightBulbIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Detecting affected projects/packages
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Determine what might be affected by a change, to run only
              build/test affected projects.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/dependency-graph.svg"
                alt="dependency-graph"
              />
            </div>
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx supports it. Its implementation doesn't just look at what
                files changed but also at the nature of the change.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel doesn't support it, but it provides the required metadata
                making it possible to write such functionality youself.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
          </dl>
        </section>

        {/*UNDERSTANDABLE*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Understandable
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Workspace analysis*/}
        <section
          id="workspace-analysis"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <PresentationChartLineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Workspace analysis
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to understand the understand the project graph of the
              workspace without extra configuration.
            </p>

            <div className="mt-10" aria-hidden="true">
              <iframe
                loading="lazy"
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
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                By default, Nx analyses <code>package.json</code>, JavaScript,
                and TypeScript files. It's pluggable and can be extended to
                support other platforms (e.g, Go, Java, Rust).
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel developers to author BUILD files. Some companies build
                tools that analyse workspace sources and generate the BUILD
                files.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage analyses package.json files.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo analyses package.json files.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna analyses package.json files.
              </dd>
            </div>
          </dl>
        </section>

        {/*Dependency Graph Visualization*/}
        <section
          id="dependency-graph-visualization"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <PresentationChartLineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dependency graph visualization
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Visualize dependency relationships between projects and/or tasks.
            </p>

            <div className="mt-10" aria-hidden="true">
              <iframe
                loading="lazy"
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
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx comes ith an interactive visualizer that allows you to filter
                and explore large workspaces.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel's implementation supports a custom query language to
                filter out node you are not interested in.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo's implementation is not interactive and doesn't
                provide any way to filter the graph, so works for small repos.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
          </dl>
        </section>

        {/*MANAGEMENT*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Managable
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Code Sharing*/}
        <section
          id="code-sharing"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CodeIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Source code sharing
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Facilitates sharing of discrete pieces source code.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx supports it. Any folder of files can be marked as a project
                and can be shared. Nx plugins help configure WebPack, Rollup,
                TypeScript and other tools to enable sharing without hurting dev
                ergonomics.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full" />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it. Any folder of files can be marked as a
                project and can be shared. Bazel build rules ere used to enable
                sharing without hurting dev ergonomics.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it. Only npm packages can be shared.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it. Only npm packages can be shared.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna supports it. Only npm packages can be shared.
              </dd>
            </div>
          </dl>
        </section>

        {/*Consistent Tooling*/}
        <section
          id="consistent-tooling"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <TerminalIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Consistent tooling
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The tool helps you get a consistent experience regardless of what
              you use to develop your projects: different JavaScript frameworks,
              Go, Java, etc.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx is pluggable. It is able to invoke npm scripts by default,
                but can be extended to invoke other tools (e.g., Gradle).
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's build rules act like plugins for different technologies
                and frameworks.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage can only run npm scripts.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo can only run npm scripts.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna can only run npm scripts.
              </dd>
            </div>
          </dl>
        </section>

        {/*Code Generation*/}
        <section
          id="code-generation"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CogIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code generation
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Native support for generating code
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
                <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Nx comes with powerful code generation capabilities. It uses a
                  virtual file system and provides editor integration. Nx
                  plugins provided generators for popular frameworks. Other
                  generators can be used as well.
                </dd>
              </dt>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
          </dl>
        </section>

        {/*Explicit Project Constrains*/}
        <section
          id="explicit-project-constrains"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <StatusOnlineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Project constraints and visibility
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Supports definition of rules to constrain dependency relationships
              within the repo. For instance, developers can mark some projects
              as private to their team so no one else can depend on them.
              Developers can also mark projects based on the technology used
              (e.g., React or Nest.js) and make sure that backend projects don't
              import frontend ones.
            </p>

            {/*<div className="mt-10" aria-hidden="true">*/}
            {/*  <img*/}
            {/*    className="relative mx-auto border border-slate-200 dark:border-black"*/}
            {/*    width={490}*/}
            {/*    src="https://place-hold.it/980x749/1e293b/fff"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

          <dl className="mt-6 md:mt-0 space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Developers can annotated projects in any way they seem fit,
                establish invariants, and Nx will make sure they hold. It allows
                developers to annotate what is private and what is not, what is
                experimental and what is stable etc. Nx also allows you to
                define public API for each package, so other developers aren't
                able to deep import into them.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel supports visibility rules which help you separate what is
                private from what is public, what can be shared etc.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <ManualImplementation />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
}

export default MonorepoFeatures;
