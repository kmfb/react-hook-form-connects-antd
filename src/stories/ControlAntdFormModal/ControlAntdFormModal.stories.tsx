import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { ControlAntdFormModal } from '../../ControlAntd';
import { IControlAntdFormItems } from '../../types';
import { UD_FORM_LAYOUT_MODAL } from '../constants';

export const Basic = () => {
  // import React from "react";
  // import { IControlAntdFormItems } from "../../types";
  // import { useForm } from "react-hook-form";
  // import { Button } from "antd";
  // import { UD_FORM_LAYOUT_MODAL } from "../constants";
  // import { ControlAntdFormModal } from "../../ControlAntd";

  const methods = useForm();

  const items: IControlAntdFormItems = [
    {
      label: 'Name',
      name: 'name',
      rules: {
        maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
      },
    },
  ];

  return (
    <div>
      <ControlAntdFormModal
        methods={methods}
        items={items}
        isDev
        handleModalOk={({ setConfirmLoading, setVisible }) => {
          setConfirmLoading(true);
          setVisible(false);
          console.log('handleModalOk');
        }}
        modalConfig={{
          title: '模板名称',
          destroyOnClose: true,
        }}
      >
        <Button>点击</Button>
      </ControlAntdFormModal>
      <ControlAntdFormModal
        methods={methods}
        items={items}
        handleModalOk={({ setConfirmLoading, setVisible }) => {
          setConfirmLoading(true);
          setVisible(false);
          console.log('handleModalOk');
        }}
        modalConfig={{
          title: '模板名称',
          destroyOnClose: true,
        }}
        formConfig={{
          layout: UD_FORM_LAYOUT_MODAL,
        }}
        modalChildren={<div>hello</div>}
      >
        <Button>点击</Button>
      </ControlAntdFormModal>
    </div>
  );
};

export default {
  title: 'ControlAntdFormModal/index',
  component: ControlAntdFormModal,
};
