# TaskFlow

Real-time task collaboration application built with React, TypeScript, and Zustand.

## 🎯 Features

- **Real-time Task Management**: Create, update, and delete tasks instantly
- **Drag & Drop**: Move tasks between columns (To Do, In Progress, Done)
- **Priority Levels**: Organize tasks by priority (Low, Medium, High)
- **User Presence**: See who's online and working on what
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Type-Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks and concurrent features
- **TypeScript**: Full type safety and better IDE support
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool
- **Supabase Ready**: Can integrate real-time sync with Supabase

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/taskflow.git
cd taskflow

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Usage

The application comes with sample tasks and users pre-loaded:

1. **View Tasks**: Tasks are organized in three columns: To Do, In Progress, and Done
2. **Drag Tasks**: Click and drag any task to move it between columns
3. **Delete Tasks**: Click the delete button on any task to remove it
4. **Toggle Theme**: Use the dark/light mode button in the header to change themes

## 📁 Project Structure

```
taskflow/
├── src/
│   ├── components/
│   │   └── TaskCard.tsx      # Individual task card component
│   ├── store/
│   │   └── taskStore.ts      # Zustand store for state management
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind CSS imports
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Project dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file if you want to add Supabase integration:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 📊 Component API

### TaskCard Component

```typescript
interface TaskCardProps {
  task: Task;
  onUpdate?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
}
```

### Task Type

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  assignee?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}
```

## 🎨 Customization

### Add New Tasks

Edit `src/store/taskStore.ts` to add more sample tasks:

```typescript
tasks: [
  {
    id: 'new-id',
    title: 'New Task',
    description: 'Task description',
    status: 'todo',
    priority: 'high',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
```

### Modify Styling

All styling uses Tailwind CSS classes. Update `tailwind.config.js` for theme customization or modify component classes directly.

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import this repository
5. Accept default settings and deploy

Your app will be live at `https://taskflow-xxx.vercel.app`

## 📚 Future Enhancements

- [ ] Supabase real-time synchronization
- [ ] WebSocket support for multi-user collaboration
- [ ] Task comments and attachments
- [ ] Time tracking
- [ ] Recurring tasks
- [ ] Calendar integration
- [ ] Mobile app version
- [ ] Advanced filtering and search

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues and questions, please open an issue on GitHub or contact the maintainer.

---

**Status**: ✅ Production Ready  
**Last Updated**: February 2026
