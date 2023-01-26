import dynamic from 'next/dynamic';

const Message = dynamic(() => import('./message'), { ssr: false });

const ConversationMessages = () => {
  return (
    <div className="w-full flex-grow overflow-y-scroll rounded-lg bg-[#F0F4F4] scrollbar-thin scrollbar-thumb-rounded group-hover:scrollbar-thumb-gray-400 dark:bg-dark-secondary">
      <Message menu />
    </div>
  );
};

export default ConversationMessages;
