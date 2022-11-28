import dynamic from "next/dynamic";

const Message = dynamic(()=>import('./message'), {ssr: false})

const ConversationMessages = () => {
  return (
    <div className="w-full bg-[#F0F4F4] flex-grow dark:bg-dark-secondary overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded group-hover:scrollbar-thumb-gray-400 rounded-lg">
      <Message />
    </div>
  );
};

export default ConversationMessages;
