import { Tooltip } from "@mui/material";
import clsx from "clsx";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import { useState } from "react";
import { Actions } from "../../data";
import { useTheme } from "../../hooks/theme-context";
import EmojiPicker from "../EmojiPicker";

const ConversationInput = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);
  const [showMedia, setShowMedia] = useState<boolean>(false);
  const { dark } = useTheme();

  return (
    <div className="relative w-full bg-slate-300 flex gap-2 py-4 px-2 items-center justify-center dark:bg-dark">
      <div className="flex gap-1 items-center flex-grow dark:bg-dark-secondary rounded-lg">
        {/* Media Button  */}
        <div className={clsx("absolute bottom-20 left-3 flex flex-col gap-2",!showMedia && 'hidden')}>
          {[...Actions].reverse().map((action, idx) => (
            <Tooltip title={action.title} key={idx} placement="right" >
              <div
                className={`rounded-lg p-1 hover:bg-main-accent/80 bg-main-accent`}
                >
                {action.icon}
              </div>
            </Tooltip>
          ))}
        </div>
        <div className="p-2 hover:bg-slate-400 dark:hover:bg-slate-800" onClick={()=>setShowMedia(prev=>!prev)}>
          <LinkSimple size={20} />
        </div>

        {/* Chat Input */}
        <input
          type="text"
          placeholder="Enter the Meassage..."
          className="w-full outline-none bg-transparent dark:caret-white resize-none scrollbar-thin p-2"
        />

        {/* Emoji Picker */}
        <button
          className={clsx(
            "absolute bottom-20 right-10 z-10",
            !openEmojiPicker && "hidden"
          )}
        >
          <EmojiPicker
            theme={dark ? "dark" : "light"}
            onEmojiSelect={console.log}
          />
        </button>
        <button
          className="p-2 cursor-pointer hover:bg-slate-400 dark:hover:bg-slate-800"
          onClick={() => setOpenEmojiPicker((prev) => !prev)}
        >
          <Smiley size={20} />
        </button>
      </div>

      {/* Send Button */}
      <button className="bg-main-accent p-2 rounded-lg">
        <PaperPlaneTilt size={20} />
      </button>
    </div>
  );
};

export default ConversationInput;
