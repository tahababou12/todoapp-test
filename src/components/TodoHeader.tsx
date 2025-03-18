import React from 'react';
import { CheckSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const TodoHeader: React.FC = () => {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <CheckSquare size={32} className="text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">TaskMaster</h1>
        </div>
        <ThemeToggle />
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-center">Organize your day, boost your productivity</p>
    </header>
  );
};

export default TodoHeader;
