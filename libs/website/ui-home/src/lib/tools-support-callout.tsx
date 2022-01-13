export function ToolsSupportCallout() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block text-gray-900 dark:text-white">
                It's not just about the features.
              </span>
            </h2>
            <p className="mt-4 text-xl leading  -6 text-gray-700 dark:text-gray-300">
              If you have a large monorepo, support for distributed task execution can be a game
              changer, so features, of course, matter. But there are other extremely important things such as dev ergonomics,
              maturity, documentation, editor support etc. We don't cover them here because they are more subjective.
            </p>
            <p className="mt-4 text-xl leading  -6 text-gray-700 dark:text-gray-300">
              You may find, say, Lage more enjoyable to use than Nx or Bazel even though in some ways it is less capable.
            </p>
            <p className="mt-4 text-xl leading  -6 text-gray-700 dark:text-gray-300">
              Some features are easy to add even when a given tool doesn't support it (e.g., code
              generation), and some aren't really possible to add (e.g., distributed task execution).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSupportCallout;
