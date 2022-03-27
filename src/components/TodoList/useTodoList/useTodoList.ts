import { useCallback, useState } from "react";
import ITodoItem from "../../../types/ITodoItem";
import ITodoList from "../../../types/ITodoList";
import Todo from "../../../types/Todo";
import makeKey from "./makeKey";

const useTodoList = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState<ITodoItem[]>(
    initialTodos.map((todo) => ({ key: makeKey(), todo }))
  );
  const addTodo = useCallback(
    (todo: ITodoItem) => {
      setTodos([todo, ...todos]);
    },
    [todos, setTodos]
  );
  const removeTodo = useCallback(
    (todo: ITodoItem) => {
      setTodos(todos.filter(({ key }) => key !== todo.key));
    },
    [todos, setTodos]
  );
  const response: ITodoList = { todos, addTodo, removeTodo };
  return response;
};

export default useTodoList;
