import Head from 'next/head';
import AuthSocial from '@components/auth/Auth-social';
import Link from 'next/link';
import Logo from '../../assets/Images/logo.ico';
import Image from 'next/image';
import RegisterForm from '@components/auth/register-form';

// Todo: change the mui components with own ui components

const Login = () => {
  return (
    <>
      <Head>
        <title>Register - ChatsApp</title>
      </Head>
      <main className="m-auto min-h-screen w-full bg-black p-5">
        <div className="mx-auto my-5 flex h-4/5 w-4/5 max-w-md flex-col justify-center">
          <Image src={Logo} alt="logo" className="mx-auto h-24 w-24" />
          <h1 className="my-2  font-semibold text-white">
            Get Started with ChatsApp
          </h1>
          <h1 className="my-2 text-sm  font-semibold text-white">
            Already have an Account?{' '}
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
