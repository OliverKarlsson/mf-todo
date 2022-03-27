import { ComponentStory, ComponentMeta } from "@storybook/react";
import TodoList from "./TodoList";

export default {
  title: "TodoList",
  component: TodoList,
  args: {
    yetTodos: ["todo 3", "todo 4"],
    doneTodos: ["todo 2", "todo 1"],
  },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
