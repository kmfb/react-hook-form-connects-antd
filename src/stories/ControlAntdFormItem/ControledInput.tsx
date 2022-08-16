import React from "react";
import { useFormContext } from "react-hook-form";
import { ControledInput, FormValueDisplay } from "../..";

import CreateWrapper from "../components/CreateWrapper";

function ControledInputS() {
  const { control } = useFormContext();

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
          textPost={"元"}
        />
        <FormValueDisplay />
      </div>
    </div>
  );
}

export default CreateWrapper(<ControledInputS />);
