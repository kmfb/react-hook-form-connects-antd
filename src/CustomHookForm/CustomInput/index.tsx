import { Input } from "antd";
import React from "react";
import FormItem from "../../FormItem";
import "./index.less";

interface Props {
  name: string;
  control: any;
  children?: any;
  required?: boolean;
  label?: string;
  textPrefix?: any;
  textCenter?: string;
  textPost?: string;
  decorator?: string;
  className?: string;
  rules?: any;
  trigger?: any;
  secondTrigger?: string;
  customOnChange?: any;
}

function CustomInput(props: Props) {
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

  return (
    <div className={`CustomInput hookForm ${className ? className : ""}`}>
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
        <div className={textCenter ? "text-center" : "text-post"}>
          {textCenter ? textCenter : textPost}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
