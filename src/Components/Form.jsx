import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
    console.log(todos);
  }
  return (
    <form className={styles.bx} onSubmit={handleSubmit}>
      <div className="outln">
        <input
          className={styles.ip}
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter to-do item ..."
        />
        <button className={styles.btn}>Add</button>
      </div>
    </form>
  );
}
