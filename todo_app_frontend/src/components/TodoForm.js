import React, { useState } from "react";

/**
 * TodoForm provides an input for adding new todo items.
 * @param {function} onAdd - Callback with new todo text
 */
function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit} autoComplete="off">
      <input
        className="todo-form__input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        maxLength={80}
        onChange={(e) => setText(e.target.value)}
        aria-label="Add new todo"
      />
      <button className="todo-form__button" type="submit" aria-label="Add todo">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
