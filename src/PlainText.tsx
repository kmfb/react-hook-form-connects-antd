import React from 'react';
import { isString } from './utils';

export interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: string;
  hidePlaceholder?: boolean;
  getDisplayValue?: (value: string | undefined) => string;
}

const PlainText = React.forwardRef<any, IProps>((props, ref) => {
  const { value, hidePlaceholder = false, placeholder = '-', getDisplayValue = (value) => value || "", ...spanProps } = props;

  const formatValue: string | undefined = isString(value) ? value : value ? JSON.stringify(value) : "";

  return (
    <span ref={ref} {...spanProps}>
      {getDisplayValue(formatValue) || (!hidePlaceholder && placeholder)}
    </span>
  );
});

export default PlainText;
