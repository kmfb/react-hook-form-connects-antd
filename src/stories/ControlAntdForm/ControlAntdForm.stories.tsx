import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'antd';
import { ControlAntdForm } from '../..';
import { IControlAntdFormItems } from '../../types';
import { UD_FORM_LAYOUT } from '../constants';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ControlAntdForm/index',
  component: ControlAntdForm,
  // decorators: [... ],
  // parameters: { ... }
};

export const Basic = () => {
  // import React from "react";
  // import { useForm } from "react-hook-form";
  // import { Input } from "antd";
  // import { UD_FORM_LAYOUT } from "../constants";
  // import { IControlAntdFormItems } from "../../types";
  // import { ControlAntdForm } from "../..";

  const items: IControlAntdFormItems = [
    {
      label: 'Name',
      name: 'name',
      isPure: true,
      required: true,
      rules: {
        maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
        required: { value: true, message: '请输入模板名称' },
      },
      children: (
        <Input
          placeholder="请输入模板名称"
          onBlur={(e) => {
            console.log('onBlur', e.target.value);
          }}
        />
      ),
    },
    {
      label: 'age',
      name: 'age',
      children: (item) => {
        console.log(item, 'im item');
        return <Input />;
      },
    },
    {
      label: 'address',
      name: 'address',
    },
  ];

  const { control, handleSubmit } = useForm();

  const handleOnClick = () => {
    handleSubmit((values: any) => {
      alert(JSON.stringify(values));
    })();
  };

  const CENTER_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <ControlAntdForm
        control={control}
        layout={UD_FORM_LAYOUT}
        items={items}
        isDev
      />
      <div style={CENTER_STYLE}>
        <Button onClick={handleOnClick} type="primary">
          提交
        </Button>
      </div>
    </div>
  );
};
