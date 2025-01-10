import { LinkIcon } from '@heroicons/react/24/outline';

export function PathAliases(): React.JSX.Element {
  return (
    <div
      id="path-aliases"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # Path Aliases
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#why-a-monorepo"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          Path Aliases allow you to replace long import paths with a user
          supplied key for imports.
        </p>
      </div>
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h1
            id="mapping-to-a-path"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            Mapping to a path
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#mapping-to-a-path"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            In the simplest terms, path aliases are a typescript construct that
            allow you to point to a directory somewhere in your codebase. When
            you import from <code>@my-org/lib-a</code> with path aliases, you
            actually aren't treating that package as a module.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/typescript/path-mappings.svg"
            alt="typescript path mappings"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Path aliases tell TypeScript to not treat the import statement as a
            module to be resolved, but rather use the key of{' '}
            <code>'@my-org/lib-a'</code> as a reference to where the module is
            located. This means at compile time, TypeScript will need to add
            some additional code to the generated output in order to make that
            mapping work. While this could be minimal, depending on the scale of
            your project, this could be a significant amount of extra that is
            probably not needed.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/typescript/lib-silo.svg"
            alt="libraries in silos"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Path Aliases don't actually change how our monorepo is structured or
            if we have well defined boundaries, they just address to visual of
            long import statements. Our code, while collocated, is not isolated
            in any meaningful way. With this in mind, the use of Path Aliases
            should be considered a step towards something better.
          </p>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            In fact, the TypeScript team even stated that developers should
            avoid using path aliases all together. If you are wanting to go full
            in on monorepos, there are better solutions that can be found in
            your package managers.
          </p>
        </div>
      </article>
    </div>
  );
}
