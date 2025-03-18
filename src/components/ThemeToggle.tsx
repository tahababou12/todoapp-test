import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors dark:bg-gray-700 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-700" />
      ) : (
        <Sun size={20} className="text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
