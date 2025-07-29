# Todo App Frontend

A modern, minimalistic React frontend for managing and tracking tasks (Todos).

## Features

- Add, edit, complete, and delete todo items
- Task list view with dynamic status filters (All / Active / Completed)
- Toggle completion with one click
- Responsive, minimalistic UI design
- Accessible keyboard navigation for all controls
- Modern color palette: Primary #2563eb, Secondary #64748b, Accent #f59e42

## Project Structure

- `src/App.js` — Main app logic and state
- `src/components/` — UI components (TodoList, TodoItem, TodoForm, Filters)
- `src/api/todos.js` — Abstracts Todo API (in-memory stub now, swap with REST later)
- `src/App.css` & `src/index.css` — Theme, palette, and minimal styles

## Running Locally

```sh
npm install
npm start
```

The UI will load on [http://localhost:3000](http://localhost:3000).

## Customization

To connect to a backend:
- Swap methods in `src/api/todos.js` with fetch/axios calls to your API.

## Design

- Modern, minimal, responsive layout:
  - Header with accent bar and title
  - Filtered controls and input on the left
  - Task list on the right
  - Media queries for mobile friendliness

Palette in CSS root variables (see `App.css`):
- Primary: #2563eb
- Secondary: #64748b
- Accent: #f59e42

## License

MIT
