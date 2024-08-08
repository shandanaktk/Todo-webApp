import { useState } from "react";
import styles from "./TodoList.module.css";
import DisplayItem from "./displayItem";

export default function TodoList({ todos, settodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.ls}>
      {sortedTodos.map((item) => (
        <DisplayItem
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}
