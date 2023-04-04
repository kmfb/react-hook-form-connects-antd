import React from 'react';
import { ControllerProps, UseFormReturn } from 'react-hook-form';
import { Form, Input } from 'antd';
import { ColProps } from 'antd/lib/grid';
import _ from 'lodash';
import ViewFormItem from '../../components/ViewFormItem';
import { FormValueDisplay } from '../..';
import FormItem, { PureFormItem } from '../../FormItem';
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
  methods?: UseFormReturn<any>;
  isDev?: boolean;
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
  const { items, layout = UD_FORM_LAYOUT, control, methods, isDev } = props;

  const renderItem = (item: IControlAntdFormItem) => {
    const { children, childrenProps, isPure, isView, ...rest } = item;

    const childrenWithProps = getChildrenByType({
      children,
      childrenProps,
      item: rest,
    });

    const FormItemComp = isPure ? PureFormItem : FormItem;

    const formChildren = childrenWithProps || <Input {...childrenProps} />;

    const ChildrenComp = isView ? (
      <ViewFormItem methods={methods as any} {...item} />
    ) : (
      formChildren
    );

    return (
      <FormItemComp {...layout} {...rest} control={control} key={rest.name}>
        {ChildrenComp}
      </FormItemComp>
    );
  };

  return (
    <div>
      <Form>
        {items
          .filter((item) => item.display !== 'none')
          .map((item: IControlAntdFormItem) => renderItem(item))}
      </Form>
      {isDev && <FormValueDisplay control={control} />}
    </div>
  );
}

export default index;
