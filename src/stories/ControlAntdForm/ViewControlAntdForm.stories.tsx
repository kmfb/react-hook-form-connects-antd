import React, { useEffect, useRef } from 'react';
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
  title: 'ControlAntdForm/view',
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
      label: 'name',
      name: 'name',
      // required: true,
      // rules: {
      //   maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
      //   required: { value: true, message: '请输入模板名称' },
      // },
      isView: true,
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
  ];

  const methods = useForm();
  const { control, handleSubmit } = methods;

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
        methods={methods}
        layout={UD_FORM_LAYOUT}
        items={items}
        isDev
      />
      <div style={CENTER_STYLE}>
        <Button onClick={handleOnClick} type="primary">
          提交
        </Button>
        <Button
          onClick={() => {
            methods.reset({
              name: 'test',
              $dataFromServer: {
                name: 'test',
              },
            });
          }}
        >
          测试
        </Button>
      </div>
    </div>
  );
};
