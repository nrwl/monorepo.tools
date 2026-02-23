import {
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const videosPodcasts: { name: string; link: string }[] = [
  {
    name: 'SyntaxFM #426: Monorepos! Workspaces, pnpm, turborepo + more!',
    link: 'https://syntax.fm/show/426/monorepos-workspaces-pnpm-turborepo-more?utm_source=monorepo.tools',
  },
  {
    name: 'Monorepos - How the Pros Scale Huge Software Projects',
    link: 'https://www.youtube.com/watch?v=9iU_IE6vnJ8&utm_source=monorepo.tools',
  },
  {
    name: 'Nx: Google-level Monorepo Tools for Everyone - Jeff Cross and Victor Savkin',
    link: 'https://www.youtube.com/watch?v=eZQ_jWaTCVM&utm_source=monorepo.tools',
  },
  {
    name: 'Turborepo Demo and Walkthrough (High-Performance Monorepos)',
    link: 'https://www.youtube.com/watch?v=YX5yoApjI3M&utm_source=monorepo.tools',
  },
  {
    name: 'Monorepos: Any Size Fits All, by Altan Stalker',
    link: 'https://www.youtube.com/watch?v=elKsZvowdok&utm_source=monorepo.tools',
  },
  {
    name: 'BazelCon 2021 (Playlist)',
    link: 'https://www.youtube.com/watch?v=7M9c6x3WgIQ&list=PLxNYxgaZ8Rsc3auKhtfIB4qXAYf7whEux&utm_source=monorepo.tools',
  },
  {
    name: 'NxConf 2021 (Playlist)',
    link: 'https://www.youtube.com/watch?v=VKVTzVM0nVM&list=PLakNactNC1dG1CoyVWFppw3X8hnXRhFuy&utm_source=monorepo.tools',
  },
  {
    name: 'NxConf Lite 2022 (Playlist)',
    link: 'https://youtube.com/playlist?list=PLakNactNC1dGmYYdDqWTMae5YiC_DRrTx',
  },
  {
    name: 'Pants Podcasts',
    link: 'https://www.pantsbuild.org/docs/media#podcasts&utm_source=monorepo.tools',
  },
];
const articles: { name: string; link: string }[] = [
  {
    name: 'The One Version Rule – opensource.google',
    link: 'https://opensource.google/docs/thirdparty/oneversion?utm_source=monorepo.tools',
  },
  {
    name: 'Why TurboRepo Will Be The First Big Trend of 2022',
    link: 'https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj?utm_source=monorepo.tools',
  },
  {
    name: 'Build Monorepos, not Monoliths',
    link: 'https://dev.to/agentender/build-monorepos-not-monoliths-4gbc?utm_source=monorepo.tools',
  },
  {
    name: 'Lerna 5.1 - New website, new guides, new Lerna example repo, distributed caching support and speed!',
    link: 'https://dev.to/nrwl/lerna-51-new-website-new-guides-new-lerna-example-repo-distributed-caching-support-and-speed-31oe?utm_source=monorepo.tools',
  },
  {
    name: 'Nx monorepo documentation',
    link: 'https://nx.dev/guides/why-monorepos#monorepos?utm_source=monorepo.tools',
  },
  {
    name: 'Pants Articles',
    link: 'https://www.pantsbuild.org/docs/media#posts--articles?utm_source=monorepo.tools',
  },
];
const books: {
  name: string;
  author: string;
  excerpt: string;
  link: string;
  imageUrl: string;
}[] = [
  {
    name: 'Effective React Development With Nx',
    author: 'Jack Hsu',
    excerpt:
      'A lot of successful organizations such as Google, Facebook, Microsoft' +
      ' -as well as large open source projects such as Babel, Jest, and React- are all ' +
      'using the monorepo approach to software development. As you will see in this book,' +
      ' a monorepo approach can save developers from a great deal of' +
      ' headache and wasted time.',
    link: 'https://go.nrwl.io/react-book',
    imageUrl: '/images/react-dev-nx-cover.svg',
  },
  {
    name: 'Learn how to build enterprise-scale Angular applications which are maintainable in the long run',
    author: 'Manfred Steyer',
    excerpt:
      'Learn how to build enterprise-scale Angular applications which are maintainable in the long run.',
    link: 'https://www.angulararchitects.io/en/book/',
    imageUrl:
      'https://www.angulararchitects.io/wp-content/uploads/2021/12/cover-4rd-small.png',
  },
];

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
          Here is a curated list of useful videos and podcasts to go deeper or
          just see the information in another way.
        </p>
      </div>
      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="monorepo-videos-podcasts"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            Monorepo Videos & Podcasts
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-videos-podcasts"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
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
            id="monorepo-articles"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            Monorepo articles
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-articles"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
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
      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="monorepo-books"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            Monorepo books
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-books"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Here is a curated list of books about monorepos that we think are
            worth a read.
          </p>
          <ul className="mt-12 space-y-12">
            {books.map((book) => (
              <li key={book.name} className="relative">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-lg p-2 text-gray-700 transition hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-300 hover:dark:text-gray-800"
                  title={book.name}
                >
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="sm:aspect-w-3 sm:aspect-h-4 mx-auto w-1/2 sm:h-0 sm:w-full">
                      <img
                        loading="lazy"
                        className="rounded-lg object-cover shadow-lg"
                        src={book.imageUrl}
                        alt={book.name + ' book cover'}
                      />
                    </div>
                    <div className="hidden sm:col-span-2 sm:block">
                      <div className="space-y-4">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3 className="relative block pr-6">
                            <ArrowTopRightOnSquareIcon className="absolute top-0 right-0 h-5 w-5" />{' '}
                            <span>{book.name}</span>
                          </h3>
                          <p className="text-base font-normal uppercase">
                            {book.author}
                          </p>
                        </div>
                        <p className="text-lg">{book.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
