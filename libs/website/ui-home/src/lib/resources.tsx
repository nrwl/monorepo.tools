import { ExternalLinkIcon, LinkIcon } from '@heroicons/react/solid';

const people: {
  name: string;
  tool: string;
  imageUrl: string;
  twitterLink: string;
  githubLink: string;
}[] = [
  {
    name: 'Alex Eagle',
    tool: 'Bazel',
    imageUrl: 'https://avatars.githubusercontent.com/u/47395?s=150',
    twitterLink: 'https://twitter.com/jakeherringbone',
    githubLink: 'https://github.com/bazelbuild/bazel?utm_source=monorepo.tools',
  },
  {
    name: 'Kenneth Chau',
    tool: 'Lage',
    imageUrl: 'https://avatars.githubusercontent.com/u/34725?s=150',
    twitterLink: 'https://twitter.com/kenneth_chau',
    githubLink: 'https://github.com/microsoft/lage?utm_source=monorepo.tools',
  },
  {
    name: 'Jeff Cross',
    tool: 'Nx',
    imageUrl: 'https://avatars.githubusercontent.com/u/463703?s=150',
    twitterLink: 'https://twitter.com/jeffbcross',
    githubLink: 'https://github.com/nrwl/nx?utm_source=monorepo.tools',
  },
  {
    name: 'Victor Savkin',
    tool: 'Nx',
    imageUrl: 'https://avatars1.githubusercontent.com/u/35996?s=150',
    twitterLink: 'https://twitter.com/victorsavkin',
    githubLink: 'https://github.com/nrwl/nx?utm_source=monorepo.tools',
  },
  {
    name: 'Pete Gonzalez',
    tool: 'Rush',
    imageUrl: 'https://avatars.githubusercontent.com/u/4673363?s=150',
    twitterLink: 'https://twitter.com/octogonz_',
    githubLink:
      'https://github.com/microsoft/rushstack?utm_source=monorepo.tools',
  },
  {
    name: 'Justin Reock',
    tool: 'Gradle',
    imageUrl: 'https://avatars.githubusercontent.com/u/2613650?s=150',
    twitterLink: 'https://twitter.com/JustinReock',
    githubLink: 'https://github.com/gradle/gradle?utm_source=monorepo.tools',
  },
  {
    name: 'Benjy Weinberger',
    tool: 'Pants',
    imageUrl: 'https://avatars.githubusercontent.com/u/512764?s=150',
    twitterLink: 'https://twitter.com/benjyw',
    githubLink: 'https://github.com/pantsbuild/pants?utm_source=monorepo.tools',
  },
  {
    name: 'Jon Poole',
    tool: 'Please',
    imageUrl: 'https://avatars.githubusercontent.com/u/2906700?s=150',
    twitterLink: 'https://twitter.com/jonfpoole',
    githubLink: 'https://github.com/thought-machine/please?utm_source=monorepo.tools',
  },
];
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
                  <ExternalLinkIcon className="mr-2 h-5 w-5" /> {item.name}
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
                  <ExternalLinkIcon className="mr-2 h-5 w-5" /> {item.name}
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
                            <ExternalLinkIcon className="absolute top-0 right-0 h-5 w-5" />{' '}
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
      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="monorepo-contributors"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            Contributors
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-contributors"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            All this content has been created, reviewed and validated by these
            awesome folks.
          </p>
          <ul className="mt-12 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src={person.imageUrl}
                    alt={person.name + ' avatar'}
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>
                      <a
                        href={person.twitterLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center rounded px-1 transition hover:bg-yellow-500 hover:text-gray-800"
                      >
                        <svg
                          aria-hidden="true"
                          className="mr-2 h-4 w-4"
                          fill="currentColor"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter</title>
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        {person.name}
                      </a>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-500">
                      <a
                        href={person.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex inline-flex items-center rounded px-1 transition hover:bg-yellow-500 hover:text-gray-800"
                      >
                        <svg
                          aria-hidden="true"
                          className="mr-2 h-4 w-4"
                          fill="currentColor"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        {person.tool}
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Resources;
