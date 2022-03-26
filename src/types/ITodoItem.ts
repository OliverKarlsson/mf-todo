import Todo from "./Todo";

interface ITodoItem {
  key: string;
  todo: Todo;
  isDone?: boolean;
}

export default ITodoItem;
