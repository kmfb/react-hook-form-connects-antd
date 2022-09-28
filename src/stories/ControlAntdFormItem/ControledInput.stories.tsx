import React from 'react';
import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ControledInput } from '../../ControlAntd';

export const Basic: ComponentStory<any> = () => {
  // import React from "react";
  // import { useForm } from "react-hook-form";
  // import { ControledInput } from "../../ControlAntd";

  const { control } = useForm();

  return (
    <div>
      <div>
        <ControledInput label="测试" name="initial" control={control} />
      </div>
      <hr />
      <div>
        <ControledInput
          label="测试textPost"
          name="hasTextPost"
          control={control}
          textPost={'元'}
        />
      </div>
    </div>
  );
};

export default {
  title: 'ControlAntdFormItem/ControledInput',
  component: ControledInput,
} as ComponentMeta<any>;
