import { JSXElementConstructor, ReactElement } from 'react';
import { transformValueToViewT } from '../components/ViewFormItem';
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
  isPure?: boolean;
  isView?: boolean;
  transformValueToView?: transformValueToViewT;
  children?: IControlAntdFormItemChildren;
  childrenProps?: IChildrenProps;
  display?: 'none' | undefined;
}

export type IControlAntdFormItems = Array<IControlAntdFormItem>;
