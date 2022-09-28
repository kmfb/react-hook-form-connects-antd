import React from 'react';
import { useForm } from 'react-hook-form';
import { Select } from 'antd';
import { FormItem } from '../../..';

export const Index = () => {
  // import { Select } from "antd";
  // import React from "react";
  // import { useForm } from "react-hook-form";
  // import { FormItem } from "../../..";

  const { control } = useForm();

  const hostUIValueState = (v: any) => {
    if (v === null || v === undefined) {
      return undefined;
    }

    return v.slice(1);
  };

  return (
    <div>
      <FormItem
        label={'组件名称'}
        name="componentName"
        control={control}
        required
        hostUIValueState={hostUIValueState}
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
  title: 'ControlAntdFormItem/Props/hostUIValueState',
  component: FormItem,
};
