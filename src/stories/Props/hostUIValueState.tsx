import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormItem, { PureFormItem } from "../../FormItem";
const { Option } = Select;

function HostUIValueState() {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [formValue, setFormValue] = useState({});

  const hostUIValueState = (v: any) => {
    return v.slice(1);
  };

  return (
    <div>
      <FormItem
        label={"组件名称"}
        name="componentName"
        control={control}
        required
        hostUIValueState={hostUIValueState}
      >
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </FormItem>
      <PureFormItem wrapperCol={{ span: 21, offset: 3 }}>
        <p>表单值: {JSON.stringify(formValue)}</p>
        <Button onClick={handleSubmit((data) => setFormValue(data))}>
          获取表单值
        </Button>
      </PureFormItem>
    </div>
  );
}

export default HostUIValueState;
