import UserAvator from "../user/user-avator";

interface ChatElementProps {
  id: number;
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  online: boolean;
}
const ChatElement = ({
  img,
  msg,
  name,
  online,
  time,
  unread,
}: ChatElementProps) => {
  return (
    <div className="flex items-center gap-2 h-16 rounded-lg p-2 mr-1 bg-white dark:bg-dark-secondary dark:text-white">

      <UserAvator ClassName="h-[2.5rem] w-[2.5rem]" online={online} />

      <div className="flex flex-col items-start flex-grow">
        <span>{name}</span>
        <span className="text-xs">{msg}</span>
      </div>

      <div className="flex flex-col justify-end items-end gap-1">
        <p className="text-sm">{time}</p>
        <p className="text-center rounded-full text-white bg-main-accent w-4 h-4 text-xs">
          {unread}
        </p>
      </div>
    </div>
  );
};

export default ChatElement;
