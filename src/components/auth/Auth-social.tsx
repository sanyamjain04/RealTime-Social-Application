import Button from "@components/ui/Button";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";

export default function AuthSocial() {
  const handleGoogleLogin = async () => {};

  const handleGithubLogin = async () => {};

  const handleTwitterLogin = async () => {};

  return (
    <div className="m-2">
      <div className="flex p-2 items-center justify-between">
        <div className="h-[1px] bg-slate-600 rounded-full w-[46%]" />
        <p className="text-white">OR</p>
        <div className="h-[1px] bg-slate-600 rounded-full w-[46%]" />
      </div>

      <div className="flex justify-center gap-4">
        <Button onClick={handleGoogleLogin}>
          <GoogleLogo color="#DF3E30" size={25} />
        </Button>

        <Button onClick={handleGithubLogin}>
          <GithubLogo size={25}  className="text-white"/>
        </Button>

        <Button onClick={handleTwitterLogin}>
          <TwitterLogo color="#1C9CEA" size={25} />
        </Button>
      </div>
    </div>
  );
}
