const tools: { name: string; link: string }[] = [
  {
    name: 'Bazel',
    link: 'https://github.com/bazelbuild/bazel',
  },
  {
    name: 'Lage',
    link: 'https://github.com/microsoft/lage',
  },
  {
    name: 'Nx',
    link: 'https://github.com/nrwl/nx',
  },
  {
    name: 'Turborepo',
    link: 'https://github.com/vercel/turborepo',
  },
  {
    name: 'Lerna',
    link: 'https://github.com/lerna/lerna',
  },
];

export function MonorepoToolsLogos() {
  return (
    <div className="py-12 lg:py-16 mt-8 grid grid-cols-1 gap-0.5 md:grid-cols-5 lg:mt-16 text-3xl font-semibold">
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
