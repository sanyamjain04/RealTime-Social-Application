import { Menu, MenuItem } from "@mui/material";
import clsx from "clsx";
import Image from "next/legacy/image";
import { DotsThreeVertical, DownloadSimple, File } from "phosphor-react";
import { MouseEvent, useState } from "react";
import { Message_options } from "../../data";
import Divider from "../ui/Divider";
import { ChatProps } from "./message";

const Timeline = (chat: ChatProps) => {
  return (
    <div className="flex p-2 items-center justify-between">
      <div className="h-[1px] bg-slate-600 rounded-full w-[46%]" />
      <p>{chat.text}</p>
      <div className="h-[1px] bg-slate-600 rounded-full w-[46%]" />
    </div>
  );
};

const TextMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "group flex rounded-xl "
      )}
    >
      <p
        className={clsx(
          "flex rounded-xl p-2",
          chat.incoming === true
            ? "bg-slate-400 dark:text-black"
            : "bg-[#0162C4]"
        )}
      >
        {chat.message}
      </p>
      <div className={clsx(chat.incoming === true ? 'order-1' :'-order-1',"w-5 h-2 invisible group-hover:visible" )}>
        <MessageOption />
      </div>

    </div>
  );
}

const MediaMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex rounded-xl group"
      )}
    >
      <div
        className={clsx(
          "w-max rounded-xl p-1",
          chat.incoming === true
            ? "bg-slate-400 dark:text-black"
            : "bg-[#0162C4]"
        )}
      >
        <div className={clsx("relative h-56 w-56 -bottom-1 ")}>
          <Image
            className="rounded-xl"
            src={chat.img as string}
            alt=""
            layout="fill"
          />
        </div>
        <p className={clsx("rounded-xl p-2 w-max")}>{chat.message}</p>
      </div>
      <div className={clsx(chat.incoming === true ? 'order-1' :'-order-1',"w-5 h-2 invisible group-hover:visible" )}>
        <MessageOption />
      </div>
    </div>
  );
}

const ReplyMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex rounded-xl group"
      )}
    >
      <div
        className={clsx(
          "w-max rounded-xl p-1",
          chat.incoming === true
            ? "bg-slate-400 dark:text-black"
            : "bg-[#0162C4]"
        )}
      >
        <p
          className={clsx(
            "rounded-lg p-1 w-max dark:text-black",
            chat.incoming === true ? "bg-[#0162C4]" : "bg-slate-400"
          )}
        >
          {chat.message}
        </p>
        <p
          className={clsx(
            "p-1 rounded-xl",
            chat.incoming === false ? "bg-[#0162C4]" : "bg-slate-400"
          )}
        >
          {chat.reply}
        </p>
        
      </div>
      <div className={clsx(chat.incoming === true ? 'order-1' :'-order-1',"w-5 h-2 invisible group-hover:visible" )}>
        <MessageOption />
      </div>
    </div>
  );
}

const DocMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex rounded-xl p-1 group"
      )}
    >
      <div className="w-max bg-slate-400 rounded-xl p-2 dark:text-black">

      <div className="flex flex-xol items-center justify-center p-2 rounded-xl gap-3 bg-slate-500 ">
        <File size={30} />
        <p className="">Image.PNG</p>
        <DownloadSimple size={30}/>
      </div>
      <p className="rounded-xl p-1">{chat.message}</p>
      </div>
      <div className={clsx(chat.incoming === true ? 'order-1' :'-order-1',"w-5 h-2 invisible group-hover:visible" )}>
        <MessageOption />
      </div>
    </div>
  );
}

const LinkMessage = (chat: ChatProps) => {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex rounded-xl group"
      )}
    >
      <div
        className={clsx(
          "w-max rounded-xl p-1 flex flex-col gap-1",
          chat.incoming === true
            ? "bg-slate-400 dark:text-black"
            : "bg-[#0162C4]"
        )}
      >
        <div className={clsx("relative h-56 w-56")}>
          <Image
            className="rounded-xl"
            src={chat.preview as string}
            alt=""
            layout="fill"
          />
        </div>
        <p className={clsx("rounded-lg p-1 w-max text-[#0162C4]")}>
          <a target="_blank" href="https://www.youtube.com/">
            https://www.youtube.com/
          </a>
        </p>
        <p
          className={clsx(
            "rounded-lg p-1 w-max dark:text-black",
            chat.incoming === true ? "bg-[#0162C4]" : "bg-slate-400"
          )}
        >
          {chat.message}
        </p>
      </div>
      <div className={clsx(chat.incoming === true ? 'order-1' :'-order-1',"w-5 h-2 invisible group-hover:visible" )}>
        <MessageOption />
      </div>
    </div>
  );
}

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event :MouseEvent<SVGSVGElement> ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        size={20}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={clsx("dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer rounded-2xl")}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="flex flex-col gap-1">
          {Message_options.map((el, idx) => (
            <MenuItem key={idx} className="dark:hover:bg-slate-400" onClick={handleClose}>{el.title}</MenuItem>
          ))}
        </div>
      </Menu>
    </>
  );
};

export { Timeline, TextMessage, MediaMessage, ReplyMessage, LinkMessage, DocMessage };
