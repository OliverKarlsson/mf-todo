interface ITodoListProps {
  yetTodos?: any[];
  doneTodos?: any[];
}
/**
 * The main todo component.
 * @param props
 * @returns
 */
const TodoList = ({ yetTodos = [], doneTodos = [] }: ITodoListProps) => {
  return (
    <>
      {/* yetTodos.map() */}
      {/* doneTodos.map() */}
    </>
  );
};

export default TodoList;
