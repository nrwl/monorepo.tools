import { LinkIcon } from '@heroicons/react/24/outline';
import { ProjectGraphTerminalAnimation } from './project-graph-terminal-animation';
import { ProjectDetailsTerminalAnimation } from './project-details-terminal-animation';
import { DomainGridAnimation } from './domain-grid-animation';

export function HowToolsEnableAI(): JSX.Element {
  return (
    <div
      id="how-tools-enable-ai"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h1
            className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            # Teaching AI Agents to Navigate Your Monorepo
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#how-tools-enable-ai"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Monorepos can be massive. Rather than letting AI agents grep
            through hundreds of projects, monorepo tools can{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              expose the workspace structure directly
            </mark>
            : <strong>what projects exist, how they relate, and what tasks
            can be run</strong>. The result is faster discovery, better
            understanding, and significantly fewer tokens wasted on
            exploration.
          </p>
        </div>

        {/* Before/After comparison */}
        <div className="mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center">
            <div className="relative">
              <img
                className="mx-auto rounded-lg shadow-lg"
                width={400}
                src="/images/ai/ai-only-seeing-files.avif"
                alt="Traditional AI agent grepping through individual files without architectural understanding"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  Basic AI Agent
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center lg:mt-0">
            <div className="relative">
              <img
                className="mx-auto rounded-lg shadow-lg"
                width={400}
                src="/images/ai/ai-seeing-project-graph.avif"
                alt="Monorepo-aware AI agent with access to the project graph and workspace structure"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  Monorepo-Aware AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Graph */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2
              id="project-graph"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              The Project Graph
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#project-graph"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Most monorepo tools maintain a project graph: a structured map of
              every project in the workspace and how they depend on each other.
              When exposed to AI agents, it gives them{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                instant architectural understanding
              </mark>{' '}
              without reading a single file.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The agent can query this graph to discover which projects exist,
              trace dependency chains, and understand blast radius: if{' '}
              <code className="rounded bg-slate-200 px-1 text-sm dark:bg-slate-700">lib-api</code>{' '}
              changes, what downstream apps and libraries are affected? Instead
              of grepping through import statements, the agent gets the answer
              in a single structured call.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <ProjectGraphTerminalAnimation />
          </div>
        </div>

        {/* Project Metadata */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="lg:order-2">
            <h2
              id="project-metadata"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Expose Project-Level Knowledge
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#project-metadata"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              AI agents should not have to parse Vite configs, Go Makefiles,
              and Python pyproject.toml to understand what a project can do.
              Monorepo tools like Nx expose{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                structured metadata per project
              </mark>
              : available tasks, cache inputs/outputs, and configuration, all
              through dedicated commands like{' '}
              <code className="rounded bg-slate-200 px-1 text-sm dark:bg-slate-700">nx show project</code>.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              One interface, regardless of language or framework. The monorepo
              tool normalizes the complexity.
            </p>
          </div>
          <div className="mt-8 lg:order-1 lg:mt-0">
            <ProjectDetailsTerminalAnimation />
          </div>
        </div>

        {/* Architecture Map via Tags/Classification */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2
              id="architecture-map"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Give AI the Architecture Map
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#architecture-map"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              By default, an agent sees individual files. The project graph
              adds a second level: projects and their relationships. But
              there's a third level that ties it all together:{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                domain classification
              </mark>
              . Projects grouped into higher-level concepts like "shop",
              "auth", or "shared infrastructure".
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Together, these three levels give the agent progressive
              understanding. It starts at the domain level to identify the
              relevant area, uses the project graph to find the right
              projects within that domain, then drops into files only when
              needed.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Nx provides a{' '}
              <strong>tagging system</strong> for this: projects are
              classified into domains, and lint rules enforce boundaries
              between them. The same mechanism that keeps your architecture
              clean gives AI agents an architectural map to navigate by.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <DomainGridAnimation />
          </div>
        </div>

      </div>
    </div>
  );
}
