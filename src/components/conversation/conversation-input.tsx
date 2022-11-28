import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";

const ConversationInput = () => {
  return (
    <div className="w-full bg-slate-300 flex gap-2 py-4 px-2 items-center justify-center dark:bg-dark">
      <div className="flex gap-1 items-center flex-grow dark:bg-dark-secondary p-2 rounded-lg">
        <LinkSimple size={20} />
        <input
          type="text"
          placeholder="Enter the Meassage..."
          className="w-full outline-none bg-transparent dark:caret-white resize-none scrollbar-thin"
        />
        <Smiley size={20} />
      </div>
      <div className="bg-[#0162C4] p-2 rounded-lg">
        <PaperPlaneTilt size={20} />
      </div>
    </div>
  );
};

export default ConversationInput;
