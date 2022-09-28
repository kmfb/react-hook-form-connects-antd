import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { ControlAntdForm, controlAntdUtils } from '../../ControlAntd';
import { IControlAntdFormItems } from '../../types';
import { UD_FORM_LAYOUT } from '../constants';

export const Index = () => {
  const items: IControlAntdFormItems = [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'age',
      name: 'age',
    },
    {
      label: 'address',
      name: 'address',
    },
  ];

  const { control, handleSubmit } = useForm();
  const finalItems = controlAntdUtils.getFormItemsWithRequired(items, [
    'age',
    'address',
  ]);

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
        items={finalItems}
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
export default {
  title: 'Utils/getFormItemsWithRequired',
  component: ControlAntdForm,
};
