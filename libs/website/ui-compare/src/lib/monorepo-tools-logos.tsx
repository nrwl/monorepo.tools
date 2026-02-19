const tools1: { name: string; link: string }[] = [
  // Alphabetical order
  {
    name: 'Bazel',
    link: 'https://github.com/bazelbuild/bazel?utm_source=monorepo.tools',
  },
  {
    name: 'Gradle',
    link: 'https://github.com/gradle/gradle?utm_source=monorepo.tools',
  },
  {
    name: 'Lage',
    link: 'https://github.com/microsoft/lage?utm_source=monorepo.tools',
  },
];
const tools2: { name: string; link: string }[] = [
  // Alphabetical order
  {
    name: 'Lerna',
    link: 'https://github.com/lerna/lerna?utm_source=monorepo.tools',
  },
  {
    name: 'moon',
    link: 'https://github.com/moonrepo/moon?utm_source=monorepo.tools',
  },
  {
    name: 'Nx',
    link: 'https://github.com/nrwl/nx?utm_source=monorepo.tools',
  },
];
const tools3: { name: string; link: string }[] = [
  // Alphabetical order
  {
    name: 'Pants',
    link: 'https://github.com/pantsbuild/pants?utm_source=monorepo.tools',
  },
  {
    name: 'Rush',
    link: 'https://github.com/microsoft/rushstack?utm_source=monorepo.tools',
  },
  {
    name: 'Turborepo',
    link: 'https://github.com/vercel/turborepo?utm_source=monorepo.tools',
  },
];

export function MonorepoToolsLogos(): JSX.Element {
  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-3 pt-12 text-lg font-semibold lg:mt-16 lg:pt-16 lg:text-2xl">
        {tools1.map((tool) => (
          <a
            key={'tool-' + tool.name}
            href={tool.link}
            title={tool.name + ' on Github'}
            rel="noreferrer"
            target="_blank"
            className="col-span-1 flex justify-center rounded bg-slate-100 py-8 px-8 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-yellow-500"
          >
            {tool.name}
          </a>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-lg font-semibold lg:text-2xl">
        {tools2.map((tool) => (
          <a
            key={'tool-' + tool.name}
            href={tool.link}
            title={tool.name + ' on Github'}
            rel="noreferrer"
            target="_blank"
            className="col-span-1 flex justify-center rounded bg-slate-100 py-8 px-8 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-yellow-500"
          >
            {tool.name}
          </a>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 pb-12 text-lg font-semibold lg:mb-16 lg:pb-16 lg:text-2xl">
        {tools3.map((tool) => (
          <a
            key={'tool-' + tool.name}
            href={tool.link}
            title={tool.name + ' on Github'}
            rel="noreferrer"
            target="_blank"
            className="col-span-1 flex justify-center rounded bg-slate-100 py-8 px-8 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-yellow-500"
          >
            {tool.name}
          </a>
        ))}
      </div>
    </>
  );
}
