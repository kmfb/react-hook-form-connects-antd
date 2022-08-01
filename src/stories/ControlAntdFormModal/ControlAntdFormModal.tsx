import { Button, Input } from "antd";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ControlAntdForm, ControlAntdFormModal } from "../..";
import { IControlAntdFormItems } from "../../types";

import CreateWrapper from "../components/CreateWrapper";
import FormValueDisplay from "../components/FormValueDisplay";

const items: IControlAntdFormItems = [
  {
    label: "Name",
    name: "name",
    rules: {
      maxLength: { value: 10, message: "模板名称字符长度不能超过10个" },
    },
  },
];

function ControlAntdFormModalS() {
  const { control } = useFormContext();

  return (
    <div>
      <ControlAntdFormModal
        control={control}
        items={items}
        handleModalOk={({ setConfirmLoading }) => {
          setConfirmLoading(true);
          console.log("handleModalOk");
        }}
        modalConfig={{
          title: "模板名称",
        }}
      >
        <Button>点击</Button>
      </ControlAntdFormModal>
      <FormValueDisplay />
    </div>
  );
}

export default CreateWrapper(<ControlAntdFormModalS />);
