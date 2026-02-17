export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  assignee?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away';
}

export interface BoardState {
  tasks: Task[];
  users: User[];
  selectedTask?: string;
  filters: {
    status?: Task['status'];
    assignee?: string;
    priority?: Task['priority'];
  };
}
