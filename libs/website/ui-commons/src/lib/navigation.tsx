import { useEffect, useState } from 'react';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';

export function Navigation() {
  const themeSettings = [
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Home', exact: true },
    { href: '/typescript', label: 'TypeScript' },
    { href: '/ai', label: 'AI & Monorepos' },
  ];

  const isActivePath = (href: string, exact?: boolean) => {
    if (exact) {
      return router.pathname === href;
    }
    return router.pathname.startsWith(href);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-extrabold text-gray-900 dark:text-white">
                  monorepo
                </span>
                <span className="text-lg font-semibold text-yellow-500">
                  .tools
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActivePath(item.href, item.exact)
                      ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 dark:text-gray-300 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Theme Switcher */}
            <div className="hidden md:flex md:space-x-1">
              {!isMounted
                ? null
                : themeSettings.map((variant) => (
                    <button
                      key={variant.value}
                      className={cx(
                        'rounded-md p-2 transition-colors',
                        theme === variant.value
                          ? 'bg-yellow-50 text-yellow-500 dark:bg-yellow-900/20'
                          : 'text-gray-400 hover:bg-yellow-50 hover:text-yellow-500 dark:text-gray-500 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400'
                      )}
                      title={variant.label}
                      onClick={() => setTheme(variant.value)}
                    >
                      <variant.icon className="h-4 w-4" />
                      <span className="sr-only">{variant.label}</span>
                    </button>
                  ))}
            </div>

            {/* Mobile menu button and theme switcher */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Mobile Theme Toggle (simplified) */}
              {isMounted && (
                <button
                  className="rounded-md p-2 text-gray-400 hover:bg-yellow-50 hover:text-yellow-500 dark:text-gray-500 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400"
                  onClick={() => {
                    const nextTheme =
                      theme === 'light'
                        ? 'dark'
                        : theme === 'dark'
                        ? 'system'
                        : 'light';
                    setTheme(nextTheme);
                  }}
                  title={`Switch to ${
                    theme === 'light'
                      ? 'dark'
                      : theme === 'dark'
                      ? 'system'
                      : 'light'
                  } theme`}
                >
                  {theme === 'light' ? (
                    <SunIcon className="h-5 w-5" />
                  ) : theme === 'dark' ? (
                    <MoonIcon className="h-5 w-5" />
                  ) : (
                    <ComputerDesktopIcon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </button>
              )}

              {/* Mobile menu button */}
              <button
                className="rounded-md p-2 text-gray-400 hover:bg-yellow-50 hover:text-yellow-500 dark:text-gray-500 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden dark:border-gray-700 dark:bg-slate-900">
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                    isActivePath(item.href, item.exact)
                      ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 dark:text-gray-300 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Theme Switcher Section */}
              {isMounted && (
                <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div className="px-3 pb-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Theme
                    </p>
                  </div>
                  <div className="space-y-1">
                    {themeSettings.map((variant) => (
                      <button
                        key={variant.value}
                        className={cx(
                          'flex w-full items-center rounded-md px-3 py-2 text-left text-base font-medium transition-colors',
                          theme === variant.value
                            ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
                            : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 dark:text-gray-300 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400'
                        )}
                        onClick={() => {
                          setTheme(variant.value);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <variant.icon className="mr-3 h-5 w-5" />
                        {variant.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navigation;
