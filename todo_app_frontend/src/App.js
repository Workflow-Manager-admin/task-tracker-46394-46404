import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Filters from "./components/Filters";
import { todoApi } from "./api/todos";

/**
 * The main App component for the Todo App.
 * - Manages todo state and filters
 * - Handles add, edit, completion toggle, and delete
 * - Provides a responsive, modern minimalistic UI
 */
function App() {
  // State for todo items and active filter
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch initial todos (simulated with API abstraction, replace with real API later)
  useEffect(() => {
    async function fetchTodos() {
      setLoading(true);
      const todosData = await todoApi.getTodos();
      setTodos(todosData);
      setLoading(false);
    }
    fetchTodos();
  }, []);

  // PUBLIC_INTERFACE
  function handleAddTodo(text) {
    if (!text.trim()) return;
    const newTodo = todoApi.createTodo(text); // returns the created todo object
    setTodos((prev) => [newTodo, ...prev]);
  }

  // PUBLIC_INTERFACE
  function handleUpdateTodo(id, updatedFields) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      )
    );
    todoApi.updateTodo(id, updatedFields);
  }

  // PUBLIC_INTERFACE
  function handleDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    todoApi.deleteTodo(id);
  }

  // PUBLIC_INTERFACE
  function handleToggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    todoApi.toggleComplete(id);
  }

  // PUBLIC_INTERFACE
  function handleFilterChange(status) {
    setFilter(status);
  }

  // Filter todos for rendering
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Responsive minimalistic UI, modern header with accent color bar
  return (
    <div className="todo-app__container">
      <header className="todo-app__header">
        <div className="todo-app__header-bar" />
        <h1 className="todo-app__title">Todo Tracker</h1>
        <p className="todo-app__subtitle">
          A minimal, modern way to manage your tasks
        </p>
      </header>
      <main className="todo-app__main">
        <section className="todo-app__left">
          <TodoForm onAdd={handleAddTodo} />
          <Filters
            current={filter}
            onChange={handleFilterChange}
            counts={{
              all: todos.length,
              active: todos.filter((t) => !t.completed).length,
              completed: todos.filter((t) => t.completed).length,
            }}
          />
        </section>
        <section className="todo-app__right">
          <TodoList
            todos={filteredTodos}
            onEdit={handleUpdateTodo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleComplete}
            loading={loading}
          />
        </section>
      </main>
      <footer className="todo-app__footer">
        <span>
          Built with <span role="img" aria-label="react">⚛️</span> React — Minimal Style
        </span>
      </footer>
    </div>
  );
}

export default App;
