// @ts-nocheck
import FormProvider from '@components/hooks-form/FormProvider';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@components/hooks-form/TextField';
import Button from '@ui/Button';
import ErrorMessages from '@components/auth/error-message';

// Todo: change the mui components with own ui components

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // import { Eye, EyeSlash } from "phosphor-react";

  const VerifyCodeSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      // submit data to backend
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
      reset();
      setError('email', {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessages errors={errors} />
      <div className="flex flex-col gap-2">
        <TextField label="Password" name="password" type="password" autoFocus />
        <TextField
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
        />
        <Button type="submit">Update Password</Button>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
