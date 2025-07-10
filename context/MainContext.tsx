'use client'

import React, { createContext, useState, ReactNode } from 'react'

type MainContextType = {
  darkMode: string;
  toggleTheme: () => void;
};

const defaultValue: MainContextType = {
  darkMode: 'light',
  toggleTheme: () => {},
};

export const MainContext = createContext<MainContextType>(defaultValue);


export const MainContextProvider = ({ children }: { children: ReactNode }) => {


    const [darkMode, setDarkMode] = useState<string>('light');

    const toggleTheme = () => {
        setDarkMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    return (
        <MainContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </MainContext.Provider>
    );
};
