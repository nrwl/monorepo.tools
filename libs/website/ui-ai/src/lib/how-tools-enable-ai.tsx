import { LinkIcon } from '@heroicons/react/24/outline';
import {
  CircleStackIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import { ProjectGraphTerminalAnimation } from './project-graph-terminal-animation';
import { ProjectDetailsTerminalAnimation } from './project-details-terminal-animation';

function TerminalPlaceholder({ title }: { title: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 text-xs text-slate-400">{title}</span>
      </div>
      <div className="flex h-48 items-center justify-center px-4 py-6">
        <p className="text-sm text-slate-500">
          Interactive demo coming soon...
        </p>
      </div>
    </div>
  );
}

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
            Monorepos can be massive. AI agents are getting better and better
            at grepping through codebases, but in a workspace with hundreds of
            projects, that approach only gets you so far. You can{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              dramatically accelerate AI
            </mark>{' '}
            by giving it a higher-level understanding of how the workspace is
            structured: <strong>what projects exist, how they relate to each
            other, and what tasks can be run</strong>.
          </p>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            The result: better understanding, faster discovery, and
            significantly fewer tokens spent on exploration.
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
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Most monorepo tools maintain a project graph: a structured map of
              every project in the workspace and how they depend on each other.
              When exposed to AI agents, it gives them{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                instant architectural understanding
              </mark>{' '}
              without reading a single file.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
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
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
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
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              One interface, regardless of language or framework. The monorepo
              tool normalizes the complexity.
            </p>
          </div>
          <div className="mt-8 lg:order-1 lg:mt-0">
            <ProjectDetailsTerminalAnimation />
          </div>
        </div>

        {/* Integration Mechanisms */}
        <div className="relative mx-auto mt-24 max-w-xl lg:mt-36 lg:max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="integration-mechanisms"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Integration Mechanisms
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#integration-mechanisms"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              How monorepo tools expose workspace intelligence to AI agents
            </p>
          </div>

          {/* MCP */}
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <CircleStackIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Model Context Protocol (MCP)
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                MCP is an open protocol that lets AI agents communicate with
                external tools through a standardized interface. For monorepos,
                this means AI can query the project graph, retrieve metadata,
                and execute tasks, all through structured tool calls rather
                than file parsing.
              </p>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                Instead of asking an agent to grep for package.json files, the
                AI calls a tool that returns the exact information it needs:
                project dependencies, available tasks, affected projects from a
                change.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <TerminalPlaceholder title="MCP: Querying the project graph" />
            </div>
          </div>

          {/* Skills */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="lg:order-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <PuzzlePieceIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Skills
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Skills are reusable, composable instructions that teach AI
                agents how to perform specific monorepo workflows. They encode
                domain knowledge, like how to create a new library, run
                affected tests, or generate code, so the agent doesn't have to
                figure out the right commands from scratch every time.
              </p>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                Unlike one-off prompts, skills are versioned and shared across a
                team, ensuring consistent AI behavior across the organization.
              </p>
            </div>
            <div className="mt-8 lg:order-1 lg:mt-0">
              <TerminalPlaceholder title="Skills: Teaching AI monorepo workflows" />
            </div>
          </div>

          {/* Agent Experience (Ax) */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <CommandLineIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Agent Experience (Ax)
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                CLI tools designed with AI agents as first-class users. This
                means discoverable commands, structured JSON output, clear error
                messages, and predictable behavior. Everything an autonomous
                agent needs to explore and operate within a monorepo without
                human guidance.
              </p>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                Good agent experience means the CLI itself becomes a navigation
                tool: the agent can list projects, inspect dependencies, and run
                targeted tasks without needing to understand the underlying
                build system.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <TerminalPlaceholder title="Ax: CLI designed for AI agents" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
