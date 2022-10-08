import React from 'react';
import { useForm } from 'react-hook-form';
import { Cascader } from 'antd';
import { FormItem } from '../../..';

export const Index = () => {
  // import { Cascader  } from "antd";
  // import React from "react";
  // import { useForm } from "react-hook-form";
  // import { FormItem } from "../../..";

  const { control } = useForm();

  const options: any = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <FormItem
        label={'组件名称'}
        name="componentName"
        control={control}
        required
        getValueFromEvent={(value, option) => {
          console.log(value, option, 'getValueFromEvent');
          return value;
        }}
      >
        <Cascader options={options} placeholder="Please select" />
      </FormItem>
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ControlAntdFormItem/Props/getValueFromEvent',
  component: FormItem,
};
