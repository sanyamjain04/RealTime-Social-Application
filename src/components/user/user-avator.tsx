import { faker } from "@faker-js/faker";
import Image from "next/legacy/image";

const UserAvator = () => {
  return (
    <div className="rounded-full relative w-14 h-14 overflow-hidden">
      <Image src={faker.image.avatar()} alt="" layout="fill" />
    </div>
  );
};

export default UserAvator;
