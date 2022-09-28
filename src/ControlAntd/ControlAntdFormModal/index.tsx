import React, { useState } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import FormValueDisplay from '../../FormValueDisplay';
import { IControlAntdFormItems } from '../../types';
import ControlAntdForm, { ControlAntdFormProps } from '../ControlAntdForm';
import { UD_FORM_LAYOUT_MODAL } from '../ControlAntdForm/constants';

type PickedControlAntdFormProps = Pick<ControlAntdFormProps, 'layout'>;

interface IProps {
  children: React.ReactElement;
  modalChildren?: React.ReactElement;
  items?: IControlAntdFormItems;
  methods: UseFormReturn;
  handleModalOk: (_handler: {
    setConfirmLoading: any;
    setVisible: any;
    clearStatus: any;
  }) => void;
  preserve?: boolean;
  modalConfig?: ModalProps;
  formConfig?: PickedControlAntdFormProps;
  isDev?: boolean;
}

function Index(props: IProps) {
  const {
    children,
    methods,
    items,
    handleModalOk,
    modalConfig,
    formConfig,
    preserve = false,
    modalChildren,
    isDev = false,
  } = props;

  const finalFormConfig: PickedControlAntdFormProps = {
    layout: UD_FORM_LAYOUT_MODAL,
    ...formConfig,
  };

  const { control, reset } = methods;

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const clonedChildren = React.cloneElement(children, {
    onClick: () => setVisible(true),
  });

  const resetFormValues = () => {
    reset();
  };

  const clearStatus = () => {
    if (!preserve) {
      resetFormValues();
    }

    setConfirmLoading(false);

    setVisible(false);
  };

  const handleOk = () => {
    handleModalOk({
      setConfirmLoading,
      setVisible,
      clearStatus,
    });
  };

  const handleCancel = () => {
    clearStatus();
  };

  return (
    <div>
      <div>{clonedChildren}</div>
      <FormProvider {...methods}>
        <Modal
          visible={visible}
          onCancel={handleCancel}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          okText={'确定'}
          cancelText={'取消'}
          {...modalConfig}
        >
          {modalChildren || (
            <ControlAntdForm
              control={control}
              items={items as any}
              {...finalFormConfig}
            />
          )}
          {isDev && <FormValueDisplay />}
        </Modal>
      </FormProvider>
    </div>
  );
}

export default Index;
