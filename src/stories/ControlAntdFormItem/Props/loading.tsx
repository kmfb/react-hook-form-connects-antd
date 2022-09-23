import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { FormValueDisplay } from "../../..";
import FormItem, { PureFormItem } from "../../../FormItem";

import CreateWrapper from "../../components/CreateWrapper";
import FormProviderWrapper from "../../components/FormProviderWrapper";
const { Option } = Select;

function HostUIValueState() {
  const { control, handleSubmit } = useFormContext();

  const [formValue, setFormValue] = useState({});

  const hostUIValueState = (v: any) => {

    if (v === null || v === undefined) {
      return undefined;
    }

    return v.slice(1);
  };

  return (
    <div>
      <FormItem
        label={"加载中"}
        name="componentNameLoading"
        control={control}
        required
        loading={true}
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
      <FormItem
        label={"组件名称"}
        name="componentName"
        control={control}
        required
    
      >
        <Input />
      </FormItem>
      <FormValueDisplay />
    </div>
  );
}

export default CreateWrapper(<HostUIValueState />);
