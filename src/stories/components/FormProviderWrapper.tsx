import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function FormProviderWrapper(props: { children: any }) {
  const methods = useForm({
    mode: 'onChange',
  });

  return <FormProvider {...methods}>{props.children}</FormProvider>;
}

export default FormProviderWrapper;
