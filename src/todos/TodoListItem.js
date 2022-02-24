import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo, onRemovePressed }) {
  return (
    <li>
      <h3>{todo.text}</h3>
      <div className="btn-container">
        <button className="completed-btn">Mark as completed</button>
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
