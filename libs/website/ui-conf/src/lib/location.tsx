import { LinkIcon } from '@heroicons/react/24/outline';

export function Location() {
  return (
    <div className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div
            id="location"
            className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Where It's At
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#location"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </header>

        <article className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl sm:leading-relaxed">
              Computer History Museum
            </h2>
            <h3>1401 N. Shoreline Blvd. Mountain View, CA</h3>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Spend a day exploring monorepos while surrounded by exhibits and
              collections that illuminate the people and innovations that have
              transformed our world.
            </p>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              aria-hidden="true"
              loading="lazy"
              className="relative mx-auto shadow-xl md:rounded-2xl"
              width={490}
              src="/images/conf/chm.webp"
              alt="monorepo vs polyrepo"
            />
          </div>
        </article>

        <article className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl sm:leading-relaxed">
                Shashi Hotel
              </h2>
              <h3>1625 N Shoreline Blvd. Mission View, CA</h3>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                A short walk away from the conference venue, Shashi Hotel offers
                a tranquil atmosphere to wind down.
              </p>

              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                <a
                  className="border-mw-green hover:bg-mw-green border-b transition hover:rounded hover:text-gray-800"
                  href="https://shashihotel.ihotelier.com/book/dates-of-stay?groupID=4296006"
                >
                  Reserve a room with special conference discount
                </a>
              </p>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <img
                aria-hidden="true"
                loading="lazy"
                className="relative mx-auto shadow-xl md:rounded-2xl"
                width={490}
                src="images/conf/shashi.webp"
                alt="monolith vs modular"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Location;
