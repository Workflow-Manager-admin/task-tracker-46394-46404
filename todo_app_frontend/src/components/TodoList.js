import React from "react";
import TodoItem from "./TodoItem";

/**
 * TodoList renders a list of TodoItems with edit, toggle, and delete functionality.
 * @param {Array} todos - The todo items to display
 * @param {Function} onEdit - Handler for editing a todo
 * @param {Function} onDelete - Handler for deleting a todo
 * @param {Function} onToggle - Handler for toggling a todo's completion
 * @param {Boolean} loading - Whether the list is loading
 */
function TodoList({ todos, onEdit, onDelete, onToggle, loading }) {
  if (loading) {
    return <div className="todo-list__loading">Loading...</div>;
  }
  if (!todos.length) {
    return <div className="todo-list__empty">No todos to show.</div>;
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
