import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
