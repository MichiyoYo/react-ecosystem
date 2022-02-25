import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo, onRemovePressed, onMarkAsCompleted }) {
  return (
    <li>
      <h3>{todo.text}</h3>
      <div className="btn-container">
        {todo.isCompleted || (
          <button
            className="completed-btn"
            onClick={() => onMarkAsCompleted(todo.text)}
          >
            Mark as completed
          </button>
        )}
        <button
          onClick={() => onRemovePressed(todo.text)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
