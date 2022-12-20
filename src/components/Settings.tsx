import { useState, Dispatch, SetStateAction } from "react";
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
import Link from "next/link";
import DialogModal from "./ui/DialogModal";
import { shortcuts } from "../data";

const Settings = () => {
  const [showShortcuts, setShowShortcuts] = useState(false);
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
      onclick: () => setShowShortcuts(true),
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
        <Link href="/">
          <CaretLeft size={20} className="cursor-pointer" />
        </Link>
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
        {list.map(({ key, icon, onclick, title }) => (
          <div key={key} className="p-1" onClick={onclick}>
            <button className="flex items-center gap-3 p-2">
              {icon}
              <h2>{title}</h2>
            </button>
            {key !== 7 && <Divider />}
          </div>
        ))}
      </div>
      {showShortcuts && (
        <KeyboardShortcuts
          showShortcuts={showShortcuts}
          setShowShortcuts={setShowShortcuts}
        />
      )}
    </div>
  );
};

type KeyboardShortcutsProps = {
  showShortcuts: boolean;
  setShowShortcuts: Dispatch<SetStateAction<boolean>>;
};

const KeyboardShortcuts = ({
  showShortcuts,
  setShowShortcuts,
}: KeyboardShortcutsProps) => {
  const closeModal = () => setShowShortcuts(false);
  
  return (
    <DialogModal
      open={showShortcuts}
      closeModal={closeModal}
      title="Keyboard Shortcuts"
      closeButtonTitle="Ok"
    >
      <div className="grid items-center gap-x-5 gap-y-2 grid-cols-2">
        {shortcuts.map((shortcut) => (
          <div key={shortcut.key} className="flex justify-between items-center gap-2">
            <p className="dark:text-gray-200 whitespace-nowrap">{shortcut.title}</p>
            <div className="flex items-center gap-2">
              {shortcut.combination.map((key) => (
                <span className="bg-gray-300 dark:bg-slate-400 rounded-lg px-1.5">{key}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DialogModal>
  );
};

export default Settings;
