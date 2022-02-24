import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo }) {
  return (
    <li>
      <h3>{todo.text}</h3>
      <div className="btn-container">
        <button className="completed-btn">Mark as completed</button>
        <button className="remove-btn">Remove</button>
      </div>
    </li>
  );
}

export default TodoListItem;
