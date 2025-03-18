
import React from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ 
  currentFilter, 
  onFilterChange,
  activeCount,
  completedCount
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div className="flex space-x-4 mb-3 sm:mb-0">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentFilter === 'all'
              ? 'bg-blue-100 dark:bg-blue-900 text-blue