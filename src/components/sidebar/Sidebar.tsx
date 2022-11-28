import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import Logo from "../../assets/Images/logo.ico";
import UserAvator from "../user/user-avator";
import SideLinks from "./side-links";

const Switch = dynamic(() => import("./side-toggle"), {
  ssr: false,
});

const Sidebar = () => {
  return (
    <div className="w-[100px] h-screen bg-white dark:bg-dark overflow-hidden border-r dark:border-slate-600">
      <div className="flex flex-col justify-between h-full py-3 ">
        <div className="flex flex-col gap-5 items-center">
          <div className="h-16 w-16 rounded-lg bg-[#0162C4]">
            <Image src={Logo} alt="logo" />
          </div>
          <SideLinks />
        </div>
        <div className=" flex  flex-col gap-2 items-center justify-center">
          <Switch />
          <UserAvator />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
