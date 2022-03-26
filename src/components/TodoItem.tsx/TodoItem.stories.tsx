import { ComponentStory, ComponentMeta } from "@storybook/react";
import TodoItem from "./TodoItem";

export default {
  title: "TodoItem",
  component: TodoItem,
  args: {
    key: "TodoItem",
    todo: "My todo item",
  },
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);

export const WhenYetToBeDone = Template.bind({});
WhenYetToBeDone.args = {};

export const WhenDone = Template.bind({});
WhenDone.args = {
  isDone: true,
};
