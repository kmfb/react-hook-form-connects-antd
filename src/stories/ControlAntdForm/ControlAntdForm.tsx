import { Input } from "antd";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ControlAntdForm } from "../..";
import { IControlAntdFormItems } from "../../types";

import CreateWrapper from "../components/CreateWrapper";
import FormValueDisplay from "../components/FormValueDisplay";

const UD_FORM_LAYOUT = {
  labelCol: {
    xs: 24,
    sm: 24,
    md: 5,
    lg: 5,
    xl: 3,
    xxl: 3,
  },
  wrapperCol: {
    xs: 24,
    sm: 24,
    md: 19,
    lg: 15,
    xl: 12,
    xxl: 12,
  },
};

const items: IControlAntdFormItems = [
  {
    label: "Name",
    name: "name",
    rules: {
      maxLength: { value: 10, message: "模板名称字符长度不能超过10个" },
    },
  },
];

function ControlAntdFormS() {
  const { control } = useFormContext();

  return (
    <div>
      <ControlAntdForm
        control={control}
        layout={UD_FORM_LAYOUT}
        items={items}
      />
      <FormValueDisplay />
    </div>
  );
}

export default CreateWrapper(<ControlAntdFormS />);
