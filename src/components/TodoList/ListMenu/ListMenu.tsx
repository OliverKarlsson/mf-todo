import { useState } from "react";
import generateTodo from "../../../generateTodo/generateTodo";
import ITodoContainer from "../../../types/ITodoContainer";
import style from "./ListMenu.module.scss";

interface IListMenuProps extends ITodoContainer {}

const ListMenu = (props: IListMenuProps) => {
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
          const todosMarkdown = generateTodo(props);
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
