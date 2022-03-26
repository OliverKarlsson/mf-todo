interface ITodoItem {
  todo: any;
  isDone?: boolean;
}

/**
 * The todo item component.
 * May be done or yet to be done.
 * Default behavior is to be yet to be done.
 * @param props
 * @returns
 */
const TodoItem = ({ todo, isDone = false }: ITodoItem) => {
  return null;
};

export default TodoItem;
