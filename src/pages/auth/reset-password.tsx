import Image from "next/image";
import Logo from "@assets/Images/logo.ico";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";

const ResetPassword = () => {
  function handleSubmit() {
    alert("");
  }
  return (
    <main className="w-full text-white min-h-screen bg-black m-auto p-5">
      <div className="flex flex-col gap-5 justify-center h-4/5 w-4/5 max-w-md mx-auto my-5">
        <Image src={Logo} alt="logo" className="w-24 h-24 mx-auto" />
        <h1 className="font-semibold my-2 text-xl">Forget your Password?</h1>
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
          className="flex items-center hover:underline w-max"
        >
          <CaretLeft /> Back to Sign In
        </Link>
      </div>
    </main>
  );
};

export default ResetPassword;
