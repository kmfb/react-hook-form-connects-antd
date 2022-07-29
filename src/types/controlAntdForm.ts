import { HooksFormItemProps } from "../FormItem";

type IOmitHooksFormItemProps = Omit<HooksFormItemProps, "control">;

export interface IControlAntdFormItem extends IOmitHooksFormItemProps {
  children?: React.ReactNode;
}

export type IControlAntdFormItems = Array<IControlAntdFormItem>;
