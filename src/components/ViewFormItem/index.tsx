import React, { forwardRef } from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';
import _ from 'lodash';
import isString from 'lodash/isString';

export type transformValueToViewT = (
  value: any,
  currData: any,
  dataFromServer: any
) => any;

interface IViewFormItemProps {
  transformValueToView?: transformValueToViewT;
  name: string;
  methods: UseFormReturn<any>;
  value?: any;
}
const ViewFormItem = forwardRef<HTMLDivElement, IViewFormItemProps>(
  (props, ref) => {
    if (_.isNil(props.value) && !props.transformValueToView) {
      return <></>;
    }
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
