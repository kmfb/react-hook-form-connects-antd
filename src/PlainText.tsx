import React from 'react';
import { isString } from './utils';

export interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: string;
  hidePlaceholder?: boolean;
}

const PlainText = React.forwardRef<any, IProps>((props, ref) => {
  const { value, hidePlaceholder = false, placeholder = '-', ...spanProps } = props;

  const displayValue = isString(value) ? value : value ? JSON.stringify(value) : undefined;

  return (
    <span ref={ref} {...spanProps}>
      {displayValue || (!hidePlaceholder && placeholder)}
    </span>
  );
});

export default PlainText;
