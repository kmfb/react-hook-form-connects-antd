import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ControlAntdFormModal from "./ControlAntdFormModal";

export default {
  title: "ControlAntdFormModal/index",
  component: ControlAntdFormModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => (
  <ControlAntdFormModal {...args} />
);
export const Index = Template.bind({});
Index.args = {
  primary: true,
  label: "Demo",
};
