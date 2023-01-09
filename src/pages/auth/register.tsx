import Head from "next/head";
import AuthSocial from "@components/auth/Auth-social";
import Link from "next/link";
import Logo from "../../assets/Images/logo.ico";
import Image from "next/image";
import RegisterForm from "@components/auth/register-form";

// Todo: change the mui components with own ui components

const Login = () => {
  return (
    <>
      <Head>
        <title>Register - ChatsApp</title>
      </Head>
      <main className="w-full min-h-screen bg-black m-auto p-5">
        <div className="flex flex-col justify-center h-4/5 w-4/5 max-w-md mx-auto my-5">
          <Image src={Logo} alt="logo" className="w-24 h-24 mx-auto" />
          <h1 className="text-white  font-semibold my-2">
            Get Started with ChatsApp
          </h1>
          <h1 className="text-white text-sm  font-semibold my-2">
            Already have an Account?{" "}
            <Link
              href="/auth/login"
              className="text-main-accent hover:underline"
            >
              Sign In
            </Link>
          </h1>
          <RegisterForm />
          <AuthSocial />
        </div>
      </main>
    </>
  );
};

export default Login;
