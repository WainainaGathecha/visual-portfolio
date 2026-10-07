import { useCallback, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ThemeContext } from './theme-context';

// The inline script in index.html already set the class before first paint,
// so the starting state is read from the DOM to guarantee they agree.
const getInitialTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('wg-theme', getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme],
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
