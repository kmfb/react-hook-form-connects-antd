import { HooksFormItemProps } from "../FormItem";

type IOmitHooksFormItemProps = Omit<HooksFormItemProps, "control">;

export interface IItemProps extends IOmitHooksFormItemProps {
  children?: React.ReactNode;
}

export type IItemsProps = Array<IItemProps>;
