import { LinkIcon } from '@heroicons/react/24/outline';
import {
  MapIcon,
  BoltIcon,
  CubeTransparentIcon,
  CircleStackIcon,
  DocumentMagnifyingGlassIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';

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
            How Monorepo Tools Enable AI
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#how-tools-enable-ai"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            From file-level scanning to architectural understanding
          </p>
        </div>

        {/* The Problem: AI Without the Map */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative lg:order-2">
            <h2
              id="ai-without-the-map"
              className="group text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100"
            >
              AI Without the Map
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-without-the-map"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              LLMs rely entirely on provided context. Having all code in one
              repository helps, but raw code access alone isn't enough. It's
              analogous to{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                navigating a city using only street view
              </mark>
              . You can see individual files clearly, but without an aerial view
              of the architecture, it's hard to pick optimal routes.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Research on "context rot" shows that even million-token context
              windows degrade in performance with longer inputs. Information
              buried in the middle of large contexts becomes effectively
              invisible. The solution isn't more context, it's{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                the right context at the right level of abstraction
              </mark>
              .
            </p>
          </div>

          <div className="mt-10 lg:order-1 lg:mt-0">
            <img
              className="mx-auto w-full rounded-lg shadow-lg"
              width={500}
              src="/images/ai/ai-streetview.avif"
              alt="AI agent only seeing individual files without understanding the broader architectural context"
            />
          </div>
        </div>

        {/* What AI Needs: Before/After */}
        <div className="mt-24 lg:mt-36">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="what-ai-needs"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              What AI Needs from Monorepo Tooling
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#what-ai-needs"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Smart monorepo tooling elevates AI understanding from file-level to
              architectural-level, giving agents the "map view" they need to
              navigate complex codebases effectively.
            </p>
          </div>

          {/* Before/After comparison */}
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="text-center">
              <div className="relative">
                <img
                  className="mx-auto rounded-lg shadow-lg"
                  width={400}
                  src="/images/ai/ai-only-seeing-files.avif"
                  alt="Traditional AI agent overwhelmed by scattered individual files"
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
                  alt="Monorepo-aware AI agent viewing a structured project graph"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    Monorepo-Aware AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="mx-auto mt-20 max-w-7xl">
            <dl className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="relative">
                <dt>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                    <MapIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Project Graph & Workspace Structure
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  The "map view" of your workspace: projects, their
                  relationships, and dependencies. AI gets a high-level
                  understanding of what connects to what, instead of parsing
                  individual config files across the repo.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                    <CubeTransparentIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Workspace & Project Metadata
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  Structured access to project-level information: dependencies,
                  technology stacks, ownership details. This prevents context rot
                  by avoiding the need to parse and correlate scattered
                  configuration files across large monorepos.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                    <BoltIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Task Intelligence & Monorepo Features
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  Understanding of available tasks, their dependencies, and
                  caching behavior. AI can run builds and tests across the
                  workspace using a single command, regardless of language or
                  framework.
                </dd>
              </div>
            </dl>
          </div>

          {/* Polyglot + Token Efficiency callout */}
          <div className="mx-auto mt-16 max-w-4xl rounded-lg bg-slate-100 p-6 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Polyglot by Default, Token-Efficient by Design
            </h3>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              In a polyglot monorepo, AI doesn't need to parse Java build
              files, TypeScript configs, and Go modules separately. Monorepo
              tooling provides a{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                uniform interface
              </mark>{' '}
              : a single tool to query projects, understand relationships, and
              execute tasks across all languages. This means fewer tokens spent
              grepping through files and faster, more accurate responses.
            </p>
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

          {/* AI Config & Rules Files */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                  <DocumentMagnifyingGlassIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  AI Configuration & Rules Files
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Configuration files that instruct AI how to work within a
                monorepo. These include workspace-level rules (coding
                conventions, architecture patterns, tooling preferences) and
                project-level instructions that give AI the context it needs
                without consuming tokens on discovery.
              </p>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                Monorepo tools can auto-generate these config files based on
                workspace structure, keeping them in sync as the codebase
                evolves.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <TerminalPlaceholder title="AI Config: Auto-generated rules" />
            </div>
          </div>

          {/* Agent Experience (Ax) */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="lg:order-2">
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
            <div className="mt-8 lg:order-1 lg:mt-0">
              <TerminalPlaceholder title="Ax: CLI designed for AI agents" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
