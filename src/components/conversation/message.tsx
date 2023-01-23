import { Chat_History } from "@data/index";
import {
  DocMessage,
  LinkMessage,
  MediaMessage,
  ReplyMessage,
  TextMessage,
  Timeline,
} from "./message-type";

export interface ChatProps {
  type: string;
  message?: string;
  incoming?: boolean;
  outgoing?: boolean;
  text?: string;
  subtype?: string;
  img?: string;
  preview?: string;
  reply?: string;
  menu?: boolean;
}

const Message = ({ menu }: { menu: boolean }) => {
  const renderMessage = (chat: ChatProps, idx: number) => {
    switch (chat.type) {
      case "divider":
        return <Timeline key={idx} {...chat} />;
      case "msg":
        switch (chat.subtype) {
          case "img":
            return <MediaMessage key={idx} {...chat} menu={menu} />;
          case "doc":
            return <DocMessage key={idx} {...chat} menu={menu} />;
          case "link":
            return <LinkMessage key={idx} {...chat} menu={menu} />;
          case "reply":
            return <ReplyMessage key={idx} {...chat} menu={menu} />;
          default:
            return <TextMessage key={idx} {...chat} menu={menu} />;
        }
      default:
        break;
    }
  };
  return (
    <div className="p-3">
      <div className="flex flex-col gap-2">
        {Chat_History.map((chat, idx) => {
          return renderMessage(chat, idx);
        })}
      </div>
    </div>
  );
};

export default Message;
