import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/24/outline';

interface Feature {
  name: string;
  description: string;
  image?: string;
}

const categories: {
  id: string;
  label: string;
  features: Feature[];
}[] = [
  {
    id: 'fast',
    label: 'Fast',
    features: [
      {
        name: 'Local Caching',
        description:
          'Store and replay file and process output of tasks. On the same machine, you never build or test the same thing twice.',
        image: '/images/local-computation-caching.svg',
      },
      {
        name: 'Remote Caching',
        description:
          'Share computation results across your entire organization. If a teammate already built it, you get the result instantly.',
        image: '/images/distributed-computation-caching.svg',
      },
      {
        name: 'Distributed Task Execution',
        description:
          'Distribute work across multiple machines while preserving the developer experience of running everything locally.',
        image: '/images/distributed-tasks-execution.svg',
      },
      {
        name: 'Affected Detection',
        description:
          'Determine which projects are affected by a given change and only run the relevant tasks. Skip everything else.',
        image: '/images/affected-detection.svg',
      },
      {
        name: 'Task Splitting',
        description:
          'Break large tasks into fine-grained cacheable units. Each slice can be cached and distributed independently.',
        image: '/images/task-splitting.svg',
      },
      {
        name: 'Deflaking',
        description:
          'Automatically detect flaky tests, quarantine them, and re-run only what failed. Keep your CI signal clean.',
        image: '/images/deflaking.svg',
      },
    ],
  },
  {
    id: 'understandable',
    label: 'Understandable',
    features: [
      {
        name: 'Workspace Analysis',
        description:
          'Automatically analyzes your workspace to understand how projects relate to each other, what each project contains, and what metadata is available.',
        image: '/images/workspace-analysis.svg',
      },
      {
        name: 'Project Graph Visualization',
        description:
          'Visualize dependency relationships between projects with an interactive, filterable graph. Understand your architecture at a glance.',
        image: '/images/dependency-graph.svg',
      },
    ],
  },
  {
    id: 'manageable',
    label: 'Manageable',
    features: [
      {
        name: 'Code Sharing',
        description:
          'Share code between projects without publishing to a registry. Creating a shared library is as simple as creating a folder — existing CI handles everything.',
        image: '/images/source-code-sharing.svg',
      },
      {
        name: 'Polyglot Support',
        description:
          'Same commands for building, testing, and serving regardless of what language, framework, or tool a project uses.',
        image: '/images/consistent-tooling.svg',
      },
      {
        name: 'Code Generation',
        description:
          'Scaffold new projects, libraries, and components with a single command. Generators ensure consistency and encode organizational best practices.',
        image: '/images/code-generation.svg',
      },
      {
        name: 'Project Constraints',
        description:
          'Define and enforce rules about which projects can depend on each other. Prevent architectural drift and keep boundaries clean as the codebase scales.',
        image: '/images/project-constrains-and-visibility.svg',
      },
    ],
  },
  {
    id: 'ai-ready',
    label: 'AI-Ready',
    features: [
      {
        name: 'AI Skills and MCP',
        description:
          'Monorepo tooling can expose its capabilities to AI agents: project graph awareness, task execution, code generation, and more. Agents that understand your workspace structure make better decisions and produce higher-quality code.',
        image: '/images/mcp-skills.svg',
      },
      {
        name: 'Agentic CI',
        description:
          'AI-powered CI that goes beyond just running tasks. Self-healing broken PRs by diagnosing failures and proposing fixes, automatically re-running flaky tasks, and providing intelligent feedback to developers.',
        image: '/images/self-healing-ci.svg',
      },
    ],
  },
];

export function BestInClassFeatures(): JSX.Element {
  const [activeId, setActiveId] = useState<string>('fast');

  const activeCategory = categories.find((c) => c.id === activeId)!;

  return (
    <div
      id="best-in-class"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative text-center">
          <div className="group text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # What a Best-in-Class Tool Provides
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#best-in-class"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            A monorepo is only as good as the tool that powers it. Here&rsquo;s
            what you should expect.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-12 grid grid-cols-2 gap-3 text-lg font-semibold sm:grid-cols-4 lg:mt-16 lg:text-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`col-span-1 flex justify-center rounded px-8 py-8 transition ${
                activeId === cat.id
                  ? 'bg-yellow-500 text-gray-800'
                  : 'bg-slate-100 text-gray-700 hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 dark:text-gray-300 hover:dark:bg-yellow-500 hover:dark:text-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features for active tab */}
        <div className="mt-4 rounded-lg border border-slate-200/50 bg-white/50 p-6 dark:border-slate-700/50 dark:bg-slate-900/50 lg:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {activeCategory.features.map((feature) => (
              <div key={feature.name} className="flex flex-col overflow-hidden rounded-lg bg-white dark:bg-slate-800 sm:flex-row sm:items-stretch">
                <div className="flex flex-1 flex-col justify-center p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
                {feature.image && (
                  <div className="flex items-center justify-center bg-slate-50 p-4 dark:bg-slate-700/50 sm:w-[40%] sm:shrink-0">
                    <img
                      loading="lazy"
                      className="h-auto w-full max-w-[200px] sm:max-w-none"
                      src={feature.image}
                      alt={`${feature.name} illustration`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <a
              href="https://nx.dev"
              className="font-semibold text-blue-600 underline decoration-blue-600/30 underline-offset-4 transition hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              Nx
            </a>{' '}
            checks all these boxes.{' '}
            <a
              href="/compare"
              className="font-semibold text-blue-600 underline decoration-blue-600/30 underline-offset-4 transition hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              Compare tools &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
