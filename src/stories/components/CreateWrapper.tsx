import React from 'react';
import FormProviderWrapper from './FormProviderWrapper';

function CreateWrapper(childrenFuncComponent: any) {
  return (_props: any) => {
    return <FormProviderWrapper>{childrenFuncComponent}</FormProviderWrapper>;
  };
}

export default CreateWrapper;
