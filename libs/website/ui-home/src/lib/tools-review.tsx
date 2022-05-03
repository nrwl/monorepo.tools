import { ReactComponentElement } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  LinkIcon,
  MinusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';

type Supports = 'supported' | 'notSupported' | 'manualImplementation';

interface Item {
  title: string;
  tooltip: string;
  features: { title: string; value: Supports }[];
  link: string;
}

// alphabetical order
const tools = [
  {
    title: 'Bazel',
    organization: 'Google',
    organizationUrl: 'https://google.com/?utm_source=monorepo.tools',
    description:
      'A fast, scalable, multi-language and extensible build system.',
  },
  {
    title: 'Earthly',
    organization: 'Earthly Technologies',
    organizationUrl: 'https://earthly.dev/?utm_source=monorepo.tools',
    description: 'The effortless CI/CD framework that runs anywhere.',
  },
  {
    title: 'Gradle',
    organization: 'Gradle, Inc',
    organizationUrl: 'https://gradle.org/?utm_source=monorepo.tools',
    description:
      'A fast, flexible polyglot build system designed for multi-project builds.',
  },
  {
    title: 'Lage',
    organization: 'Microsoft',
    organizationUrl: 'https://microsoft.com/?utm_source=monorepo.tools',
    description: 'Task runner in JS monorepos',
  },
  {
    title: 'Lerna',
    description:
      'A tool for managing JavaScript projects with multiple packages.',
  },
  {
    title: 'Nx',
    organization: 'Nrwl',
    organizationUrl: 'https://nrwl.io/?utm_source=monorepo.tools',
    description:
      'Next generation build system with first class monorepo support and powerful integrations.',
  },
  {
    title: 'Rush',
    organization: 'Microsoft',
    organizationUrl: 'https://microsoft.com/?utm_source=monorepo.tools',
    description:
      'Geared for large monorepos with lots of teams and projects. Part of the Rush Stack family of projects.',
  },
  {
    title: 'Turborepo',
    organization: 'Vercel',
    organizationUrl: 'https://vercel.com/?utm_source=monorepo.tools',
    description:
      'The high-performance build system for JavaScript & TypeScript codebases.',
  },
];
const fast: Item[] = [
  {
    title: 'Local computation caching',
    link: '#local-computation-caching',
    tooltip:
      'The ability to store and replay file and process output of tasks.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'supported' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Lerna', value: 'notSupported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
  {
    title: 'Local task orchestration',
    link: '#local-task-orchestration',
    tooltip: 'The ability to run tasks in the correct order and in parallel.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'supported' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
  {
    title: 'Distributed computation caching',
    link: '#distributed-computation-caching',
    tooltip:
      'The ability to share cache artifacts across different environments.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'notSupported' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Lerna', value: 'notSupported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
  {
    title: 'Distributed task execution',
    link: '#distributed-task-execution',
    tooltip: 'The ability to distribute a command across many machines.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'notSupported' },
      { title: 'Gradle', value: 'manualImplementation' },
      { title: 'Lage', value: 'notSupported' },
      { title: 'Lerna', value: 'notSupported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'manualImplementation' },
      { title: 'Turborepo', value: 'notSupported' },
    ],
  },
  {
    title: 'Transparent remote execution',
    link: '#transparent-remote-execution',
    tooltip:
      'The ability to execute any command on multiple machines while developing locally.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'supported' },
      { title: 'Gradle', value: 'notSupported' },
      { title: 'Lage', value: 'notSupported' },
      { title: 'Lerna', value: 'notSupported' },
      { title: 'Nx', value: 'notSupported' },
      { title: 'Rush', value: 'notSupported' },
      { title: 'Turborepo', value: 'notSupported' },
    ],
  },
  {
    title: 'Detecting affected projects/packages',
    link: '#detecting-affected-projects-packages',
    tooltip:
      'Determine what might be affected by a change, to run only build/test affected projects.',
    features: [
      { title: 'Bazel', value: 'manualImplementation' },
      { title: 'Earthly', value: 'supported' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
];
const understandable: Item[] = [
  {
    title: 'Workspace analysis',
    link: '#workspace-analysis',
    tooltip:
      'The ability to understand the understand the project graph of the workspace without extra configuration.',
    features: [
      { title: 'Bazel', value: 'manualImplementation' },
      { title: 'Earthly', value: 'manualImplementation' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
  {
    title: 'Dependency graph visualization',
    link: '#dependency-graph-visualization',
    tooltip:
      'Visualize dependency relationships between projects and/or tasks.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'manualImplementation' },
      { title: 'Gradle', value: 'manualImplementation' },
      { title: 'Lage', value: 'manualImplementation' },
      { title: 'Lerna', value: 'manualImplementation' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'manualImplementation' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
];
const manageable: Item[] = [
  {
    title: 'Source code sharing',
    link: '#source-code-sharing',
    tooltip: 'Facilitates sharing of discrete pieces source code.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'supported' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
    ],
  },
  {
    title: 'Consistent tooling',
    link: '#consistent-tooling',
    tooltip:
      'The tool helps you get a consistent experience regardless of what you use to develop your projects: different JavaScript frameworks, Go, Java, etc.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'supported' },
      { title: 'Gradle', value: 'supported' },
      { title: 'Lage', value: 'notSupported' },
      { title: 'Lerna', value: 'notSupported' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'notSupported' },
      { title: 'Turborepo', value: 'notSupported' },
    ],
  },
  {
    title: 'Code generation',
    link: '#code-generation',
    tooltip: 'Native support for generating code',
    features: [
      { title: 'Bazel', value: 'manualImplementation' },
      { title: 'Earthly', value: 'manualImplementation' },
      { title: 'Gradle', value: 'manualImplementation' },
      { title: 'Lage', value: 'manualImplementation' },
      { title: 'Lerna', value: 'manualImplementation' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'manualImplementation' },
      { title: 'Turborepo', value: 'manualImplementation' },
    ],
  },
  {
    title: 'Project constraints and visibility',
    link: '#explicit-project-constrains',
    tooltip:
      'Supports definition of rules to constrain dependency relationships within the repo.',
    features: [
      { title: 'Bazel', value: 'supported' },
      { title: 'Earthly', value: 'manualImplementation' },
      { title: 'Gradle', value: 'manualImplementation' },
      { title: 'Lage', value: 'manualImplementation' },
      { title: 'Lerna', value: 'manualImplementation' },
      { title: 'Nx', value: 'supported' },
      { title: 'Rush', value: 'supported' },
      { title: 'Turborepo', value: 'manualImplementation' },
    ],
  },
];
const valuesDictionary: Record<Supports, () => ReactComponentElement<any>> = {
  supported: () => (
    <span
      title="natively supported"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-green-600"
    >
      <CheckCircleIcon className="h-5 w-5" />
      <span className="sr-only">natively supported</span>
    </span>
  ),
  notSupported: () => (
    <span
      title="not supported"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-slate-400"
    >
      <MinusIcon className="h-5 w-5" />
      <span className="sr-only">not supported</span>
    </span>
  ),
  manualImplementation: () => (
    <span
      title="implement your own"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-yellow-600"
    >
      <ExclamationCircleIcon className="h-5 w-5" />
      <span className="sr-only">implement your own</span>
    </span>
  ),
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function ToolsReview() {
  return (
    <div
      data-test-id="tools-review"
      id="tools-review"
      className="bg-slate-50 dark:bg-slate-800"
    >
      <div className="relative">
        <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <div className="group text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <span className="block lg:inline">Many solutions,</span>
            <span className="block lg:inline"> for different goals</span>
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#tools-review"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Each tool fits a specific set of needs and gives you a precise set
            of features. <br />
            Depending on your needs and constraints, we&apos;ll help you decide
            which tools best suit you.
          </p>
        </div>
      </div>

      {/* Feature comparison (up to lg) */}
      <section className="lg:hidden">
        <div className="mx-auto max-w-2xl space-y-16 py-16 px-4 sm:px-6">
          {tools.map((tool, toolIndex) => (
            <div
              key={tool.title}
              className="border-t border-slate-100 dark:border-slate-900"
            >
              <div className="-mt-px border-t-2 pt-6 sm:w-1/2">
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {tool.title}{' '}
                  {tool.organization ? (
                    <span className="ml-2 text-xs font-normal">
                      (by {tool.organization})
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  &ldquo;{tool.description}&rdquo;
                </p>
              </div>
              <div className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
                Fast
              </div>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden sm:block"
                >
                  <div className="absolute right-0 h-full w-1/2 rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
                </div>

                <div className="relative rounded-lg bg-slate-100 py-3 px-4 shadow ring-1 ring-black ring-opacity-5 dark:bg-slate-700 sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0">
                  <dl className="divide-y divide-slate-300 dark:divide-slate-600">
                    {fast.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dt className="flex pr-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                          <a
                            href={feature.link}
                            className="mr-1 inline-flex px-2  text-slate-500"
                          >
                            <span className="sr-only">More info</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" />
                          </a>
                          {feature.title}
                        </dt>
                        <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                          {valuesDictionary[
                            feature.features[toolIndex].value
                          ]()}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden sm:block"
                >
                  <div className="absolute right-0 h-full w-1/2 rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>

              <div className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
                Understandable
              </div>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden sm:block"
                >
                  <div className="absolute right-0 h-full w-1/2 rounded-lg bg-slate-100 dark:bg-slate-700" />
                </div>

                <div className="relative rounded-lg bg-slate-100 py-3 px-4 shadow ring-1 ring-black ring-opacity-5 dark:bg-slate-700 sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0">
                  <dl className="divide-y divide-slate-300 dark:divide-slate-600">
                    {understandable.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dt className="flex text-sm font-medium text-gray-700 dark:text-gray-300 sm:pr-4">
                          <a
                            href={feature.link}
                            className="mr-1 inline-flex px-2 text-slate-500"
                          >
                            <span className="sr-only">More info</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" />
                          </a>
                          {feature.title}
                        </dt>
                        <dd className="text-center sm:px-4">
                          {valuesDictionary[
                            feature.features[toolIndex].value
                          ]()}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden sm:block"
                >
                  <div className="absolute right-0 h-full w-1/2 rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>

              <div className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
                Manageable
              </div>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden sm:block"
                >
                  <div className="absolute right-0 h-full w-1/2 rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
                </div>

                <div className="relative rounded-lg bg-slate-100 py-3 px-4 shadow ring-1 ring-black ring-opacity-5 dark:bg-slate-700 sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0">
                  <dl className="divide-y divide-slate-300 dark:divide-slate-600">
                    {manageable.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dt className="flex text-sm font-medium text-gray-700 dark:text-gray-300 sm:pr-4">
                          <a
                            href={feature.link}
                            className="mr-1 inline-flex px-2  text-slate-500"
                          >
                            <span className="sr-only">More info</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" />
                          </a>
                          {feature.title}
                        </dt>
                        <dd className="text-center sm:px-4">
                          {valuesDictionary[
                            feature.features[toolIndex].value
                          ]()}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden sm:block"
                >
                  <div className="absolute right-0 h-full w-1/2 rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section className="hidden lg:block">
        <div className="mx-auto max-w-7xl py-24 px-8">
          <div className="flex w-full items-stretch border-t border-slate-100 dark:border-slate-900">
            <div className="-mt-px flex w-[14%] items-end py-6 pr-4" />
            {tools.map((tool, toolIndex) => (
              <div
                key={tool.title}
                aria-hidden="true"
                className={classNames(
                  toolIndex === tools.length - 1
                    ? 'w-[11%] pl-4'
                    : 'w-[12.5%] px-4',
                  '-mt-px '
                )}
              >
                <div className="border-t-2 border-transparent py-6">
                  <p className="text-md font-bold text-gray-700 dark:text-gray-300">
                    {tool.title}{' '}
                    {tool.organization ? (
                      <span className="ml-2 text-xs font-normal">
                        (by {tool.organization})
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    &ldquo;{tool.description}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full items-stretch border-t border-slate-100 dark:border-slate-900">
            <div className="-mt-px flex w-[12.5%] items-end py-6 pr-4">
              <h3 className="mt-auto text-sm font-bold text-gray-700 dark:text-gray-300">
                Fast
              </h3>
            </div>
          </div>
          <div className="relative">
            {/* Fake card backgrounds */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true"
            >
              <div className="w-[14%] pr-4" />
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
              <div className="w-[11%] pl-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {tools.map((tool) => (
                    <th key={tool.title} scope="col">
                      <span className="sr-only">{tool.title}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 dark:divide-slate-600">
                {fast.map((feature) => (
                  <tr key={feature.title}>
                    <th
                      scope="row"
                      className="w-[14%] py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <a
                        href={feature.link}
                        title={'More on ' + feature.title}
                        className="hover:underline"
                      >
                        {feature.title}
                      </a>
                    </th>
                    {feature.features.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.features.length - 1
                            ? 'w-[11%] pl-4'
                            : 'w-[12.5%] px-4',
                          'relative py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {valuesDictionary[tier.value]()}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true"
            >
              <div className="w-[14%] pr-4" />
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[11%] pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
            Understandable
          </h3>
          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true"
            >
              <div className="w-[14%] pr-4" />
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[11%] pl-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Tool comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Tool</span>
                  </th>
                  {tools.map((tool) => (
                    <th key={tool.title} scope="col">
                      <span className="sr-only">{tool.title}</span>
                    </th>
                  ))}
                </tr>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Organization</span>
                  </th>
                  {tools.map((tool) => (
                    <th key={tool.title} scope="col">
                      <span className="sr-only">{tool.organization}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 dark:divide-slate-600">
                {understandable.map((feature) => (
                  <tr key={feature.title}>
                    <th
                      scope="row"
                      className="w-[14%] py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <a
                        href={feature.link}
                        title={'More on ' + feature.title}
                        className="hover:underline"
                      >
                        {feature.title}
                      </a>
                    </th>
                    {feature.features.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.features.length - 1
                            ? 'w-[11%] pl-4'
                            : 'w-[12.5%] px-4',
                          'relative py-0 text-center'
                        )}
                      >
                        {valuesDictionary[tier.value]()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true"
            >
              <div className="w-[14%] pr-4" />
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[11%] pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
            Manageable
          </h3>
          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true"
            >
              <div className="w-[14%] pr-4" />
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow-md dark:bg-slate-700" />
              </div>
              <div className="w-[11%] pl-4">
                <div className="h-full w-full rounded-lg bg-slate-100 shadow dark:bg-slate-700" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Tool comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Tool</span>
                  </th>
                  {tools.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 dark:divide-slate-600">
                {manageable.map((feature) => (
                  <tr key={feature.title}>
                    <th
                      scope="row"
                      className="w-[14%] py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <a
                        href={feature.link}
                        title={'More on ' + feature.title}
                        className="hover:underline"
                      >
                        {feature.title}
                      </a>
                    </th>
                    {feature.features.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.features.length - 1
                            ? 'w-[11%] pl-4'
                            : 'w-[12.5%] px-4',
                          'relative py-0 text-center'
                        )}
                      >
                        {valuesDictionary[tier.value]()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true"
            >
              <div className="w-[14%] pr-4" />
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[12.5%] px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-[11%] pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-2 mb-12 flex max-w-7xl justify-end px-8 text-xs">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span
                title="natively supported"
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-green-600"
              >
                <CheckCircleIcon className="h-4 w-4" />
              </span>
              Natively supported
            </div>
            <div className="flex items-center">
              <span
                title="natively supported"
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-slate-400"
              >
                <MinusIcon className="h-4 w-4" />
              </span>
              Not supported
            </div>
            <div className="flex items-center">
              <span
                title="natively supported"
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-yellow-600"
              >
                <ExclamationCircleIcon className="h-4 w-4" />
              </span>
              Implement your own
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolsReview;
