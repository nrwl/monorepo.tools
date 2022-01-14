import { ReactComponentElement } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';

type Supports = 'supported' | 'notSupported' | 'manualImplementation';

interface Item {
  title: string;
  tooltip: string;
  features: { title: string; value: Supports }[];
  link: string;
}

const tools = [
  {
    title: 'Nx',
    organization: 'Nrwl',
    organizationUrl: 'https://nrwl.io',
    description:
      'Next generation build system with first class monorepo support and powerful integrations.',
  },
  {
    title: 'Bazel',
    organization: 'Google',
    organizationUrl: 'https://google.com',
    description:
      'A fast, scalable, multi-language and extensible build system.',
  },
  {
    title: 'Lage',
    organization: 'Microsoft',
    organizationUrl: 'https://microsoft.com',
    description: 'Task runner in JS monorepos',
  },
  {
    title: 'Turborepo',
    organization: 'Vercel',
    organizationUrl: 'https://vercel.com',
    description:
      'The high-performance build system for JavaScript & TypeScript codebases.',
  },
  {
    title: 'Lerna',
    description:
      'A tool for managing JavaScript projects with multiple packages.',
  },
];
const fast: Item[] = [
  {
    title: 'Local task orchestration',
    link: '#local-task-orchestration',
    tooltip: 'The ability to run tasks in the correct order and in parallel.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
    ],
  },
  {
    title: 'Local computation caching',
    link: '#local-computation-caching',
    tooltip:
      'The ability to store and replay file and process output of tasks.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'notSupported' },
    ],
  },
  {
    title: 'Distributed computation caching',
    link: '#distributed-computation-caching',
    tooltip:
      'The ability to share cache artifacts across different environments.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'notSupported' },
    ],
  },
  {
    title: 'Distributed task execution',
    link: '#distributed-task-execution',
    tooltip: 'The ability to distribute a command across many machines.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'notSupported' },
      { title: 'Turborepo', value: 'notSupported' },
      { title: 'Lerna', value: 'notSupported' },
    ],
  },
  {
    title: 'Transparent remote execution',
    link: '#transparent-remote-execution',
    tooltip:
      'The ability to execute any command on multiple machines while developing locally.',
    features: [
      { title: 'Nx', value: 'notSupported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'notSupported' },
      { title: 'Turborepo', value: 'notSupported' },
      { title: 'Lerna', value: 'notSupported' },
    ],
  },
  {
    title: 'Detecting affected projects/packages',
    link: '#detecting-affected-project-packages',
    tooltip:
      'Determine what might be affected by a change, to run only build/test affected projects.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'manualImplementation' },
      { title: 'Lage', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
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
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'manualImplementation' },
      { title: 'Lage', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
    ],
  },
  {
    title: 'Dependency graph visualization',
    link: '#dependency-graph-visualization',
    tooltip:
      'Visualize dependency relationships between projects and/or tasks.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'manualImplementation' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'manualImplementation' },
    ],
  },
];
const manageable: Item[] = [
  {
    title: 'Source code sharing',
    link: '#source-code-sharing',
    tooltip: 'Facilitates sharing of discrete pieces source code.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'supported' },
      { title: 'Turborepo', value: 'supported' },
      { title: 'Lerna', value: 'supported' },
    ],
  },
  {
    title: 'Consistent tooling',
    link: '#consisten-tooling',
    tooltip:
      'The tool helps you get a consistent experience regardless of what you use to develop your projects: different JavaScript frameworks, Go, Java, etc.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'notSupported' },
      { title: 'Turborepo', value: 'notSupported' },
      { title: 'Lerna', value: 'notSupported' },
    ],
  },
  {
    title: 'Code generation',
    link: '#code-generation',
    tooltip: 'Native support for generating code',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'manualImplementation' },
      { title: 'Lage', value: 'manualImplementation' },
      { title: 'Turborepo', value: 'manualImplementation' },
      { title: 'Lerna', value: 'manualImplementation' },
    ],
  },
  {
    title: 'Project constraints and visibility',
    link: '#project-constraints-and-visibility',
    tooltip:
      'Supports definition of rules to constrain dependency relationships within the repo.',
    features: [
      { title: 'Nx', value: 'supported' },
      { title: 'Bazel', value: 'supported' },
      { title: 'Lage', value: 'manualImplementation' },
      { title: 'Turborepo', value: 'manualImplementation' },
      { title: 'Lerna', value: 'manualImplementation' },
    ],
  },
];
const valuesDictionary: Record<Supports, () => ReactComponentElement<any>> = {
  supported: () => (
    <span
      title="natively supported"
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-slate-400"
    >
      <CheckCircleIcon className="w-5 h-5" />
      <span className="sr-only">natively supported</span>
    </span>
  ),
  notSupported: () => (
    <span
      title="not supported"
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-slate-400"
    >
      <XCircleIcon className="w-5 h-5" />
      <span className="sr-only">not supported</span>
    </span>
  ),
  manualImplementation: () => (
    <span
      title="implement your own"
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-slate-400"
    >
      <ExclamationCircleIcon className="w-5 h-5" />
      <span className="sr-only">implement your own</span>
    </span>
  ),
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function ToolsReview() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <div className="relative">
        <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <span className="block lg:inline">Many solutions,</span>
            <span className="block lg:inline"> for different goals</span>
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
        <div className="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
          {tools.map((tool, toolIndex) => (
            <div
              key={tool.title}
              className="border-t border-slate-100 dark:border-slate-900"
            >
              <div className="-mt-px pt-6 border-t-2 sm:w-1/2">
                <h3 className="text-gray-700 dark:text-gray-300 text-sm font-bold">
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

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div className="shadow absolute right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-700 rounded-lg" />
                </div>

                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-slate-100 dark:bg-slate-700 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                  <dl className="divide-y divide-slate-300 dark:divide-slate-600">
                    {fast.map((feature) => (
                      <div
                        key={feature.title}
                        className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="flex pr-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                          <a
                            href={feature.link}
                            className="inline-flex mr-1 px-2  text-slate-500"
                          >
                            <span className="sr-only">More info</span>
                            <QuestionMarkCircleIcon className="w-5 h-5" />
                          </a>
                          {feature.title}
                        </dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
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
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
                </div>
              </div>

              <div className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
                Understandable
              </div>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div className="absolute right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-700 rounded-lg" />
                </div>

                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-slate-100 dark:bg-slate-700 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                  <dl className="divide-y divide-slate-300 dark:divide-slate-600">
                    {understandable.map((feature) => (
                      <div
                        key={feature.title}
                        className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="flex text-sm font-medium text-gray-700 dark:text-gray-300 sm:pr-4">
                          <a
                            href={feature.link}
                            className="inline-flex mr-1 px-2 text-slate-500"
                          >
                            <span className="sr-only">More info</span>
                            <QuestionMarkCircleIcon className="w-5 h-5" />
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
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
                </div>
              </div>

              <div className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
                Manageable
              </div>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div className="shadow absolute right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-700 rounded-lg" />
                </div>

                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-slate-100 dark:bg-slate-700 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                  <dl className="divide-y divide-slate-300 dark:divide-slate-600">
                    {manageable.map((feature) => (
                      <div
                        key={feature.title}
                        className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="flex text-sm font-medium text-gray-700 dark:text-gray-300 sm:pr-4">
                          <a
                            href={feature.link}
                            className="inline-flex mr-1 px-2  text-slate-500"
                          >
                            <span className="sr-only">More info</span>
                            <QuestionMarkCircleIcon className="w-5 h-5" />
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
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section className="hidden lg:block">
        <div className="max-w-7xl mx-auto py-24 px-8">
          <div className="w-full border-t border-slate-100 dark:border-slate-900 flex items-stretch">
            <div className="-mt-px w-1/6 py-6 pr-4 flex items-end" />
            {tools.map((tool, toolIndex) => (
              <div
                key={tool.title}
                aria-hidden="true"
                className={classNames(
                  toolIndex === tools.length - 1 ? '' : 'pr-4',
                  '-mt-px pl-4 w-1/6'
                )}
              >
                <div className="border-transparent py-6 border-t-2">
                  <p className="text-gray-700 dark:text-gray-300 text-md font-bold">
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

          <div className="w-full border-t border-slate-100 dark:border-slate-900 flex items-stretch">
            <div className="-mt-px w-1/6 py-6 pr-4 flex items-end">
              <h3 className="mt-auto text-sm font-bold text-gray-700 dark:text-gray-300">
                Fast
              </h3>
            </div>
          </div>
          <div className="relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/6 pr-5" />
              <div className="w-1/6 px-5">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/6 px-5">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 px-5">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 pl-5">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/6 pl-5">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
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
                      className="w-1/6 py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
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
                            ? 'pl-4'
                            : 'px-4',
                          'relative w-1/6 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
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
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/6 pr-5" />
              <div className="w-1/6 px-5">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-5">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-5">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 pl-5">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 pl-5">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
            Understandable
          </h3>
          <div className="mt-6 relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/6 pr-4" />
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 pl-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
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
                      className="w-1/6 py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
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
                            ? 'pl-4'
                            : 'px-4',
                          'relative w-1/6 py-0 text-center'
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
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/6 pr-4" />
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-700 dark:text-gray-300">
            Manageable
          </h3>
          <div className="mt-6 relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/6 pr-4" />
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/6 pl-4">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg shadow" />
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
                      className="w-1/6 py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
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
                            ? 'pl-4'
                            : 'px-4',
                          'relative w-1/6 py-0 text-center'
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
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/6 pr-4" />
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/6 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolsReview;
