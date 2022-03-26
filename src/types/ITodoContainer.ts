import Todo from "./Todo";

/**
 * Type of a container of todos.
 * The default value should be `{ yetTodos: [], doneTodos: [] }`.
 */
interface ITodoContainer {
  yetTodos?: Todo[];
  doneTodos?: Todo[];
}

export default ITodoContainer;
