import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import { useState } from 'react';
import { Actions } from '@data/index';
import { useTheme } from '@hooks/theme-context';
import EmojiPicker from '../EmojiPicker';

const ConversationInput = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);
  const [showMedia, setShowMedia] = useState<boolean>(false);
  const { dark } = useTheme();

  return (
    <div className="relative flex w-full items-center justify-center gap-2 bg-slate-300 py-4 px-2 dark:bg-dark">
      <div className="flex flex-grow items-center gap-1 rounded-lg dark:bg-dark-secondary">
        {/* Media Button  */}
        <div
          className={clsx(
            'absolute bottom-20 left-3 flex flex-col gap-2',
            !showMedia && 'hidden'
          )}
        >
          {[...Actions].reverse().map((action) => (
            <Tooltip title={action.title} key={action.title} placement="right">
              <div
                className={`rounded-lg bg-main-accent p-1 hover:bg-main-accent/80`}
              >
                {action.icon}
              </div>
            </Tooltip>
          ))}
        </div>
        <div
          className="p-2 hover:bg-slate-400 dark:hover:bg-slate-800"
          onClick={() => setShowMedia((prev) => !prev)}
        >
          <LinkSimple size={20} />
        </div>

        {/* Chat Input */}
        <input
          type="text"
          placeholder="Enter the Meassage..."
          className="w-full resize-none bg-transparent p-2 outline-none scrollbar-thin dark:caret-white"
        />

        {/* Emoji Picker */}
        <button
          className={clsx(
            'absolute bottom-20 right-10 z-10',
            !openEmojiPicker && 'hidden'
          )}
        >
          <EmojiPicker
            theme={dark ? 'dark' : 'light'}
            onEmojiSelect={console.log}
          />
        </button>
        <button
          className="cursor-pointer p-2 hover:bg-slate-400 dark:hover:bg-slate-800"
          onClick={() => setOpenEmojiPicker((prev) => !prev)}
        >
          <Smiley size={20} />
        </button>
      </div>

      {/* Send Button */}
      <button className="rounded-lg bg-main-accent p-2">
        <PaperPlaneTilt size={20} />
      </button>
    </div>
  );
};

export default ConversationInput;
