import { useEffect, useState } from 'react';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import cx from 'classnames';

export function Header() {
  const settings = [
    {
      value: 'light',
      label: 'Light',
      icon: SunIcon,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: MoonIcon,
    },
    {
      value: 'system',
      label: 'System',
      icon: ComputerDesktopIcon,
    },
  ];
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800">
      <div
        id="animated-background"
        className="transform-gpu bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/header-background.svg)',
          backgroundSize: '1200px 600px',
        }}
      >
        <header className="relative px-4 py-24 sm:px-6 md:grid md:min-h-screen md:place-items-center lg:px-8">
          <div className="absolute right-4 top-5 space-x-4 text-gray-300 dark:text-gray-600">
            {!isMounted
              ? null
              : settings.map((variant) => (
                  <button
                    key={variant.value}
                    className={cx(
                      theme === variant.value ? 'text-yellow-500' : '',
                      'p-1'
                    )}
                    title={variant.label}
                    onClick={() => setTheme(variant.value)}
                  >
                    <variant.icon className="h-6 w-6" />
                    <span className="sr-only">{variant.label}</span>
                  </button>
                ))}
          </div>
          <div className="mx-auto max-w-max">
            <div data-test-id="website-name" className="w-full">
              <span className="text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-8xl">
                monorepo
              </span>
              <span className="text-3xl font-semibold tracking-tight text-yellow-500 sm:text-5xl">
                .tools
              </span>
            </div>
            <div className="mt-14 flex justify-end">
              <div className="border-yellow-500 sm:w-2/3 sm:border-l-4">
                <h1
                  data-test-id="website-slogan"
                  className="py-3 pl-8 text-2xl font-normal text-gray-800 dark:text-gray-200"
                >
                  Everything you need to know about monorepos, and the tools to
                  build them.
                </h1>
                <p className="text-right text-xs italic text-gray-500">
                  -{' '}
                  <a
                    href="https://nrwl.io"
                    rel="nofollow"
                    title="Nrwl - Monorepo expertise"
                  >
                    Made with love by Nrwl
                  </a>{' '}
                  <a
                    href="https://nx.dev"
                    rel="nofollow"
                    title="Monorepo build tool"
                  >
                    (the company behind Nx)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <a
            title="Go to Understanding Monorepos"
            href="#understanding-monorepos"
            aria-hidden="true"
            className="absolute left-1/2 bottom-2 -ml-4 hidden lg:block"
          >
            <svg
              className="h-14 w-14 animate-pulse text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </header>
      </div>
    </div>
  );
}

export default Header;
