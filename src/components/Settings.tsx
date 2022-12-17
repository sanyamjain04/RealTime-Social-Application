import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import UserAvator from "./user/user-avator";
import Divider from "./ui/Divider";

const Settings = () => {
  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: () => {},
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <div className="h-screen w-[300px] bg-slate-200 dark:bg-dark dark:text-white gap-2 flex flex-col p-4">
      <div className="flex items-center gap-3 p-2">
        <CaretLeft size={20} className="cursor-pointer" />
        <h1>Chats</h1>
      </div>

      <div className="flex gap-4">
        <UserAvator />
        <div>
          <h1>Sanyam Jain</h1>
          <h6>Madison</h6>
        </div>
      </div>

      <div className="overflow-scroll scrollbarThin">
        {list.map((setting, key) => (
          <div key={key} className="p-1" onClick={setting.onclick}>
            <button className="flex items-center gap-3 p-2">
              {setting.icon}
              <h2>{setting.title}</h2>
            </button>
            {key !== 7 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
