import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";



const RfhTextField = ({ name, helperText, ...other }: any) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
};

RfhTextField.propType = {
    name: PropTypes.string,
    helperText: PropTypes.node
}

export default RfhTextField;
