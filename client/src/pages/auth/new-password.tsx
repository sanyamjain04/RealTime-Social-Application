import Image from 'next/image';
import Logo from '@assets/Images/logo.ico';
import Link from 'next/link';
import { CaretLeft } from 'phosphor-react';
import NewPasswordForm from '@components/auth/new-password-form';

const ResetPassword = () => {
  return (
    <main className="m-auto min-h-screen w-full bg-black p-5 text-white">
      <div className="mx-auto my-5 flex h-4/5 w-4/5 max-w-md flex-col justify-center gap-5">
        <Image src={Logo} alt="logo" className="mx-auto h-24 w-24" />
        <h1 className="my-2 text-xl font-semibold">Reset your Password?</h1>
        <p>Please set your new password.</p>
        <NewPasswordForm />
        <Link
          href="/auth/login"
          className="flex w-max items-center hover:underline"
        >
          <CaretLeft /> Return to Sign In
        </Link>
      </div>
    </main>
  );
};

export default ResetPassword;
