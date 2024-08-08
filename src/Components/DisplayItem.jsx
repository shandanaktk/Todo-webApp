import styles from "./DisplayItem.module.css";

export default function DisplayItem({ item, todos, settodos }) {
  function handleDelete(item) {
    // console.log("Delete item ", item);
    settodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(item) {
    console.log("Clicked on ", item);
    const newArray = todos.map((todo) =>
      todo === item ? { ...todo, done: !item.done } : todo
    );
    settodos(newArray);
    console.log(todos);
  }

  const classIndicator = item.done ? styles.comp : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classIndicator} onClick={() => handleClick(item)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.x}>
            x
          </button>
        </span>
      </div>
      <hr />
    </div>
  );
}
