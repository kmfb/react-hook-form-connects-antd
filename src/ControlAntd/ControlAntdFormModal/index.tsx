import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";
import React, { useState } from "react";
import {
  ControllerProps,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import { IControlAntdFormItems } from "../../types";
import ControlAntdForm, { ControlAntdFormProps } from "../ControlAntdForm";

type PickedControlAntdFormProps = Pick<ControlAntdFormProps, "layout">;

interface IProps {
  children: React.ReactElement;
  items: IControlAntdFormItems;
  methods: UseFormReturn;
  handleModalOk: (handler: { setConfirmLoading: any; setVisible: any, clearStatus: any }) => void;
  preserve?: boolean;
  modalConfig?: ModalProps;
  formConfig?: PickedControlAntdFormProps;
}

function index(props: IProps) {
  const {
    children,
    methods,
    items,
    handleModalOk,
    modalConfig,
    formConfig,
    preserve = false,
  } = props;

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
      <Modal
        visible={visible}
        onCancel={handleCancel}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        okText={"确定"}
        cancelText={"取消"}
        {...modalConfig}
      >
        <ControlAntdForm control={control} items={items} {...formConfig} />
      </Modal>
    </div>
  );
}

export default index;
