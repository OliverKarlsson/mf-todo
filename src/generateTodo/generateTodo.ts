/**
 * Generates a string representing the markdown from the given todos.
 * @param yetTodos todos yet to be completed
 * @param doneTodos todos that have been completed
 * @returns
 */
const generateTodo = (yetTodos: any[] = [], doneTodos: any[] = []) => {
  return `
    - [ ] yet todo 1
    - [ ] yet todo 2
    - [x] done todo 1
    - [x] done todo 2
    `;
};

export default generateTodo;
