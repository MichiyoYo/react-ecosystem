import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

function NewTodoForm({ todos, onCreatePressed }) {
  const inputRef = useRef();
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [inputVal]);

  return (
    <div className="new-todo-form">
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Type your new todo here"
        className="new-todo-input"
        type="text"
        ref={inputRef}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some((todo) => todo.text === inputVal);
          if (!isDuplicateText) {
            onCreatePressed(inputVal);
            setInputVal("");
          }
        }}
        className="new-todo-btn"
      >
        Add todo
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
