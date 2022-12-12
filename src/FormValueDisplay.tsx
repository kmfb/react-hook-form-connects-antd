import React from 'react';
import { ControllerProps, useFormContext, useWatch } from 'react-hook-form';

const getControl = (ctx: any, controlP: any) => {
  if (ctx) {
    return ctx.control;
  }

  return controlP;
};

function FormValueDisplay(props: {
  control?: ControllerProps<any>['control'];
}) {
  const { control: controlP } = props;
  const ctx = useFormContext();

  const watchValues = useWatch({
    control: getControl(ctx, controlP),
  });

  return <div>表单值：{JSON.stringify(watchValues)}</div>;
}

export default FormValueDisplay;
