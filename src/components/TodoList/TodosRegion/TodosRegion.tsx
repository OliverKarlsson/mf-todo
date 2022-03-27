import ITodoItem from "../../../types/ITodoItem";
import TodoItem from "../../TodoItem.tsx/TodoItem";
import style from "./TodosRegion.module.scss";

interface ITodosRegionProps {
  todos: ITodoItem[];
  onItemToggle: (todoItem: ITodoItem) => void;
  isDoneTodos?: boolean;
}

const TodosRegion = ({
  todos,
  onItemToggle,
  isDoneTodos = false,
}: ITodosRegionProps) => {
  return (
    <div
      className={style.todosRegion}
      role="region"
      aria-label={
        isDoneTodos ? "The completed todos" : "The todos yet to be completed"
      }
    >
      {todos.map(({ key, todo }) => (
        <TodoItem
          key={key}
          todo={todo}
          isDone={isDoneTodos}
          onToggle={() => {
            onItemToggle({ key, todo });
          }}
        />
      ))}
    </div>
  );
};

export default TodosRegion;
