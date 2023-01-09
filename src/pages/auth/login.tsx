import Head from "next/head";
import AuthSocial from "@components/auth/Auth-social";
import Link from "next/link";
import Logo from "@assets/Images/logo.ico";
import Image from "next/image";
import LoginForm from "@components/auth/Login-form";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login - ChatsApp</title>
      </Head>
      <main className="w-full min-h-screen bg-black m-auto p-5">
        <div className="flex flex-col justify-center h-4/5 w-4/5 max-w-md mx-auto my-5">
          <Image src={Logo} alt="logo" className="w-24 h-24 mx-auto" />
          <h1 className="text-white  font-semibold my-2">Login to ChatsApp</h1>
          <h1 className="text-white text-sm  font-semibold my-2">
            New user?{" "}
            <Link
              href="/auth/register"
              className="text-main-accent hover:underline"
            >
              Create an account
            </Link>
          </h1>
          <LoginForm />
          <AuthSocial />
        </div>
      </main>
    </>
  );
};

export default Login;
