import React, { forwardRef } from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';
import isString from 'lodash/isString';

interface IViewFormItemProps {
  transformValueToView?: (
    value: any,
    currData: any,
    dataFromServer: any
  ) => any;
  name: string;
  methods: UseFormReturn<any>;
  value?: any;
}
const ViewFormItem = forwardRef<HTMLDivElement, IViewFormItemProps>(
  (props, ref) => {
    const { getValues } = props.methods;

    const dataFromServer = getValues('$dataFromServer');

    const currentData = dataFromServer ? dataFromServer[props.name] : null;

    const value = props.transformValueToView
      ? props.transformValueToView(props.value, currentData, dataFromServer)
      : isString(props.value)
      ? props.value
      : JSON.stringify(props.value);
    return <div>{value}</div>;
  }
);

export default ViewFormItem;
