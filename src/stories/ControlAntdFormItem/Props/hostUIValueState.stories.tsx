import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HostUIValueState from "./hostUIValueState";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ControlAntdFormItem/Props/hostUIValueState",
  component: HostUIValueState,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<any> = (args) => <HostUIValueState {...args} />;

export const Index = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Index.args = {
  primary: true,
  label: "Demo",
};
