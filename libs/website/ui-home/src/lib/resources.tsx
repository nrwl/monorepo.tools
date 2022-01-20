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
    githubLink: 'https://github.com/bazelbuild/bazel',
  },
  {
    name: 'Kenneth Chau',
    tool: 'Lage',
    imageUrl: 'https://avatars.githubusercontent.com/u/34725?s=150',
    twitterLink: 'https://twitter.com/kenneth_chau',
    githubLink: 'https://github.com/microsoft/lage',
  },
  {
    name: 'Jeff Cross',
    tool: 'Nx',
    imageUrl: 'https://avatars.githubusercontent.com/u/463703?s=150',
    twitterLink: 'https://twitter.com/jeffbcross',
    githubLink: 'https://github.com/nrwl/nx',
  },
  {
    name: 'Victor Savkin',
    tool: 'Nx',
    imageUrl: 'https://avatars1.githubusercontent.com/u/35996?s=150',
    twitterLink: 'https://twitter.com/victorsavkin',
    githubLink: 'https://github.com/nrwl/nx',
  },
];
const videosPodcasts: { name: string; link: string }[] = [
  {
    name: 'Monorepos - How the Pros Scale Huge Software Projects',
    link: 'https://www.youtube.com/watch?v=9iU_IE6vnJ8',
  },
  {
    name: 'Nx: Google-level Monorepo Tools for Everyone - Jeff Cross and Victor Savkin',
    link: 'https://www.youtube.com/watch?v=eZQ_jWaTCVM',
  },
  {
    name: 'Turborepo Demo and Walkthrough (High-Performance Monorepos)',
    link: 'https://www.youtube.com/watch?v=YX5yoApjI3M',
  },
  {
    name: 'BazelCon 2021 (Playlist)',
    link: 'https://www.youtube.com/watch?v=7M9c6x3WgIQ&list=PLxNYxgaZ8Rsc3auKhtfIB4qXAYf7whEux',
  },
  {
    name: 'NxConf 2021 (Playlist)',
    link: 'https://www.youtube.com/watch?v=VKVTzVM0nVM&list=PLakNactNC1dG1CoyVWFppw3X8hnXRhFuy',
  },
];
const articles: { name: string; link: string }[] = [
  {
    name: 'Why TurboRepo Will Be The First Big Trend of 2022 ',
    link: 'https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj',
  },
  {
    name: 'Build Monorepos, not Monoliths',
    link: 'https://dev.to/agentender/build-monorepos-not-monoliths-4gbc',
  },
  {
    name: 'Lerna/Yarn -> Nx: Faster Build Times + Better Dev Ergonomics',
    link: 'https://dev.to/nx/lerna-yarn-nx-faster-build-times-better-dev-ergonomics-32a6',
  },
  {
    name: 'Nx monorepo documentation',
    link: 'https://nx.dev/guides/why-monorepos#monorepos',
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
    link: '',
    imageUrl: '/images/react-dev-nx-cover.svg',
  },
];

export function Resources() {
  return (
    <article className="bg-slate-50 dark:bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative">
        <h1
          id="monorepo-resources"
          className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          # Resources
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
          Here is a curated list of useful videos and podcasts to go deeper or
          just see the information in another way.
        </p>
      </div>
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2
            id="monorepo-videos-podcasts"
            className="text-3xl tracking-tight font-semibold text-gray-800 dark:text-gray-100sm:text-4xl"
          >
            Monorepo Videos & Podcasts
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Here are some video and podcast about monorepos that we think will
            greatly support what you just learned.
          </p>
          <ul className="mt-12 space-y-3 list-disc">
            {videosPodcasts.map((item) => (
              <li
                className="space-y-1 text-gray-700 dark:text-gray-300"
                key={item.name}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-1 hover:bg-yellow-500 hover:text-gray-800 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2
            id="monorepo-articles"
            className="text-3xl tracking-tight font-semibold text-gray-800 dark:text-gray-100sm:text-4xl"
          >
            Monorepo articles
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Here is a curated list of articles about monorepos that we think
            will greatly support what you just learned.
          </p>
          <ul className="mt-12 space-y-3 list-disc">
            {articles.map((item) => (
              <li
                className="space-y-1 text-gray-700 dark:text-gray-300"
                key={item.name}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-1 hover:bg-yellow-500 hover:text-gray-800 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2
            id="monorepo-books"
            className="text-3xl tracking-tight font-semibold text-gray-800 dark:text-gray-100sm:text-4xl"
          >
            Monorepo books
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
                  title={book.name}
                >
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="w-1/2 mx-auto sm:w-full sm:h-0 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        loading="lazy"
                        className="object-cover shadow-lg rounded-lg"
                        src="/images/react-dev-nx-cover.svg"
                        alt={book.name + ' book cover'}
                      />
                    </div>
                    <div className="hidden sm:block sm:col-span-2">
                      <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>Effective React Development With Nx</h3>
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
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2
            id="monorepo-contributors"
            className="text-3xl tracking-tight font-semibold text-gray-800 dark:text-gray-100sm:text-4xl"
          >
            Contributors
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
                    className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                    src={person.imageUrl}
                    alt={person.name + ' avatar'}
                  />
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3>
                      <a
                        href={person.twitterLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-1 hover:bg-yellow-500 hover:text-gray-800 transition"
                      >
                        {person.name}
                      </a>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-500">
                      <a
                        href={person.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-1 hover:bg-yellow-500 hover:text-gray-800 transition"
                      >
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
