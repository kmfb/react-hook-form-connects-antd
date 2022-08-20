import { Form, Input } from "antd";
import { ColProps } from "antd/lib/grid";
import React from "react";
import { ControllerProps } from "react-hook-form";
import FormItem from "../../FormItem";
import { IControlAntdFormItem, IControlAntdFormItems } from "../../types";
import { UD_FORM_LAYOUT } from "./constants";

export interface ControlAntdFormProps {
  layout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
  control: ControllerProps<any>["control"];
  items: IControlAntdFormItems;
}

function index(props: ControlAntdFormProps) {
  const { items, layout = UD_FORM_LAYOUT, control } = props;

  const renderItem = (item: IControlAntdFormItem) => {
    const { children, childrenProps, ...rest } = item;

    const childrenWithProps = children ? React.cloneElement(children, {
      ...childrenProps,
    }) : null;


    return (
      <FormItem {...layout} {...rest} control={control} key={rest.name}>
        {childrenWithProps || <Input {...childrenProps} />}
      </FormItem>
    );
  };

  return (
    <Form>{items.map((item: IControlAntdFormItem) => renderItem(item))}</Form>
  );
}

export default index;
