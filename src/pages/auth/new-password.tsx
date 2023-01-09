import Image from "next/image";
import Logo from "@assets/Images/logo.ico";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "@components/auth/new-password-form";

const ResetPassword = () => {
  return (
    <main className="w-full text-white min-h-screen bg-black m-auto p-5">
      <div className="flex flex-col gap-5 justify-center h-4/5 w-4/5 max-w-md mx-auto my-5">
        <Image src={Logo} alt="logo" className="w-24 h-24 mx-auto" />
        <h1 className="font-semibold my-2 text-xl">Reset your Password?</h1>
        <p>Please set your new password.</p>
        <NewPasswordForm/>
        <Link
          href="/auth/login"
          className="flex items-center hover:underline w-max"
        >
          <CaretLeft /> Return to Sign In
        </Link>
      </div>
    </main>
  );
};

export default ResetPassword;
