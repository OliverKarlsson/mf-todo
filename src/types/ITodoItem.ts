import ITodoItemProps from "./ITodoItemProps";

interface ITodoItem extends Omit<ITodoItemProps, "onToggle"> {}

export default ITodoItem;
