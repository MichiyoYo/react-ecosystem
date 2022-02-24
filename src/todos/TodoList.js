import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo } from "./actions";

function TodoList({ todos, onRemovePressed }) {
  return (
    <>
      <NewTodoForm />
      <ul className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            onRemovePressed={onRemovePressed}
          />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
