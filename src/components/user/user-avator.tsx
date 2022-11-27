import { faker } from "@faker-js/faker";
import clsx from "clsx";
import Image from "next/legacy/image";

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
            "rounded-full relative w-14 h-14 overflow-hidden "
          )}
        >
          <Image src={faker.image.avatar()} alt="" layout="fill" />
        </div>
        {online && (
          <div
            className={clsx(
              "rounded-full absolute border border-white z-10 h-2.5 w-2.5 bottom-0 right-1 bg-green-400"
            )}
          ></div>
        )}
      </div>
    </>
  );
};

export default UserAvator;
