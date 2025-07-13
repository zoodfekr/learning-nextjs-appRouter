'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';

type MainContextType = {
  darkMode: string;
  toggleTheme: () => void;
};

const defaultValue: MainContextType = {
  darkMode: 'light',
  toggleTheme: () => { },
};

export const MainContext = createContext<MainContextType>(defaultValue);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  
  const [darkMode, setDarkMode] = useState<string>('light');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme);
    }
    setHasMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode === 'light' ? 'dark' : 'light';
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!hasMounted) return null;

  return (
    <MainContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </MainContext.Provider>
  );
};
