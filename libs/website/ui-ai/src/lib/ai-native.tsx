import { LinkIcon } from '@heroicons/react/24/outline';
import { AxTerminalAnimation } from './ax-terminal-animation';
import { ConfigureAiTerminalAnimation } from './configure-ai-terminal-animation';

export function AINative(): JSX.Element {
  return (
    <div
      id="ai-native"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h1
            className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            # AI-Native Tooling
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-native"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            An AI agent should be able to{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              autonomously operate
            </mark>{' '}
            the monorepo tool. Not just tolerate it, but use its CLI as a
            reliable control surface: query projects, run tasks, inspect
            results, and act on failures without human intervention.
          </p>
        </div>

        {/* Agentic Experience (Ax) */}
        <div className="mt-16 lg:mt-24">
          <h2
            id="agentic-experience"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            Agentic Experience (Ax)
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#agentic-experience"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <div className="mt-4 max-w-3xl">
            <p className="text-base text-gray-700 dark:text-gray-300">
              The CLI adapts its output depending on who is calling it. Humans
              get readable, formatted listings. Agents get compressed JSON
              they can parse in a single call. No interactive prompts that
              would block an autonomous workflow. No ambiguous output that
              requires guesswork.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              The same command, two experiences. The agent does not have to
              learn a separate API or scrape terminal output. It uses the same
              CLI as a developer, and the tool meets it where it is.
            </p>
          </div>
          <div className="mt-8">
            <AxTerminalAnimation />
          </div>
        </div>

        {/* Bridging Local and CI */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="lg:order-2">
            <h2
              id="bridging-local-ci"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Bridging Local and CI
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#bridging-local-ci"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Full autonomy means the agent does not stop at the PR. It
              submits changes, monitors CI, and reacts to failures. The
              boundary between local development and CI should not be a wall
              the agent cannot see past.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              Nx connects the local agent to a{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                self-healing CI agent
              </mark>{' '}
              running on CI. That remote agent has deep knowledge of the task
              graph, knows exactly which tasks failed, has their full logs,
              and context from previous runs. It proposes fixes, verifies them
              by re-running the failing task, and the local agent can approve
              those fixes to merge into the PR, all without human
              intervention.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              The result: the agent finishes a feature, submits a PR, and
              keeps iterating until CI is green and the PR is ready for
              human review.
            </p>
          </div>
          <div className="mt-8 lg:order-1 lg:mt-0">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700">
              <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 text-xs text-slate-400">
                  Local Agent ↔ CI Agent
                </span>
              </div>
              <div className="flex h-64 items-center justify-center px-4 py-6">
                <p className="text-sm text-slate-500">
                  Interactive demo coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & MCP */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2
              id="skills-and-mcp"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Skills &amp; MCP
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#skills-and-mcp"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              AI agents do not know your monorepo conventions out of the box.{' '}
              <strong>Skills</strong> are composable instructions that teach
              agents specific workflows: how to create a library, run affected
              tests, or scaffold code that matches your standards. They are
              versioned and shared across a team so every agent behaves
              consistently.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              <strong>MCP servers</strong> connect agents to external
              services like an integrated CI system, letting them query the
              project graph, trigger tasks, and read results through
              structured tool calls instead of parsing CLI output.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              A single command configures everything: installs the MCP
              server, provisions skills, and updates agent configuration
              files for whichever AI tools your team uses.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <ConfigureAiTerminalAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
