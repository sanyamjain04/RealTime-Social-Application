import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import Input from '@components/ui/Input';

const RfhTextField = ({ name, helperText, ...other }: any) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          error={error ? error : 'error'}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
};

RfhTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default RfhTextField;
