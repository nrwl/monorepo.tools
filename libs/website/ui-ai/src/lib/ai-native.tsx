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
          <div className="mx-auto max-w-3xl text-center">
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
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              For an agent to work autonomously, it needs a CLI it can drive
              without getting stuck. The tool adapts its output depending on
              who is calling it: humans get readable listings, agents get
              structured JSON they can parse and act on in a single call.
            </p>
          </div>
          <div className="mt-8">
            <AxTerminalAnimation />
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
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              A good CLI gets agents part of the way. But for full autonomy
              they also need to understand your conventions and connect to
              your infrastructure.{' '}
              <strong>Skills</strong> teach agents your team's workflows:
              how to create a library, run affected tests, or scaffold code
              that matches your standards. They are versioned and shared so
              every agent behaves consistently.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              <strong>MCP servers</strong> give agents structured access to
              external services like CI, letting them query the project
              graph, trigger tasks, and read results through tool calls.
              Together, skills and MCP close the gap between "agent that
              can run commands" and "agent that can operate the monorepo
              end-to-end."
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
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
