import React from "react";

/**
 * Filter controls for Todos: All / Active / Completed, with counts and active highlight
 * @param {string} current - current filter
 * @param {function} onChange - (status) => void
 * @param {object} counts - { all, active, completed }
 */
function Filters({ current, onChange, counts }) {
  return (
    <div className="filters">
      <button
        className={`filter-btn${current === "all" ? " filter-btn--active" : ""}`}
        onClick={() => onChange("all")}
      >
        All <span className="filter-count">{counts.all}</span>
      </button>
      <button
        className={`filter-btn${current === "active" ? " filter-btn--active" : ""}`}
        onClick={() => onChange("active")}
      >
        Active <span className="filter-count">{counts.active}</span>
      </button>
      <button
        className={`filter-btn${current === "completed" ? " filter-btn--active" : ""}`}
        onClick={() => onChange("completed")}
      >
        Completed <span className="filter-count">{counts.completed}</span>
      </button>
    </div>
  );
}

export default Filters;
