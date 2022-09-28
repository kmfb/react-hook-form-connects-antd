import React from 'react';
import { useForm } from 'react-hook-form';
import { ControlAntdForm, controlAntdUtils } from '../../ControlAntd';
import { IControlAntdFormItems } from '../../types';
import { UD_FORM_LAYOUT } from '../constants';

export default {
  title: 'Utils/getFormItemsWithRequired',
  component: ControlAntdForm,
};

export const index = () => {
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

  const { control } = useForm();
  const finalItems = controlAntdUtils.getFormItemsWithRequired(items, ['name']);

  return (
    <div>
      <ControlAntdForm
        control={control}
        layout={UD_FORM_LAYOUT}
        items={finalItems}
      />
    </div>
  );
};
