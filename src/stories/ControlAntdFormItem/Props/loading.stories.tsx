import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select } from 'antd';
import { FormItem } from '../../..';

export const Index = () => {
  // import { Select } from "antd";
  // import React, { useState } from "react";
  // import { useForm } from "react-hook-form";
  // import { FormItem } from "../../..";

  const { control } = useForm();
  return (
    <div>
      <FormItem
        label={'组件名称'}
        name="componentName"
        control={control}
        required
        loading={true}
      >
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
      </FormItem>
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ControlAntdFormItem/Props/loading',
  component: FormItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
