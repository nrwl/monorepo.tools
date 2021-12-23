export function MonolithCallout() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block text-gray-900 dark:text-white">
                ✋ Monolith &#8800; Monorepo
              </span>
            </h2>
            <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
              In fact, such a repo is prohibitively monolithic, which is often
              the first thing that comes to mind when people think of monorepos.
              Keep reading, and you'll see that a good monorepo is the opposite
              of monolithic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonolithCallout;
