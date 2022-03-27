import { useCallback, useState } from "react";
import ITodoItemProps from "../../../types/ITodoItemProps";
import Todo from "../../../types/Todo";
import makeKey from "./makeKey";

type TodoItem = Omit<ITodoItemProps, "onToggle">;

const useTodoList = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState<TodoItem[]>(
    initialTodos.map((todo) => ({ key: makeKey(), todo }))
  );
  const addTodo = useCallback(
    (todo: TodoItem) => {
      setTodos([todo, ...todos]);
    },
    [todos, setTodos]
  );
  const removeTodo = useCallback(
    (todo: TodoItem) => {
      setTodos(todos.filter(({ key }) => key !== todo.key));
    },
    [todos, setTodos]
  );
  return { todos, addTodo, removeTodo };
};

export default useTodoList;
