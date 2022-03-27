import Todo from "./Todo";

interface ITodoItem {
  key: string;
  todo: Todo;
  isDone?: boolean;
  onToggle: () => {};
}

export default ITodoItem;
