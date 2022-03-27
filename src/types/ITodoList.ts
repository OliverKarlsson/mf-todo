import ITodoItem from "./ITodoItem";

interface ITodoList {
  todos: ITodoItem[];
  addTodo: (todo: ITodoItem) => void;
  removeTodo: (todo: ITodoItem) => void;
}
export default ITodoList;
