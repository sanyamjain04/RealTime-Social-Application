import Divider from '@components/ui/Divider';
import UserAvator from '@components/user/user-avator';
import { useContactInformationStore } from '@zustand/contackStore';
import {
  CaretDown,
  MagnifyingGlass,
  PhoneCall,
  VideoCamera,
} from 'phosphor-react';
import React from 'react';

const ConversationHeader = () => {
  const toggleContactSidebar = useContactInformationStore(
    (state) => state.toggleSidebar
  );

  return (
    <div className="flex w-full items-center justify-center gap-2 bg-[#F8FAFF] p-2 dark:bg-dark">
      <div
        className="flex flex-grow cursor-pointer items-center gap-2"
        onClick={toggleContactSidebar}
      >
        <UserAvator online />

        <div className="w-max">
          <h3>Sanyam Jain</h3>
          <h6> offline</h6>
        </div>
      </div>

      <div className="flex gap-4">
        <VideoCamera size={25} />
        <PhoneCall size={25} />
        <MagnifyingGlass size={25} />
        <Divider className="!h-8 w-[1px]" />
        <CaretDown size={25} />
      </div>
    </div>
  );
};

export default ConversationHeader;
