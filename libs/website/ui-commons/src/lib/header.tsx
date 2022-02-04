import { useEffect, useState } from 'react';
import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';
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
      icon: DesktopComputerIcon,
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
        <header className="relative md:min-h-screen px-4 py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
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
                    <variant.icon className="w-6 h-6" />
                    <span className="sr-only">{variant.label}</span>
                  </button>
                ))}
          </div>
          <div className="max-w-max mx-auto">
            <div data-test-id="website-name" className="w-full">
              <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tighter sm:text-8xl">
                monorepo
              </span>
              <span className="text-3xl font-semibold text-yellow-500 tracking-tight sm:text-5xl">
                .tools
              </span>
            </div>
            <div className="mt-14 flex justify-end">
              <div className="sm:w-2/3 sm:border-l-4 border-yellow-500">
                <h1
                  data-test-id="website-slogan"
                  className="pl-8 py-3 text-2xl font-normal text-gray-800 dark:text-gray-200"
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
            className="absolute hidden lg:block left-1/2 -ml-4 bottom-2"
          >
            <svg
              className="animate-pulse w-14 h-14 text-yellow-500"
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
