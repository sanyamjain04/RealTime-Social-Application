// @ts-nocheck
import FormProvider from "@components/hooks-form/FormProvider";
import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import TextField from "@components/hooks-form/TextField";
import Button from "@ui/Button";
import Link from "next/link";

// Todo: change the mui components with own ui components

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // import { Eye, EyeSlash } from "phosphor-react";

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter Valid email Address"),
    password: Yup.string().required("Password is required").min(8),
  });

  const defaultValues = {
    email: "yourEmail@gmail.com",
    password: "Your Password",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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
      setError("email", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3">
        {!!errors.email && (
          <Alert severity="error">{errors.email.message}</Alert>
        )}
        {!!errors.password && (
          <Alert severity="error">{errors.password.message}</Alert>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <TextField name="email" id="email" label="Email Address" autoFocus />
        <TextField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
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
        <Link
          className="text-white hover:underline w-max ml-auto"
          href="/auth/reset-password"
        >
          Forget Password?
        </Link>
        <Button type="submit" className="text-white">
          Login
        </Button>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
