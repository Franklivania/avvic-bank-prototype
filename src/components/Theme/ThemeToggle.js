import React, { createContext, useState } from 'react';

export const ThemeToggleContext = createContext();

export const ThemeToggleProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeToggleContext.Provider>
  );
};