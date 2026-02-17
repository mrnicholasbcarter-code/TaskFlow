import { create } from 'zustand';
import type { Task, User, BoardState } from '../types';

interface TaskStore extends BoardState {
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, newStatus: Task['status']) => void;
  setFilters: (filters: Partial<BoardState['filters']>) => void;
  addUser: (user: User) => void;
  updateUserStatus: (userId: string, status: User['status']) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Design system setup',
      description: 'Create consistent UI components',
      status: 'done',
      priority: 'high',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      assignee: 'alice',
    },
    {
      id: '2',
      title: 'API integration',
      description: 'Connect to backend services',
      status: 'in-progress',
      priority: 'high',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      assignee: 'bob',
    },
    {
      id: '3',
      title: 'User testing',
      description: 'Gather feedback from users',
      status: 'todo',
      priority: 'medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  users: [
    { id: 'alice', name: 'Alice', email: 'alice@example.com', status: 'online' },
    { id: 'bob', name: 'Bob', email: 'bob@example.com', status: 'online' },
  ],
  filters: {},

  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),

  moveTask: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
    })),

  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),

  updateUserStatus: (userId, status) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === userId ? { ...u, status } : u)),
    })),
}));
