import Head from "next/head";
import FormProvider from "../../components/hooks-form/FormProvider";
import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment } from "@mui/material";
import RfhTextField from "../../components/hooks-form/TextField";
import { Eye, EyeSlash } from "phosphor-react";


// Todo: change the mui components with own ui components 

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Emial is requierd")
      .email("Please enter Valid email Address"),
    password: Yup.string().required("Password is required").length(8),
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
    } catch (error: any) {
      console.log(error.message);
      reset()
      setError("email", {
        ...error,
        message: error.message
      })
    }
  }
  return (
    <>
      <Head>
        <title>Login - ChatsApp</title>
      </Head>
      <main className="w-4/5 h-4/5 bg-red-50 m-auto p-5"> 

      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-3">
          {!!errors.email && <Alert severity="error" >{errors.email.message}</Alert> }
        </div>
        <div className="flex flex-col gap-2">

        <RfhTextField name="email" label="Email Address" />
        <RfhTextField name="password" label="password" type={showPassword ? "text" : "password"} InputProps={{
          endAdornment:  (
            <InputAdornment>
              <IconButton onClick={()=>setShowPassword(prev => !prev)}>
                {showPassword ?  <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          )
        }} />
        <Button fullWidth>
          Login

        </Button>

        </div>
      </FormProvider>
      </main>
    </>
  );
};

export default Login;
