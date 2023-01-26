import Image from 'next/image';
import Logo from '@assets/Images/logo.ico';
import Input from '@components/ui/Input';
import Button from '@components/ui/Button';
import Link from 'next/link';
import { CaretLeft } from 'phosphor-react';

const ResetPassword = () => {
  function handleSubmit() {
    alert('');
  }
  return (
    <main className="m-auto min-h-screen w-full bg-black p-5 text-white">
      <div className="mx-auto my-5 flex h-4/5 w-4/5 max-w-md flex-col justify-center gap-5">
        <Image src={Logo} alt="logo" className="mx-auto h-24 w-24" />
        <h1 className="my-2 text-xl font-semibold">Forget your Password?</h1>
        <p>
          Please enter the email address associated with your account and We
          will email you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            label="Email Address"
            name="email"
            type="email"
            required
            autoFocus
          />
          <Button type="submit">Send Request</Button>
        </form>
        <Link
          href="/auth/login"
          className="flex w-max items-center hover:underline"
        >
          <CaretLeft /> Back to Sign In
        </Link>
      </div>
    </main>
  );
};

export default ResetPassword;
