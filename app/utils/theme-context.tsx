'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import usePrefersColorScheme from 'use-prefers-color-scheme';

type ThemeContextProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      // Access the theme from localStorage, cookie, or any other preferred method
      const storedTheme = localStorage.getItem('theme');
      return storedTheme === 'dark' ? 'dark' : 'light';
    }

    return prefersColorScheme === 'no-preference'
      ? 'light'
      : prefersColorScheme;
  });

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const themeInitialized = useRef(false);

  useEffect(() => {
    if (!themeInitialized.current) {
      themeInitialized.current = true;
      return;
    }

    // Save the theme to localStorage, cookie, or any other preferred method
    localStorage.setItem('theme', theme);
  }, [theme]);

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
