import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

function FormValueDisplay() {
    const { control } = useFormContext();

    const watchValues = useWatch({
        control,
    });

    return <div>{JSON.stringify(watchValues)}</div>;
}

export default FormValueDisplay;
