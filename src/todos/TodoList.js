import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo, markAsCompleted } from "./actions";

function TodoList({ todos, onRemovePressed, onMarkAsCompleted }) {
  return (
    <>
      <NewTodoForm />
      <ul className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onMarkAsCompleted={onMarkAsCompleted}
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
  onMarkAsCompleted: (text) => dispatch(markAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
