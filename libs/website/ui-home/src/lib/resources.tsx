import {
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const videosPodcasts: { name: string; link: string }[] = [
  {
    name: 'Monorepos - How the Pros Scale Huge Software Projects',
    link: 'https://www.youtube.com/watch?v=9iU_IE6vnJ8&utm_source=monorepo.tools',
  },
  {
    name: 'SyntaxFM #426: Monorepos! Workspaces, pnpm, turborepo + more!',
    link: 'https://syntax.fm/show/426/monorepos-workspaces-pnpm-turborepo-more?utm_source=monorepo.tools',
  },
  {
    name: 'Monorepos: Any Size Fits All, by Altan Stalker',
    link: 'https://www.youtube.com/watch?v=elKsZvowdok&utm_source=monorepo.tools',
  },
  {
    name: 'Nx Courses – Free Video Courses on Monorepos',
    link: 'https://nx.dev/courses?utm_source=monorepo.tools',
  },
];
const articles: { name: string; link: string }[] = [
  {
    name: 'Why Monorepos are King in the Age of AI',
    link: 'https://nx.dev/blog/why-monorepos-are-king-in-the-age-of-ai?utm_source=monorepo.tools',
  },
  {
    name: 'The Missing Multiplier for AI Agent Productivity',
    link: 'https://nx.dev/blog/the-missing-multiplier-for-ai-agent-productivity?utm_source=monorepo.tools',
  },
  {
    name: 'Autonomous Agents at Scale',
    link: 'https://nx.dev/blog/ai-agents-and-continuity?utm_source=monorepo.tools',
  },
  {
    name: 'Teach Your AI Agent How to Work in a Monorepo',
    link: 'https://nx.dev/blog/nx-ai-agent-skills?utm_source=monorepo.tools',
  },
  {
    name: 'Rush MCP Server: Helping AI Understand Your Monorepo',
    link: 'https://developers.tiktok.com/blog/rush-mcp-server?utm_source=monorepo.tools',
  },
  {
    name: 'Inside the Pain of Monorepos and Hoisting – Jonathan Creamer',
    link: 'https://www.jonathancreamer.com/inside-the-pain-of-monorepos-and-hoisting/?utm_source=monorepo.tools',
  },
];
// TODO: update with current books
// const books: {
//   name: string;
//   author: string;
//   excerpt: string;
//   link: string;
//   imageUrl: string;
// }[] = [
//   {
//     name: 'Effective React Development With Nx',
//     author: 'Jack Hsu',
//     excerpt:
//       'A lot of successful organizations such as Google, Facebook, Microsoft' +
//       ' -as well as large open source projects such as Babel, Jest, and React- are all ' +
//       'using the monorepo approach to software development. As you will see in this book,' +
//       ' a monorepo approach can save developers from a great deal of' +
//       ' headache and wasted time.',
//     link: 'https://go.nrwl.io/react-book',
//     imageUrl: '/images/react-dev-nx-cover.svg',
//   },
//   {
//     name: 'Learn how to build enterprise-scale Angular applications which are maintainable in the long run',
//     author: 'Manfred Steyer',
//     excerpt:
//       'Learn how to build enterprise-scale Angular applications which are maintainable in the long run.',
//     link: 'https://www.angulararchitects.io/en/book/',
//     imageUrl:
//       'https://www.angulararchitects.io/wp-content/uploads/2021/12/cover-4rd-small.png',
//   },
// ];

export function Resources() {
  return (
    <article
      data-test-id="monorepo-resources"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <h1
          id="monorepo-resources"
          className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          # Resources
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#monorepo-resources"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          A curated list of videos, podcasts, and articles to go deeper into
          monorepos.
        </p>
      </div>
      <div className="relative mx-auto mt-16 max-w-7xl lg:mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="monorepo-videos-podcasts"
              className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
            >
              Videos & Podcasts
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#monorepo-videos-podcasts"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <ul className="mt-8 space-y-3">
              {videosPodcasts.map((item) => (
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
                    <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5 flex-shrink-0" />{' '}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              id="monorepo-articles"
              className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
            >
              Articles
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#monorepo-articles"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <ul className="mt-8 space-y-3">
              {articles.map((item) => (
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
                    <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5 flex-shrink-0" />{' '}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Have a resource you think should be listed here?{' '}
          <a
            href="https://github.com/nrwl/monorepo.tools/issues/new"
            target="_blank"
            rel="noreferrer"
            className="border-b border-yellow-500 px-0.5 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
          >
            Open an issue
          </a>{' '}
          and let us know!
        </p>
      </div>
      {/* TODO: update books section */}
    </article>
  );
}
