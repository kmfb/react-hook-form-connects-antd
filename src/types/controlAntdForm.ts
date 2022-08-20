import { HooksFormItemProps } from "../FormItem";

type IOmitHooksFormItemProps = Omit<HooksFormItemProps, "control">;

export interface IControlAntdFormItem extends IOmitHooksFormItemProps {
  children?: React.ReactElement;
  childrenProps?: {
    disabled?: boolean;
  };
}

export type IControlAntdFormItems = Array<IControlAntdFormItem>;
