import React from 'react';
import { Input } from 'antd';
import FormItem from '../../../FormItem';
import './index.less';

interface Props {
  name: string;
  control: any;
  children?: any;
  required?: boolean;
  label?: string;
  textPrefix?: string | React.ReactElement;
  textCenter?: string | React.ReactElement;
  textPost?: string | React.ReactElement;
  decorator?: string;
  className?: string;
  rules?: any;
  trigger?: any;
  secondTrigger?: string;
  customOnChange?: any;
}

function ControledInput(props: Props) {
  const {
    control,
    name,
    label,
    textPrefix,
    textCenter,
    textPost,
    required,
    decorator,
    children,
    className,
    rules,
    trigger,
  } = props;

  const n = decorator ? `${decorator}#${name}` : name;
  const hasTextDecorator = textPrefix || textCenter || textPost;

  return (
    <div
      className={`ControledInput hookForm ${className ? className : ''} ${
        hasTextDecorator ? 'textDecorator' : ''
      }`}
    >
      {textPrefix && <div className="text-prefix">{textPrefix}</div>}

      <FormItem
        label={label}
        required={required}
        name={n}
        control={control}
        rules={rules}
        trigger={trigger}
      >
        {children ? children : <Input />}
      </FormItem>
      {(textCenter || textPost) && (
        <div className={textCenter ? 'text-center' : 'text-post'}>
          {textCenter ? textCenter : textPost}
        </div>
      )}
    </div>
  );
}

export default ControledInput;
