import React, { useState } from "react";

/**
 * TodoItem renders a todo row, allows editing, completion toggle, and delete.
 * @param {object} todo - The todo item
 * @param {function} onEdit - Handler to edit todo (id, {updates})
 * @param {function} onDelete - Handler to delete todo (id)
 * @param {function} onToggle - Handler to toggle completion (id)
 */
function TodoItem({ todo, onEdit, onDelete, onToggle }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // PUBLIC_INTERFACE
  function handleEdit(e) {
    e.preventDefault();
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, { text: editText.trim() });
    }
    setEditing(false);
  }

  return (
    <li className={`todo-item${todo.completed ? " todo-item--completed" : ""}`}>
      <button
        className="todo-item__check"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Mark as active" : "Mark as completed"}
        tabIndex={0}
      >
        {todo.completed ? "✓" : ""}
      </button>
      {editing ? (
        <form onSubmit={handleEdit} className="todo-item__edit-form">
          <input
            className="todo-item__edit-input"
            value={editText}
            maxLength={80}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            onBlur={handleEdit}
            aria-label="Edit todo"
          />
        </form>
      ) : (
        <span
          className="todo-item__text"
          tabIndex={0}
          onDoubleClick={() => setEditing(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setEditing(true);
          }}
          title="Double click to edit"
        >
          {todo.text}
        </span>
      )}
      <button
        className="todo-item__edit"
        onClick={() => setEditing(true)}
        aria-label="Edit todo"
      >
        ✎
      </button>
      <button
        className="todo-item__delete"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        🗑
      </button>
    </li>
  );
}

export default TodoItem;
