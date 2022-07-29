import { Form, Input } from "antd";
import { ColProps } from "antd/lib/grid";
import React from "react";
import { ControllerProps } from "react-hook-form";
import FormItem from "../../FormItem";
import { IControlAntdFormItem, IControlAntdFormItems } from "../../types";

interface IProps {
  layout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
  control: ControllerProps<any>["control"];
  items: IControlAntdFormItems;
}

function index(props: IProps) {
  const { items, layout, control } = props;

  const renderItem = (item: IControlAntdFormItem) => {
    const { children, ...rest } = item;
    return (
      <FormItem {...layout} {...rest} control={control}>
        {item.children || <Input />}
      </FormItem>
    );
  };

  return (
    <Form>{items.map((item: IControlAntdFormItem) => renderItem(item))}</Form>
  );
}

export default index;
