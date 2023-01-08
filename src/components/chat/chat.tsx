import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "@data/index";
import Divider from "@ui/Divider";
import ChatElement from "./Chat-element";

const Chat = () => {
  return (
    <div className="group h-screen w-[300px] bg-slate-200 dark:bg-dark dark:text-white gap-2 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-2 m-3 ">
        <h4>Chats</h4>
        <CircleDashed size={25} />
      </div>

      {/* Search */}
      <div className="flex gap-2 items-center bg-white mx-3 p-2 rounded-3xl ">
        <MagnifyingGlass className="text-[#709CE6]" size={20} />
        <input
          type="text"
          aria-label="search"
          name=""
          id=""
          placeholder="Search..."
          className="bg-transparent outline-none text-black w-full mr-2"
        />
      </div>

      {/* Archive */}
      <div className="flex px-2 gap-2 items-center">
        <ArchiveBox size={18} />
        <button>Archive</button>
      </div>

      <Divider className="m-2" />

      <div className="gap-2 flex flex-col pr-1 overflow-y-scroll pb-2 ml-3 mr-1 mb-3 scrollbarThin">

        {/* Pinned Chat */}
        <h6 className="text-xs">Pinned</h6>
        {ChatList.filter(chat=> chat.pinned).map(chat=>(
          <ChatElement key={chat.id} {...chat} />
        ))}

        {/* All Chats */}
        <h6 className="text-xs">All Chats</h6>
        {ChatList.filter(chat=> !chat.pinned).map(chat=>(
          <ChatElement key={chat.id} {...chat} />
        ))}

      </div>

    </div>
  );
};

export default Chat;
