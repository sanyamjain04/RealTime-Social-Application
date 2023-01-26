// @ts-nocheck
import FormProvider from '@components/hooks-form/FormProvider';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@components/hooks-form/TextField';
import Button from '@components/ui/Button';
import ErrorMessages from './error-message';

// Todo: change the mui components with own ui components

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // import { Eye, EyeSlash } from "phosphor-react";

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string()
      .required('Email is required')
      .email('Please enter Valid email Address'),
    password: Yup.string().required('Password is required').min(8),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: 'yourEmail@gmail.com',
    password: 'Your Password',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
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
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessages errors={errors} />
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <TextField
            name="firstName"
            id="firstName"
            label="First Name"
            autoFocus
          />
          <TextField name="lastName" id="lastName" label="Last Name" />
        </div>
        <div className="flex flex-col gap-2">
          <TextField name="email" id="email" label="Email Address" />
          <TextField
            id="password"
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment>
            //       <IconButton
            //         onClick={() => setShowPassword((prev) => !prev)}
            //       >
            //         {showPassword ? <Eye /> : <EyeSlash />}
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />
          <Button type="submit" className="text-white">
            Create Account
          </Button>
        </div>
      </FormProvider>
      <p className="mt-2 text-center text-gray-400">
        By signing up, I agree to{' '}
        <span className="text-semibold cursor-pointer underline hover:text-white">
          Terms of Service
        </span>{' '}
        and{' '}
        <span className="text-semibold cursor-pointer underline hover:text-white">
          Privacy Policy
        </span>
        .
      </p>
    </>
  );
};

export default RegisterForm;
