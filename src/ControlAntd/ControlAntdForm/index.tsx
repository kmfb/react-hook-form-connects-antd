import { Form, Input } from "antd";
import { ColProps } from "antd/lib/grid";
import React from "react";
import { ControllerProps } from "react-hook-form";
import FormItem from "../../FormItem";
import { IItemProps, IItemsProps } from "../../types";

interface IProps {
  layout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
  control: ControllerProps<any>["control"];
  items: IItemsProps;
}

function index(props: IProps) {
  const { items, layout, control } = props;

  const renderItem = (item: IItemProps) => {
    const { children, ...rest } = item;
    return (
      <FormItem {...layout} {...rest} control={control}>
        {item.children || <Input />}
      </FormItem>
    );
  };

  return <Form>{items.map((item: IItemProps) => renderItem(item))}</Form>;
}

export default index;
