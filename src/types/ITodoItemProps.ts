import Todo from "./Todo";

interface ITodoItemProps {
  key: string;
  todo: Todo;
  isDone?: boolean;
  onToggle: () => void;
}

export default ITodoItemProps;
