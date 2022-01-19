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
    name: 'Jared Palmer',
    tool: 'Turborepo',
    imageUrl: 'https://avatars.githubusercontent.com/u/4060187?s=150',
    twitterLink: 'https://twitter.com/jaredpalmer',
    githubLink: 'https://github.com/vercel/turborepo',
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
];
const articles: { name: string; link: string }[] = [
  {
    name: 'Why TurboRepo Will Be The First Big Trend of 2022 ',
    link: 'https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj',
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
            className="text-3xl tracking-tight font-semiboldtext-gray-800 dark:text-gray-100sm:text-4xl"
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
            className="text-3xl tracking-tight font-semiboldtext-gray-800 dark:text-gray-100sm:text-4xl"
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
            id="monorepo-contributors"
            className="text-3xl tracking-tight font-semiboldtext-gray-800 dark:text-gray-100sm:text-4xl"
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
