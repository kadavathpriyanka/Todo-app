import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;