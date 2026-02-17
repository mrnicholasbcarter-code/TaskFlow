import React from 'react';
import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onUpdate?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdate, onDelete }) => {
  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-3 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded ${priorityColors[task.priority]}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        {task.assignee && (
          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
            {task.assignee}
          </span>
        )}
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(task.id)}
          className="text-xs text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      )}
    </div>
  );
};
