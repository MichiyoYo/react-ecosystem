import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

function TodoList({ todos }) {
  return (
    <>
      <NewTodoForm />
      <ul className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
