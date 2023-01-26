import { Menu, MenuItem } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/legacy/image';
import { DotsThreeVertical, DownloadSimple, File } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import { Message_options } from '@data/index';
import { ChatProps } from './message';

const Timeline = (chat: ChatProps) => {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="h-[1px] w-[46%] rounded-full bg-slate-600" />
      <p>{chat.text}</p>
      <div className="h-[1px] w-[46%] rounded-full bg-slate-600" />
    </div>
  );
};

const TextMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? 'justify-start' : 'justify-end',
        'group flex rounded-xl '
      )}
    >
      <p
        className={clsx(
          'flex rounded-xl p-2',
          chat.incoming === true
            ? 'bg-slate-400 dark:text-black'
            : 'bg-main-accent'
        )}
      >
        {chat.message}
      </p>
      <div
        className={clsx(
          !chat.menu && 'hidden',
          chat.incoming === true ? 'order-1' : '-order-1',
          'invisible h-2 w-5 group-hover:visible'
        )}
      >
        <MessageOption />
      </div>
    </div>
  );
};

const MediaMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? 'justify-start' : 'justify-end',
        'group flex rounded-xl'
      )}
    >
      <div
        className={clsx(
          'w-max rounded-xl p-1',
          chat.incoming === true
            ? 'bg-slate-400 dark:text-black'
            : 'bg-main-accent'
        )}
      >
        <div className={clsx('relative -bottom-1 h-56 w-56 ')}>
          <Image
            className="rounded-xl"
            src={chat.img as string}
            alt=""
            layout="fill"
          />
        </div>
        <p className={clsx('w-max rounded-xl p-2')}>{chat.message}</p>
      </div>
      <div
        className={clsx(
          !chat.menu && 'hidden',
          chat.incoming === true ? 'order-1' : '-order-1',
          'invisible h-2 w-5 group-hover:visible'
        )}
      >
        <MessageOption />
      </div>
    </div>
  );
};

const ReplyMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? 'justify-start' : 'justify-end',
        'group flex rounded-xl'
      )}
    >
      <div
        className={clsx(
          'w-max rounded-xl p-1',
          chat.incoming === true
            ? 'bg-slate-400 dark:text-black'
            : 'bg-main-accent'
        )}
      >
        <p
          className={clsx(
            'w-max rounded-lg p-1 dark:text-black',
            chat.incoming === true ? 'bg-main-accent' : 'bg-slate-400'
          )}
        >
          {chat.message}
        </p>
        <p
          className={clsx(
            'rounded-xl p-1',
            chat.incoming === false ? 'bg-main-accent' : 'bg-slate-400'
          )}
        >
          {chat.reply}
        </p>
      </div>
      <div
        className={clsx(
          !chat.menu && 'hidden',
          chat.incoming === true ? 'order-1' : '-order-1',
          'invisible h-2 w-5 group-hover:visible'
        )}
      >
        <MessageOption />
      </div>
    </div>
  );
};

const DocMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? 'justify-start' : 'justify-end',
        'group flex rounded-xl p-1'
      )}
    >
      <div className="w-max rounded-xl bg-slate-400 p-2 dark:text-black">
        <div className="flex-xol flex items-center justify-center gap-3 rounded-xl bg-slate-500 p-2 ">
          <File size={30} />
          <p className="">Image.PNG</p>
          <DownloadSimple size={30} />
        </div>
        <p className="rounded-xl p-1">{chat.message}</p>
      </div>
      <div
        className={clsx(
          !chat.menu && 'hidden',
          chat.incoming === true ? 'order-1' : '-order-1',
          'invisible h-2 w-5 group-hover:visible'
        )}
      >
        <MessageOption />
      </div>
    </div>
  );
};

const LinkMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? 'justify-start' : 'justify-end',
        'group flex rounded-xl'
      )}
    >
      <div
        className={clsx(
          'flex w-max flex-col gap-1 rounded-xl p-1',
          chat.incoming === true
            ? 'bg-slate-400 dark:text-black'
            : 'bg-main-accent'
        )}
      >
        <div className={clsx('relative h-56 w-56')}>
          <Image
            className="rounded-xl"
            src={chat.preview as string}
            alt=""
            layout="fill"
          />
        </div>
        <p className={clsx('w-max rounded-lg p-1 text-accent-blue')}>
          <a target="_blank" href="https://www.youtube.com/">
            https://www.youtube.com/
          </a>
        </p>
        <p
          className={clsx(
            'w-max rounded-lg p-1 dark:text-black',
            chat.incoming === true ? 'bg-main-accent' : 'bg-slate-400'
          )}
        >
          {chat.message}
        </p>
      </div>
      <div
        className={clsx(
          !chat.menu && 'hidden',
          chat.incoming === true ? 'order-1' : '-order-1',
          'invisible h-2 w-5 group-hover:visible'
        )}
      >
        <MessageOption />
      </div>
    </div>
  );
};

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<SVGSVGElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <DotsThreeVertical
        size={20}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={clsx(
          'cursor-pointer rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700'
        )}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="flex flex-col gap-1">
          {Message_options.map((el, idx) => (
            <MenuItem
              key={idx}
              className="dark:hover:bg-slate-400"
              onClick={handleClose}
            >
              {el.title}
            </MenuItem>
          ))}
        </div>
      </Menu>
    </>
  );
};

export {
  Timeline,
  TextMessage,
  MediaMessage,
  ReplyMessage,
  LinkMessage,
  DocMessage,
};
