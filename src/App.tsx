import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { Trash2 } from 'lucide-react';

function App() {
  const { 
    todos, 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    editTodo,
    clearCompleted,
    filter,
    setFilter,
    activeCount,
    completedCount
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 transition-colors">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors">
        <div className="p-8">
          <TodoHeader />
          
          <TodoForm onAdd={addTodo} />
          
          <TodoFilter 
            currentFilter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
          />
          
          <TodoList 
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          
          {completedCount > 0 && (
            <div className="mt-6 text-right">
              <button
                onClick={clearCompleted}
                className="inline-flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 rounded-md hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
              >
                <Trash2 size={16} className="mr-1" />
                Clear completed
              </button>
            </div>
          )}
        </div>
        
        <footer className="bg-gray-50 dark:bg-gray-700 py-4 px-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-600 transition-colors">
          <p>Double-click on a task to edit • Drag to reorder</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
