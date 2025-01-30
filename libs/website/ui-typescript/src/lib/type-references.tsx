import { LinkIcon } from '@heroicons/react/24/outline';

export function TypeReferences(): React.JSX.Element {
  return (
    <div
      id="project-references"
      className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          # Project References
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
          Provide deeper understanding of your monorepos types and speed up
          TypeScript compilation for large projects.
        </p>
      </div>
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
            References Across Monorepos
          </h2>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
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
        </div>
      </article>

      <article className="relative mx-auto  mt-12 max-w-7xl sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="lg:col-start-2">
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Project References are references to nested{' '}
              <code>tsconfig.json</code>s that are in a workspace. By providing
              them, you can inform the TypeScript compiler about any nested
              projects and the types present in there. Now TypeScript will be
              able to treat each project as it's own isolated piece of code, and
              can better optimize how it returns any type information for your
              editor. In addition to the type benefits, TypeScript can now
              compile pieces of your codebase in better isolation. In the
              loosest sense, project references turns the TypeScript compiler
              into a monorepo tool.
            </p>
          </div>

          <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <img
              aria-hidden="true"
              loading="lazy"
              className="relative mx-auto"
              width={490}
              src="/images/typescript/project-references.svg"
              alt="direct export of typescript"
            />
          </div>
        </div>
      </article>

      <article className="relative mx-auto  mt-12 max-w-7xl sm:mt-16 lg:mt-24">
        <div className="mx-auto max-w-2xl">
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            Project references can have some draw back in monorepos that include
            a lot of types. For instance, trcp can generate type information for
            every route in your API. Normally this is great, and project
            references can make sure that type information is available to you.
            But if you have a large API, you could be dealing with significant
            delays in your editor when you try to trigger auto-completion or get
            a symbols type. This isn't only isolated to trpc, but any monorepo
            that has a large and complex type setup.
          </p>
        </div>
      </article>
    </div>
  );
}
