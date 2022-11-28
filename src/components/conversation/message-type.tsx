import clsx from "clsx";
import Image from "next/legacy/image";
import { DownloadSimple, FileImage } from "phosphor-react";
import Divider from "../ui/Divider";
import { ChatProps } from "./message";

const Timeline = (chat: ChatProps) => {
  return (
    <div className="flex p-2 items-center justify-between">
      <Divider className="w-[46%]" />
      <caption>{chat.text}</caption>
      <Divider className="w-[46%]" />
    </div>
  );
};

function TextMessage(chat: ChatProps) {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex rounded-xl "
      )}
    >
      <p
        className={clsx(
          "rounded-xl p-2",
          chat.incoming === true
            ? "bg-slate-400 dark:text-black"
            : "bg-[#0162C4]"
        )}
      >
        {chat.message}
      </p>
    </div>
  );
}

function MediaMessage(chat: ChatProps) {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex-col rounded-xl"
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
    </div>
  );
}

function ReplyMessage(chat: ChatProps) {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex-col rounded-xl"
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
            "dark:text-black p-1 rounded-xl",
            chat.incoming === false ? "bg-[#0162C4]" : "bg-slate-400"
          )}
        >
          {chat.reply}
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
    </div>
  );
}

function DocMessage(chat: ChatProps) {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex-col rounded-xl p-1"
      )}
    >
      <div className="w-max bg-slate-400 rounded-xl p-2 dark:text-black">

      <div className="flex flex-xol items-center justify-center p-2 rounded-xl gap-3 bg-slate-500 ">
        <FileImage size={30} />
        <p className="">Image.PNG</p>
        <DownloadSimple size={30}/>
      </div>
      <p className="rounded-xl p-1">{chat.message}</p>
      </div>
      {/* <div
        className={clsx(
          "w-max rounded-xl p-1",
          chat.incoming === true
            ? "bg-slate-400 dark:text-black"
            : "bg-[#0162C4]"
        )}
      >
        <p
          className={clsx(
            "dark:text-black p-1 rounded-xl",
            chat.incoming === false ? "bg-[#0162C4]" : "bg-slate-400"
          )}
        >
          {chat.reply}
        </p>
        <p
          className={clsx(
            "rounded-lg p-1 w-max dark:text-black",
            chat.incoming === true ? "bg-[#0162C4]" : "bg-slate-400"
          )}
        >
          {chat.message}
        </p>
      </div> */}
    </div>
  );
}

function LinkMessage(chat: ChatProps) {
  return (
    <div
      className={clsx(
        chat.incoming === true ? "justify-start" : "justify-end",
        "flex flex-col rounded-xl"
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
    </div>
  );
}

export { Timeline, TextMessage, MediaMessage, ReplyMessage, LinkMessage, DocMessage };
