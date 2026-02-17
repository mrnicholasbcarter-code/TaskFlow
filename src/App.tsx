import React, { useState } from 'react';
import { useTaskStore } from './store/taskStore';
import { TaskCard } from './components/TaskCard';
import type { Task } from './types';

function App() {
  const [isDark, setIsDark] = useState(false);
  const { tasks, moveTask, deleteTask } = useTaskStore();

  const tasksByStatus = {
    todo: tasks.filter((t) => t.status === 'todo'),
    'in-progress': tasks.filter((t) => t.status === 'in-progress'),
    done: tasks.filter((t) => t.status === 'done'),
  };

  const columns: Array<{ id: Task['status']; title: string }> = [
    { id: 'todo', title: '📋 To Do' },
    { id: 'in-progress', title: '⚙️ In Progress' },
    { id: 'done', title: '✅ Done' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <header className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            TaskFlow
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-lg ${
              isDark
                ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                : 'bg-gray-800 hover:bg-gray-700 text-white'
            }`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <div
              key={column.id}
              className={`rounded-lg p-4 ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              } min-h-96`}
            >
              <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {column.title}
              </h2>
              
              <div className="space-y-2">
                {tasksByStatus[column.id].length > 0 ? (
                  tasksByStatus[column.id].map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragEnd={() => moveTask(task.id, column.id)}
                      className="cursor-move"
                    >
                      <TaskCard task={task} onDelete={deleteTask} />
                    </div>
                  ))
                ) : (
                  <p className={`text-center py-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    No tasks
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
