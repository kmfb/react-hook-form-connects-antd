import React from "react";
import { useFormContext } from "react-hook-form";
import { CustomInput } from "../..";

import CreateWrapper from "../components/CreateWrapper";
import FormValueDisplay from "../components/FormValueDisplay";

function CustomInputS() {
  const { control } = useFormContext();

  return (
    <div>
      <CustomInput label="测试" name="CustomInput-test" control={control} />
      <FormValueDisplay />
    </div>
  );
}

export default CreateWrapper(<CustomInputS />);
