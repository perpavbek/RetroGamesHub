import React, { createContext, useContext, useState } from 'react';
import { DarkTheme, LightTheme } from '../styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeToggle = () => useContext(ThemeContext);
