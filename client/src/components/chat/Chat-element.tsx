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
    <div className="mr-1 flex h-16 items-center gap-2 rounded-lg bg-white p-2 dark:bg-dark-secondary dark:text-white">
      <UserAvator ClassName="h-[2.5rem] w-[2.5rem]" online={online} />

      <div className="flex flex-grow flex-col items-start">
        <span>{name}</span>
        <span className="text-xs">{msg}</span>
      </div>

      <div className="flex flex-col items-end justify-end gap-1">
        <p className="text-sm">{time}</p>
        <p className="h-4 w-4 rounded-full bg-main-accent text-center text-xs text-white">
          {unread}
        </p>
      </div>
    </div>
  );
};

export default ChatElement;
