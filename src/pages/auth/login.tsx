import Head from "next/head";
import FormProvider from "@components/hooks-form/FormProvider";
import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, IconButton, InputAdornment } from "@mui/material";
import TextField from "@components/hooks-form/TextField";
import Button from "@ui/Button";
import AuthSocial from "@components/auth/Auth-social";
import Link from "next/link";
import Logo from "../../assets/Images/logo.ico";
import Image from "next/image";

// Todo: change the mui components with own ui components

const Login = () => {
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
    <>
      <Head>
        <title>Login - ChatsApp</title>
      </Head>
      <main className="w-full min-h-screen bg-black m-auto p-5">
        <div className="flex flex-col justify-center h-4/5 w-4/5 max-w-md mx-auto my-5">
          <Image src={Logo} alt="logo" className="w-24 h-24 mx-auto" />
          <h1 className="text-white  font-semibold my-2">Login to ChatsApp</h1>
          <h1 className="text-white text-sm  font-semibold my-2">New user? <Link href="/auth/register" className="text-main-accent hover:underline">Create an account</Link></h1>

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
              {/* @ts-ignore  */}
              <TextField name="email"id="email"
                label="Email Address"
              />
              {/*  @ts-ignore */}
              <TextField id="password"
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
                className="flex justify-end text-white hover:underline"
                href="/"
              >
                Forget Password?
              </Link>
              <Button type="submit" className="text-white">
                Login
              </Button>
            </div>
          </FormProvider>
          <AuthSocial />
        </div>
      </main>
    </>
  );
};

export default Login;
