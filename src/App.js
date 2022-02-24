import React from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";

const todos = [
  {
    id: 1,
    text: "go to yoga",
    completed: false,
  },
  {
    id: 2,
    text: "buy milk",
    completed: false,
  },
  {
    id: 3,
    text: "water the plants",
    completed: true,
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default hot(module)(App);
