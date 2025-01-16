import {
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const articles: { name: string; link: string }[] = [
  {
    name: 'TypeScript Project References Doc',
    link: 'https://www.typescriptlang.org/docs/handbook/project-references.html',
  },
  {
    name: 'TypeScript Paths Doc',
    link: 'https://www.typescriptlang.org/tsconfig/#paths',
  },
  {
    name: 'Using TypeScript Project References to share common code',
    link: 'https://wallis.dev/blog/typescript-project-references',
  },
  {
    name: 'Sharing Code in TypeScript and Project References',
    link: 'https://theartofdev.com/2024/11/07/sharing-code-in-typescript-and-project-references/',
  },
  {
    name: 'Save For Nx Article',
    link: '',
  },
  {
    name: 'Save For Nx Article',
    link: '',
  },
];

const videosPodcasts: { name: string; link: string }[] = [
  {
    name: 'The Dilemma of TypeScript in Monorepos',
    link: 'https://www.youtube.com/watch?v=RRsttfhg1sA',
  },
  {
    name: 'Lots of small projects? You might be missing out on a MONOREPO',
    link: 'https://www.youtube.com/watch?v=nw4KH0PkVsE',
  },
  {
    name: 'No BS TS #32 - Monorepos with NX',
    link: 'https://www.youtube.com/watch?v=Bw_tmWEaaIU',
  },
];

export function Resources() {
  return (
    <article
      data-test-id="monorepo-resources"
      className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800"
    >
      <div className="relative">
        <h1
          id="monorepo-resources"
          className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white"
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
          Here is a curated list of useful videos and podcasts to go deeper or
          just see the information in another way.
        </p>
      </div>

      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="monorepo-videos-podcasts"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
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
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            Here are some video and podcast about monorepos that we think will
            greatly support what you just learned.
          </p>
          <ul className="mt-12 space-y-3">
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
            id="typescript-articles"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            Articles
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#typescript-articles"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            Here is a curated list of articles about monorepos that we think
            will greatly support what you just learned.
          </p>
          <ul className="mt-12 space-y-3">
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
