export function MonolithCallout() {
  return (
    <article className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block text-gray-900 dark:text-white">
                ✋ Monorepo <span aria-hidden="true">&#8800;</span>{' '}
                <span className="sr-only">is different from</span> Monolith
              </span>
            </h1>
            <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
              This is the most common misconception about monorepos. In reality
              a good monorepo is the opposite of monolithic. Read more about
              this and other misconceptions in{' '}
              <a
                title="Misconceptions about Monorepos: Monorepo != Monolith"
                rel="nofollow"
                className="border-b border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition"
                href="https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c"
              >
                this blog post: &ldquo;Misconceptions about Monorepos: Monorepo
                != Monolith&rdquo;
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MonolithCallout;
