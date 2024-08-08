import { useState } from "react";
import DisplayItem from "./displayItem";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.filter((todo) => todo).length;
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
