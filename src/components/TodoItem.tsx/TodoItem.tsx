import ITodoItemProps from "../../types/ITodoItemProps";
import style from "./TodoItem.module.scss";

/**
 * The todo item component.
 * May be done or yet to be done.
 * Default behavior is to be yet to be done.
 * @param props
 * @returns
 */
const TodoItem = ({ key, todo, isDone = false, onToggle }: ITodoItemProps) => (
  <div className={style.todoItem}>
    <div
      className={style.todoItem__innerBox}
      role="checkbox"
      aria-checked={isDone}
      onClick={onToggle}
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          onToggle();
        }
      }}
    >
      <input type="checkbox" id={key} name={key} checked={isDone} />
      <label htmlFor={key}>{todo}</label>
    </div>
  </div>
);

export default TodoItem;
