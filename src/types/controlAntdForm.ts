import { JSXElementConstructor, ReactElement } from 'react';
import { HooksFormItemProps } from '../FormItem';

export type IOmitHooksFormItemProps = Omit<HooksFormItemProps, 'control'>;
export type IControlAntdFormItemChildren =
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ((
      _item: IControlAntdFormItem
    ) => ReactElement<any, string | JSXElementConstructor<any>>);

export type IChildrenProps = {
  disabled?: boolean;
};

export interface IControlAntdFormItem extends IOmitHooksFormItemProps {
  children?: IControlAntdFormItemChildren;
  childrenProps?: IChildrenProps;
}

export type IControlAntdFormItems = Array<IControlAntdFormItem>;
