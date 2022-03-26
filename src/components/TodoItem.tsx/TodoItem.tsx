import ITodoItem from "../../types/ITodoItem";

/**
 * The todo item component.
 * May be done or yet to be done.
 * Default behavior is to be yet to be done.
 * @param props
 * @returns
 */
const TodoItem = ({ key, todo, isDone = false }: ITodoItem) => (
  <div>
    <input type="checkbox" id={key} name={key} defaultChecked={isDone} />
    <label htmlFor={key}>{todo}</label>
  </div>
);

export default TodoItem;
