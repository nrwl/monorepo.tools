import {
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const aiVideos: { name: string; link: string }[] = [
  {
    name: 'We Just Shipped the Monorepo MCP for Copilot!',
    link: 'https://www.youtube.com/watch?v=dRQq_B1HSLA',
  },
];

const aiArticles: { name: string; link: string }[] = [
  {
    name: 'How To Make Codebases AI Agents Love',
    link: 'https://www.aihero.dev/how-to-make-codebases-ai-agents-love',
  },
  {
    name: 'Context Rot: How Increasing Input Tokens Impacts LLM Performance',
    link: 'https://research.trychroma.com/context-rot',
  },
  {
    name: 'Nx and AI: Why They Work Together',
    link: 'https://nx.dev/blog/nx-and-ai-why-they-work-together',
  },
  {
    name: 'Monorepos are back and AI is driving the comeback',
    link: 'https://medium.com/@dani.garcia.jimenez/monorepos-are-back-and-ai-is-driving-the-comeback-f4abbb7bb55f',
  },
];

const aiTools: { name: string; link: string }[] = [
  {
    name: 'Model Context Protocol (MCP)',
    link: 'https://modelcontextprotocol.io/',
  },
  {
    name: 'GitHub MCP Registry',
    link: 'https://github.com/mcp',
  },
  {
    name: 'MCP server for Nx',
    link: 'https://nx.dev/features/enhance-AI',
  },
  {
    name: 'MCP server for Rush',
    link: 'https://rushjs.io/pages/ai/rush_mcp/',
  },
  {
    name: 'MCP server for Moon',
    link: 'https://moonrepo.dev/docs/guides/mcp',
  },
  {
    name: 'MCP server for Bazel (community - aaomidi)',
    link: 'https://github.com/aaomidi/mcp-bazel',
  },
  {
    name: 'MCP server for Bazel (community - nacgarg)',
    link: 'https://github.com/nacgarg/bazel-mcp-server',
  },
];

export function Resources(): JSX.Element {
  return (
    <article
      data-test-id="ai-resources"
      className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800"
    >
      <div className="relative">
        <h1
          id="ai-resources"
          className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white"
        >
          # Resources
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#ai-resources"
            className="inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          Here is a curated list of resources to explore how AI and monorepos
          work together.
        </p>
      </div>

      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="ai-videos"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            AI & Monorepo Videos
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-videos"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            Watch presentations and demos about AI integration in monorepo
            environments.
          </p>
          <ul className="mt-12 space-y-3">
            {aiVideos.map((item) => (
              <li
                className="space-y-1 text-gray-700 dark:text-gray-300"
                key={item.name}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center rounded px-1 transition hover:bg-yellow-500 hover:text-gray-800"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />{' '}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="ai-articles"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            AI & Monorepo Articles
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-articles"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            Here is a curated list of articles about AI and monorepo
            integration.
          </p>
          <ul className="mt-12 space-y-3">
            {aiArticles.map((item) => (
              <li
                className="space-y-1 text-gray-700 dark:text-gray-300"
                key={item.name}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center rounded px-1 transition hover:bg-yellow-500 hover:text-gray-800"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />{' '}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="ai-tools"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            AI Development Tools
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-tools"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            Essential tools and protocols for AI-enhanced monorepo development.
          </p>
          <ul className="mt-12 space-y-3">
            {aiTools.map((item) => (
              <li
                className="space-y-1 text-gray-700 dark:text-gray-300"
                key={item.name}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center rounded px-1 transition hover:bg-yellow-500 hover:text-gray-800"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />{' '}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
