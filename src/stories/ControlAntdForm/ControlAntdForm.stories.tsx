import React, { useRef } from 'react';
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

  const inputRef = useRef<any>();

  const items: IControlAntdFormItems = [
    {
      label: 'Name',
      name: 'name',
      display: 'none',
      // required: true,
      // rules: {
      //   maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
      //   required: { value: true, message: '请输入模板名称' },
      // },
      children: (
        <Input
          ref={inputRef}
          placeholder="请输入模板名称"
          onBlur={(e) => {
            console.log('onBlur', inputRef.current);
          }}
        />
      ),
    },
    {
      label: 'age',
      name: 'age',
      rules: {
        maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
        required: { value: true, message: '请输入模板名称' },
      },
      children: (item) => {
        console.log(item, 'im item');
        return <Input />;
      },
    },
    {
      label: 'address',
      name: 'address1',
      // rules: {
      //   maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
      //   required: { value: true, message: '请输入模板名称' },
      // },
    },
    {
      label: 'address',
      name: 'address2',
    },
    {
      label: 'address',
      name: 'address3',
    },
    {
      label: 'address',
      name: 'address4',
    },
    {
      label: 'address',
      name: 'address5',
    },
    {
      label: 'address',
      name: 'address6',
    },
    {
      label: 'address',
      name: 'address7',
    },
    {
      label: 'address',
      name: 'address8',
    },
    {
      label: 'address',
      name: 'address9',
    },
    {
      label: 'address',
      name: 'address10',
    },
    {
      label: 'address',
      name: 'addres1',
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
