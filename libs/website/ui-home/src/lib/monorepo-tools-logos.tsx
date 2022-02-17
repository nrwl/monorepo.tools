const tools: { name: string; link: string }[] = [
  // Alphabetical order
  {
    name: 'Bazel',
    link: 'https://github.com/bazelbuild/bazel',
  },
  {
    name: 'Gradle',
    link: 'https://github.com/gradle/gradle',
  },
  {
    name: 'Lage',
    link: 'https://github.com/microsoft/lage',
  },
  {
    name: 'Lerna',
    link: 'https://github.com/lerna/lerna',
  },
  {
    name: 'Nx',
    link: 'https://github.com/nrwl/nx',
  },
  {
    name: 'Rush',
    link: 'https://github.com/microsoft/rushstack',
  },
  {
    name: 'Turborepo',
    link: 'https://github.com/vercel/turborepo',
  },
];

export function MonorepoToolsLogos() {
  return (
    <div className="py-12 lg:py-16 mt-8 grid grid-cols-1 gap-0.5 md:grid-cols-7 lg:mt-16 text-3xl font-semibold">
      {tools.map((tool) => (
        <a
          key={'tool-' + tool.name}
          href={tool.link}
          title={tool.name + ' on Github'}
          rel="noreferrer"
          target="_blank"
          className="col-span-1 flex justify-center py-8 px-8 bg-slate-100 dark:bg-slate-900 hover:text-gray-800 hover:bg-yellow-500 hover:dark:bg-yellow-500 transition rounded"
        >
          {tool.name}
        </a>
      ))}
    </div>
  );
}

export default MonorepoToolsLogos;
