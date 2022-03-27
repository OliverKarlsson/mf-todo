import { useState } from "react";
import generateTodo from "../../../generateTodo/generateTodo";
import ITodoList from "../../../types/ITodoList";
import style from "./ListMenu.module.scss";

interface IListMenuProps {
  yetTodo: ITodoList;
  doneTodo: ITodoList;
}

const ListMenu = ({ yetTodo, doneTodo }: IListMenuProps) => {
  const [didCopy, setDidCopy] = useState(false);
  return (
    <div className={style.listMenu}>
      <p className={style["listMenu__title"]}>MF-TODO</p>
      <button
        className={`${style["listMenu__copyBtn"]} ${
          didCopy ? style["listMenu__copyBtn--clicked"] : ""
        }`}
        title="Copy todos to clipboard"
        onClick={() => {
          setDidCopy(true);
          const yetTodos = yetTodo.todos.map(({ todo }) => todo);
          const doneTodos = doneTodo.todos.map(({ todo }) => todo);
          const todosMarkdown = generateTodo({ yetTodos, doneTodos });

          navigator.clipboard.writeText(todosMarkdown);
          setTimeout(() => {
            setDidCopy(false);
          }, 2000);
        }}
      >
        📋
      </button>
    </div>
  );
};

export default ListMenu;
