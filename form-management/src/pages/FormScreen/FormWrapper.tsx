import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Form from "../../Components/Form";
import Options from "../../Components/menu";
import { optionColors, optionsDefaultValues } from "../../utils/Variables";

type Props = {
  id?: number;
};

type OptionWrapper = {
  control: any;
};

const OptionWrapper: FC<OptionWrapper> = ({ control }) => {
  return (
    <div className="Options">
      <Controller
        control={control}
        name="Options"
        defaultValue={optionsDefaultValues}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <Options
            label="Selector-1"
            options={value}
            optionColors={optionColors}
          />
        )}
      />
    </div>
  );
};

const FormWrapper: FC<Props> = ({ id }) => {
  const { handleSubmit, control } = useForm<any>();

  const onSubmit = (values: any) => {
    console.log("values: ", values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <OptionWrapper control={control} />
    </Form>
  );
};

export default FormWrapper;

