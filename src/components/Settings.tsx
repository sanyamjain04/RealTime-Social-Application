import { useState, Dispatch, SetStateAction } from 'react';
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
} from 'phosphor-react';
import UserAvator from './user/user-avator';
import Divider from '@ui/Divider';
import Link from 'next/link';
import DialogModal from '@ui/DialogModal';
import { shortcuts } from '@data/index';

const Settings = () => {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: 'Notifications',
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: 'Privacy',
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: 'Security',
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: 'Theme',
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: 'Chat Wallpaper',
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: 'Request Account Info',
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: 'Keyboard Shortcuts',
      onclick: () => setShowShortcuts(true),
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: 'Help',
      onclick: () => {},
    },
  ];
  return (
    <div className="flex h-screen w-[300px] flex-col gap-2 bg-slate-200 p-4 dark:bg-dark dark:text-white">
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

      <div className="scrollbarThin overflow-scroll">
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
      <div className="grid grid-cols-2 items-center gap-x-5 gap-y-2">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.key}
            className="flex items-center justify-between gap-2"
          >
            <p className="whitespace-nowrap dark:text-gray-200">
              {shortcut.title}
            </p>
            <div className="flex items-center gap-2">
              {shortcut.combination.map((key) => (
                <span
                  className="rounded-lg bg-gray-300 px-1.5 dark:bg-slate-400"
                  key={key}
                >
                  {key}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DialogModal>
  );
};

export default Settings;
