export function ToolsSupportCallout() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block text-gray-900 dark:text-white">
                Tools call out title about support
              </span>
            </h2>
            <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
              Some tools support more functionality call out. You can always
              implement you own version of the missing feature by coding from
              scratch or using a library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSupportCallout;
