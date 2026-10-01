import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Time-boxed promo bar for the Nx product event (Oct 22, 2026).
// Checked at runtime so the static build stops showing it after `activeUntil`.
export const productEventBanner = {
  id: 'nx-product-event-2026-oct',
  url: 'https://nx.dev/events/2026-oct-product-event?utm_source=monorepotools&utm_medium=banner#register',
  heroUrl:
    'https://nx.dev/events/2026-oct-product-event?utm_source=monorepotools&utm_medium=banner&utm_content=hero#register',
  // End of Oct 22 2026, ET (UTC-4).
  activeUntil: '2026-10-23T04:00:00Z',
};

const DISMISS_KEY = `banner-dismissed:${productEventBanner.id}`;

export function isProductEventBannerActive(now: Date = new Date()): boolean {
  return now < new Date(productEventBanner.activeUntil);
}

export function ProductEventBanner() {
  // Render only after mount so dismissed visitors never see a flash.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === 'true';
    } catch {
      // localStorage unavailable (e.g. privacy mode); show the banner.
    }
    setVisible(isProductEventBannerActive() && !dismissed);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, 'true');
    } catch {
      // Ignore; the banner stays hidden for this page view.
    }
  };

  return (
    <div className="relative border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center gap-3 py-2.5 pl-4 pr-12 sm:px-12 lg:max-w-none lg:pl-4">
        <a
          href={productEventBanner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 items-center gap-x-2 text-sm sm:justify-center sm:gap-x-3 md:flex-wrap md:gap-y-0.5 md:text-center lg:min-w-0 lg:flex-nowrap lg:gap-x-2.5"
        >
          <span className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
            The Future of CI
          </span>
          <span className="hidden text-gray-600 md:order-last md:block md:basis-full lg:order-none lg:min-w-0 lg:basis-auto lg:truncate dark:text-gray-400">
            Faster caching and distribution, using half the compute. Join our
            live product event, Oct 22.
          </span>
          <span className="whitespace-nowrap font-semibold text-blue-500 underline underline-offset-2 group-hover:text-blue-700 dark:text-sky-500 dark:group-hover:text-sky-300">
            Save my spot <span aria-hidden="true">&rarr;</span>
          </span>
        </a>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-2 top-2 rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 sm:top-1/2 sm:-translate-y-1/2 lg:right-4 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default ProductEventBanner;
