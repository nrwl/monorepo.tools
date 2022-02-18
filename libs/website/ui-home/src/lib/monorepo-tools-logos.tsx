const tools: { name: string; link: string }[] = [
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
  {
    name: 'Lerna',
    link: 'https://github.com/lerna/lerna?utm_source=monorepo.tools',
  },
  {
    name: 'Nx',
    link: 'https://github.com/nrwl/nx?utm_source=monorepo.tools',
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

export function MonorepoToolsLogos() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-0.5 py-12 text-2xl font-semibold md:grid-cols-7 lg:mt-16 lg:py-16">
      {tools.map((tool) => (
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
  );
}

export default MonorepoToolsLogos;
