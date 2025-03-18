import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center w-full">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="flex items-center justify-center p-3 bg-blue-600 dark:bg-blue-700 text-white rounded-r-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          <PlusCircle size={20} className="mr-1" />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
