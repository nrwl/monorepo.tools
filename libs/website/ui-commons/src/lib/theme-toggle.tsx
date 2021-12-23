import { useEffect, useRef, useState } from 'react';
import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';

function update() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark', 'changing-theme');
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme');
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme');
  });
}

export const settings = [
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

export function useTheme(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [setting, setSetting] = useState('system');
  const initial = useRef(true);

  useEffect(() => {
    const theme = localStorage.theme;
    if (theme === 'light' || theme === 'dark') setSetting(theme);
  }, []);

  useEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme');
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting;
    }

    if (initial.current) initial.current = false;
    else update();
  }, [setting]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', update);

    function onStorage() {
      update();
      const theme = localStorage.theme;
      if (theme === 'light' || theme === 'dark') setSetting(theme);
      else setSetting('system');
    }
    window.addEventListener('storage', onStorage);

    return () => {
      mediaQuery.removeEventListener('change', update);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return [setting, setSetting];
}
