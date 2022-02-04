import {
  CheckCircleIcon,
  CloudDownloadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  DocumentDownloadIcon,
  ExclamationCircleIcon,
  LightBulbIcon,
  LinkIcon,
  PresentationChartLineIcon,
  ServerIcon,
  StatusOnlineIcon,
  SwitchVerticalIcon,
  TerminalIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import MonorepoToolsLogos from './monorepo-tools-logos';

const Supported = () => (
  <span
    title="natively supported"
    className="mr-3 inline-flex items-center rounded-full text-green-600"
  >
    <CheckCircleIcon className="h-5 w-5" />
    <span className="sr-only">natively supported</span>
  </span>
);
const NotSupported = () => (
  <span
    title="not supported"
    className="mr-3 inline-flex items-center rounded-full text-red-600"
  >
    <XCircleIcon className="h-5 w-5" />
    <span className="sr-only">not supported</span>
  </span>
);
const ManualImplementation = () => (
  <span
    title="implement your own"
    className="mr-3 inline-flex items-center rounded-full text-yellow-600"
  >
    <ExclamationCircleIcon className="h-5 w-5" />
    <span className="sr-only">implement your own</span>
  </span>
);

export function MonorepoFeatures() {
  return (
    <div
      id="monorepo-tools"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo tools
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-tools"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            How do they compare? let's see how each tools answer to each
            features.
          </p>
        </div>

        <MonorepoToolsLogos />

        {/*FAST*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Fast
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Local Computation Caching*/}
        <div
          id="local-computation-caching"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <DocumentDownloadIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local computation caching
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#local-computation-caching"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to store and replay file and process output of tasks.
              On the same machine, you will never build or test the same thing
              twice.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/local-computation-caching.svg"
                alt="local computation caching schema"
              />
            </div>
          </div>

          {/* (alphabetical order) */}
          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna doesn't support it and will always rerun everything from
                scratch.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
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
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush supports it, leveraging the system tar command to restore
                files more quickly.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Local task orchestration*/}
        <div
          id="local-task-orchestration"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <SwitchVerticalIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local task orchestration
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#local-task-orchestration"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to run tasks in the correct order and in parallel. All
              the listed tools can do it in about the same way, except Lerna,
              which is more limited.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/local-task-orchestration.svg"
                alt="local task orchestration schema"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna's ability to do task coordination is more limited compared
                to the rest of the tools. It is not able to mix and match
                different targets (e.g., tests and builds), so it results in
                more idle time.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush supports it. Commands can be modeled either as a simple
                script or as separate "phases" such as build, test, etc.
              </dd>
            </div>{' '}
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Distributed Computation Caching*/}
        <div
          id="distributed-computation-caching"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CloudDownloadIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed computation caching
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#distributed-computation-caching"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to share cache artifacts across different
              environments. This means that your whole organisation, including
              CI agents, will never build or test the same thing twice.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/distributed-computation-caching.svg"
                alt="distributed computation caching schema"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna cannot reuse computation across machines.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush has built-in support for Azure and AWS storage, with a
                plugin API allowing custom cache providers.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Distributed Task Execution*/}
        <div
          id="distributed-task-execution"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CollectionIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed task execution
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#distributed-task-execution"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to distribute a command across many machines, while
              largely preserving the dev ergonomics or running it on a single
              machine.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/distributed-tasks-execution.svg"
                alt="distributed tasks execution"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's implementation is the most sophisticated one and can
                scale to repos with billions of lines of code. It's also
                difficult to set up.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx's implementation isn't as sophisticated as Bazel's but it can
                be turned on with a small configuration change.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Rush provides this feature by optionally integrating with
                Microsoft's BuildXL accelerator.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo doesn't support it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Transparent Remote Execution*/}
        <div
          id="transparent-remote-execution"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <ServerIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Transparent remote execution
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#transparent-remote-execution"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to execute any command on multiple machines while
              developing locally.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                This is Bazel's biggest differentiator.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Rush doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo doesn't support it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Affected*/}
        <div
          id="detecting-affected-projects-packages"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <LightBulbIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Detecting affected projects/packages
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#detecting-affected-projects-packages"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

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
                alt="dependency graph"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel doesn't support it, but it provides the required metadata
                making it possible to write such functionality youself.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx supports it. Its implementation doesn't just look at what
                files changed but also at the nature of the change.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                The command line parameters for project selection can detect
                which projects are impacted by a Git diff. Rush also provides a
                PackageChangeAnalyzer API for automation scenarios.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*UNDERSTANDABLE*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Understandable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Workspace analysis*/}
        <div
          id="workspace-analysis"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <PresentationChartLineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Workspace analysis
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#workspace-analysis"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to understand the project graph of the workspace
              without extra configuration.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/workspace-analysis.svg"
                alt="workspace analysis"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel allows developers to author BUILD files. Some companies
                build tools that analyse workspace sources and generate the
                BUILD files.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage analyses package.json files.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna analyses package.json files.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                By default, Nx analyses <code>package.json</code>, JavaScript,
                and TypeScript files. It's pluggable and can be extended to
                support other platforms (e.g, Go, Java, Rust).
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush projects have the same package.json file and build scripts
                as a single-repo project. Tooling/configuration is shared across
                the monorepo by optionally creating "rig packages."
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo analyses package.json files.
              </dd>
            </div>
          </dl>
        </div>

        {/*Dependency Graph Visualization*/}
        <div
          id="dependency-graph-visualization"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <PresentationChartLineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dependency graph visualization
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#dependency-graph-visualization"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

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

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel's implementation supports a custom query language to
                filter out node you are not interested in.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx comes ith an interactive visualizer that allows you to filter
                and explore large workspaces.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo's implementation is not interactive and doesn't
                provide any way to filter the graph, so works for small repos.
              </dd>
            </div>
          </dl>
        </div>

        {/*MANAGEMENT*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Managable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Code Sharing*/}
        <div
          id="source-code-sharing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CodeIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Source code sharing
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#source-code-sharing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Facilitates sharing of discrete pieces source code.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/source-code-sharing.svg"
                alt="source code sharing"
              />
            </div>
          </div>
          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it. Any folder of files can be marked as a
                project and can be shared. Bazel build rules ere used to enable
                sharing without hurting dev ergonomics.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it. Only npm packages can be shared.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna supports it. Only npm packages can be shared.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
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
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush supports it, however discourages importing code from
                folders that are not a declared npm dependency. This ensures
                that projects can be easily moved between monorepos. For
                situations where creating a package is too much overhead,
                "packlets" offer a lightweight alternative.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it. Only npm packages can be shared.
              </dd>
            </div>
          </dl>
        </div>

        {/*Consistent Tooling*/}
        <div
          id="consistent-tooling"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <TerminalIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Consistent tooling
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#consistent-tooling"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The tool helps you get a consistent experience regardless of what
              you use to develop your projects: different JavaScript frameworks,
              Go, Java, etc.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/consistent-tooling.svg"
                alt="consistent tooling schema"
              />
            </div>
          </div>
          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's build rules act like plugins for different technologies
                and frameworks.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage can only run npm scripts.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna can only run npm scripts.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx is pluggable. It is able to invoke npm scripts by default,
                but can be extended to invoke other tools (e.g., Gradle).
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Rush only builds TypeScript/JavaScript projects, recommending a
                decoupled approach where native components are built separately
                using native toolchains or BuildXL. Ideally Node.js is the only
                required prerequisite for monorepo developers.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo can only run npm scripts.
              </dd>
            </div>
          </dl>
        </div>

        {/*Code Generation*/}
        <div
          id="code-generation"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CogIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code generation
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#code-generation"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Native support for generating code
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/code-generation.svg"
                alt="code generation"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx comes with powerful code generation capabilities. It uses a
                virtual file system and provides editor integration. Nx plugins
                provided generators for popular frameworks. Other generators can
                be used as well.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                The Rush maintainers suggest to maintain project templates as
                ordinary projects in the monorepo, to ensure they compile
                without errors. A project scaffolding command is available via a
                community plugin.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
          </dl>
        </div>

        {/*Explicit Project Constrains*/}
        <div
          id="explicit-project-constrains"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <StatusOnlineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Project constraints and visibility
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#explicit-project-constrains"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Supports definition of rules to constrain dependency relationships
              within the repo. For instance, developers can mark some projects
              as private to their team so no one else can depend on them.
              Developers can also mark projects based on the technology used
              (e.g., React or Nest.js) and make sure that backend projects don't
              import frontend ones.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/project-constrains-and-visibility.svg"
                alt="explicit project constrains"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel supports visibility rules which help you separate what is
                private from what is public, what can be shared, etc.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Developers can annotated projects in any way they seem fit,
                establish invariants, and Nx will make sure they hold. It allows
                developers to annotate what is private and what is not, what is
                experimental and what is stable, etc. Nx also allows you to
                define public API for each package, so other developers aren't
                able to deep import into them.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Rush can optionally require approvals when introducing new NPM
                dependencies (internal or external), based on project type. It
                also supports version policies for NPM publishing.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default MonorepoFeatures;
