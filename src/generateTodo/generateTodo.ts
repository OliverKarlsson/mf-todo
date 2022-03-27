import ITodoContainer from "../types/ITodoContainer";

/**
 * Generates a string representing the markdown from the given todos.
 * @param yetTodos todos yet to be completed
 * @param doneTodos todos that have been completed
 * @returns
 */
const generateTodo = ({ yetTodos = [], doneTodos = [] }: ITodoContainer) => {
  let markdown = "\n";
  yetTodos.forEach((todo) => {
    markdown += `- [ ] ${todo}\n`;
  });
  doneTodos.forEach((todo) => {
    markdown += `- [x] ${todo}\n`;
  });
  markdown += "\n";
  return markdown;
};

export default generateTodo;
