import { LinkIcon } from '@heroicons/react/24/outline';

export function TypeReferences(): React.JSX.Element {
  return (
    <div
      id="type-references"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # Type References
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#type-references"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          Provide type information across your monorepo with Project References
        </p>
      </div>
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h1
            id="mapping-to-a-path"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            References Across Monorepos
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
            With the move to workspaces, one thing that gets left behind is the
            detailed type information that our projects can provide. Path
            Aliases also have this issue, as deeply nested imports might not
            always get the correct type information from TypeScript. We can help
            TypeScript out here by utilizing Project References.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/typescript/reference-404.svg"
            alt="typescript path mappings"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Project References are references to nested{' '}
            <code>tsconfig.json</code>s that are in a workspace. By providing
            providing them, you can inform the TypeScript compiler about any
            nested project and any types in that project. Now TypeScript will be
            able to treat each project as it's own isolated piece of code, and
            can better optimize how it returns any type information for your
            editor. In addition to the type benefits, TypeScript can now compile
            pieces of your codebase in better isolation. In the loosest sense,
            project references turns the TypeScript compiler into a monorepo
            tool.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/typescript/project-references.svg"
            alt="libraries in silos"
          />
        </div>
      </article>
    </div>
  );
}
