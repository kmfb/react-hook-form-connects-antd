import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";
import React, { useState } from "react";
import { ControllerProps } from "react-hook-form";
import { IControlAntdFormItems } from "../../types";
import ControlAntdForm from "../ControlAntdForm";

interface IProps {
  children: React.ReactElement;
  items: IControlAntdFormItems;
  control: ControllerProps<any>["control"];
  handleModalOk: (handler: { setConfirmLoading: any; setVisible: any }) => void;
  modalConfig?: ModalProps;
}

function index(props: IProps) {
  const { children, control, items, handleModalOk, modalConfig } = props;

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const clonedChildren = React.cloneElement(children, {
    onClick: () => setVisible(true),
  });

  const handleOk = () => {
    handleModalOk({
      setConfirmLoading,
      setVisible,
    });
  };

  return (
    <div>
      <div>{clonedChildren}</div>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        okText={"确定"}
        cancelText={"取消"}
        {...modalConfig}
      >
        <ControlAntdForm control={control} items={items} />
      </Modal>
    </div>
  );
}

export default index;
