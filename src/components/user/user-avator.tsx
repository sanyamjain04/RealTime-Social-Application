import clsx from 'clsx';
import Image from 'next/legacy/image';

interface UserAvatorProps {
  ClassName?: string;
  online?: boolean;
}

const UserAvator = ({ ClassName, online }: UserAvatorProps) => {
  return (
    <>
      <div className="relative">
        <div
          className={clsx(
            ClassName,
            'relative h-14 w-14 overflow-hidden rounded-full '
          )}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/10858?v=4"
            alt=""
            layout="fill"
          />
        </div>
        {online && (
          <div
            className={clsx(
              'absolute bottom-0 right-1 z-10 h-2.5 w-2.5 rounded-full border border-white bg-green-400'
            )}
          ></div>
        )}
      </div>
    </>
  );
};

export default UserAvator;
