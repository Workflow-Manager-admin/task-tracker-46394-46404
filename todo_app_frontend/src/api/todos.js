/**
 * todoApi abstracts async storage and future REST API layer.
 * Replace methods with real fetch/adapters for REST backend later.
 */

// Simple in-memory data for development/demo purposes
let _todos = [
  { id: 1, text: "Welcome to your Todo App!", completed: false },
  { id: 2, text: "Double-click a task to edit", completed: false },
  { id: 3, text: "Use filters to view only completed or active", completed: false }
];
let _nextId = 4;

export const todoApi = {
  // PUBLIC_INTERFACE
  getTodos: async () => {
    // Could be replaced by fetch('/api/todos') etc.
    return Promise.resolve([..._todos]);
  },
  // PUBLIC_INTERFACE
  createTodo: (text) => {
    const todo = { id: _nextId++, text, completed: false };
    _todos.unshift(todo);
    return todo;
  },
  // PUBLIC_INTERFACE
  updateTodo: (id, updates) => {
    _todos = _todos.map((t) => (t.id === id ? { ...t, ...updates } : t));
    return true;
  },
  // PUBLIC_INTERFACE
  deleteTodo: (id) => {
    _todos = _todos.filter((t) => t.id !== id);
    return true;
  },
  // PUBLIC_INTERFACE
  toggleComplete: (id) => {
    _todos = _todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    return true;
  }
};
