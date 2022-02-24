import React, { useState } from "react";
import "./NewTodoForm.css";

function NewTodoForm(props) {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="new-todo-form">
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Type your new todo here"
        className="new-todo-input"
        type="text"
      />
      <button className="new-todo-btn">Add todo</button>
    </div>
  );
}

export default NewTodoForm;
