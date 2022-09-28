import React from 'react';
import { isString } from './utils';

export interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: string | undefined;
  hidePlaceholder?: boolean;
  getDisplayValue?: (_value: string | undefined) => string;
}

const defaultGetDisplayValue = (value: string | undefined) =>
  isString(value) ? value : value ? JSON.stringify(value) : '';

const PlainText = React.forwardRef<any, IProps>((props, ref) => {
  const {
    value,
    hidePlaceholder = false,
    placeholder = '-',
    getDisplayValue = defaultGetDisplayValue,
    ...spanProps
  } = props;

  return (
    <span ref={ref} {...spanProps}>
      {getDisplayValue(value) || (!hidePlaceholder && placeholder)}
    </span>
  );
});

export default PlainText;
