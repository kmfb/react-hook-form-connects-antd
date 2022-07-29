import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ControlAntdForm from "./ControlAntdForm";

export default {
  title: "ControlAntdForm/index",
  component: ControlAntdForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <ControlAntdForm {...args} />;
export const Index = Template.bind({});
Index.args = {
  primary: true,
  label: "Demo",
};
