import { CaretDown, MagnifyingGlass, PhoneCall, VideoCamera } from 'phosphor-react'
import React from 'react'
import { useContactInformationStore } from '@zustand/contackStore'
import Divider from '@ui/Divider'
import UserAvator from '../user/user-avator'

const ConversationHeader = () => {
  const toggleContactSidebar = useContactInformationStore((state)=> state.toggleSidebar)

  return (
    <div className='w-full bg-[#F8FAFF] dark:bg-dark flex justify-center items-center gap-2 p-2'>

        <div className='flex flex-grow items-center gap-2 cursor-pointer' onClick={toggleContactSidebar}>
          <UserAvator online />
        
          <div className='w-max'>
              <h3>Sanyam Jain</h3>
              <h6> offline</h6>
          </div>
        </div>
        
        <div className='flex gap-4'>
            <VideoCamera size={25} />
            <PhoneCall size={25} />
            <MagnifyingGlass size={25} />
            <Divider className='!h-8 w-[1px]'/>
            <CaretDown size={25} />
        </div>
    </div>
  )
}

export default ConversationHeader