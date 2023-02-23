import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import ChatElement from './Chat-element';
import Divider from '../ui/Divider';
import { ChatList } from 'src/data';

const Chat = () => {
  console.log('chat mounted');

  return (
    <div className="group flex h-screen w-[300px] flex-col gap-2 bg-slate-200 dark:bg-dark dark:text-white">
      {/* Header */}
      <div className="m-3 flex items-center justify-between px-2 ">
        <h4>Chats</h4>
        <CircleDashed size={25} />
      </div>

      {/* Search */}
      <div className="mx-3 flex items-center gap-2 rounded-3xl bg-white p-2">
        <MagnifyingGlass className="text-[#709CE6]" size={20} />
        <input
          type="text"
          aria-label="search"
          name=""
          id=""
          placeholder="Search..."
          className="mr-2 w-full bg-transparent text-black outline-none"
        />
      </div>

      {/* Archive */}
      <div className="flex items-center gap-2 px-2">
        <ArchiveBox size={18} />
        <button>Archive</button>
      </div>

      <Divider className="m-2" />

      <div className="scrollbarThin ml-3 mr-1 mb-3 flex flex-col gap-2 overflow-y-scroll pr-1 pb-2">
        {/* Pinned Chat */}
        <h6 className="text-xs">Pinned</h6>
        {ChatList.filter((chat) => chat.pinned).map((chat) => (
          <ChatElement key={chat.id} {...chat} />
        ))}

        {/* All Chats */}
        <h6 className="text-xs">All Chats</h6>
        {ChatList.filter((chat) => !chat.pinned).map((chat) => (
          <ChatElement key={chat.id} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
