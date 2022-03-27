import ITodoListProps from "../../types/ITodoListProps";
import TodoItem from "../TodoItem.tsx/TodoItem";
import useTodoList from "./useTodoList/useTodoList";
import style from "./TodoList.module.scss";

/**
 * The main todo component.
 * @param props
 * @returns
 */
const TodoList = ({ yetTodos = [], doneTodos = [] }: ITodoListProps) => {
  const yetTodo = useTodoList(yetTodos);
  const doneTodo = useTodoList(doneTodos);
  return (
    <div className={style.todoList}>
      {yetTodo.todos.map(({ key, todo }) => (
        <TodoItem
          key={key}
          todo={todo}
          onToggle={() => {
            yetTodo.removeTodo({ key, todo });
            doneTodo.addTodo({ key, todo });
          }}
        />
      ))}
      {doneTodo.todos.map(({ key, todo }) => (
        <TodoItem
          key={key}
          todo={todo}
          onToggle={() => {
            doneTodo.removeTodo({ key, todo });
            yetTodo.addTodo({ key, todo });
          }}
          isDone
        />
      ))}
    </div>
  );
};

export default TodoList;
