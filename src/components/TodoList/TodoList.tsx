import ITodoListProps from "../../types/ITodoListProps";
import useTodoList from "./useTodoList/useTodoList";
import TodosRegion from "./TodosRegion/TodosRegion";

/**
 * The main todo component.
 * @param props
 * @returns
 */
const TodoList = ({ yetTodos = [], doneTodos = [] }: ITodoListProps) => {
  const yetTodo = useTodoList(yetTodos);
  const doneTodo = useTodoList(doneTodos);
  return (
    <div>
      <TodosRegion
        todos={yetTodo.todos}
        onItemToggle={(itemTodo) => {
          yetTodo.removeTodo(itemTodo);
          doneTodo.addTodo(itemTodo);
        }}
      />
      <TodosRegion
        isDoneTodos
        todos={doneTodo.todos}
        onItemToggle={(itemTodo) => {
          doneTodo.removeTodo(itemTodo);
          yetTodo.addTodo(itemTodo);
        }}
      />
    </div>
  );
};

export default TodoList;
