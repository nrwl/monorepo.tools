'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function useIsDark(): boolean {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(resolvedTheme !== 'light');
  }, [resolvedTheme]);

  return isDark;
}
