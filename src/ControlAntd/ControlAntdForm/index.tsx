import React from 'react';
import { ControllerProps } from 'react-hook-form';
import { Form, Input } from 'antd';
import { ColProps } from 'antd/lib/grid';
import _ from 'lodash';
import FormItem from '../../FormItem';
import {
  IChildrenProps,
  IControlAntdFormItem,
  IControlAntdFormItemChildren,
  IControlAntdFormItems,
  IOmitHooksFormItemProps,
} from '../../types';
import { UD_FORM_LAYOUT } from './constants';

export interface ControlAntdFormProps {
  layout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
  control: ControllerProps<any>['control'];
  items: IControlAntdFormItems;
}

const getChildrenByType = ({
  children,
  childrenProps,
  item,
}: {
  children: IControlAntdFormItemChildren | undefined;
  childrenProps: IChildrenProps | undefined;
  item: IOmitHooksFormItemProps;
}) => {
  const isFunctionChildren = _.isFunction(children);

  const Component = isFunctionChildren ? children(item) : children;

  if (Component) {
    return React.cloneElement(Component, {
      ...childrenProps,
    });
  }

  return null;
};

function index(props: ControlAntdFormProps) {
  const { items, layout = UD_FORM_LAYOUT, control } = props;

  const renderItem = (item: IControlAntdFormItem) => {
    const { children, childrenProps, ...rest } = item;

    const childrenWithProps = getChildrenByType({
      children,
      childrenProps,
      item: rest,
    });

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
