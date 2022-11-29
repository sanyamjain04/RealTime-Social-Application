import clsx from "clsx";
import dynamic from "next/dynamic";
import { useContactInformationStore } from "../../zustand/contackStore";
import ConversationHeader from "./Conversation-header";
import ConversationMessages from "./conversation-messages";

const ConversationInput = dynamic(() => import("./conversation-input"), {
  ssr: false,
});

const Conversation = () => {
  const isSidebarOpen :boolean = useContactInformationStore((state) => state.sidebar.open) ;

  return (
    <div
      className={clsx(
        "h-screen flex flex-col dark:bg-dark",
        isSidebarOpen 
          ? "w-[calc(100vw-100px-300px-300px)]" 
          : "w-[calc(100vw-100px-300px)]"
      )}
    >
      <ConversationHeader />
      <ConversationMessages />
      <ConversationInput />
    </div>
  );
};

export default Conversation;
