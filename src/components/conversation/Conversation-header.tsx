import { CaretDown, MagnifyingGlass, PhoneCall, VideoCamera } from 'phosphor-react'
import React from 'react'
import Divider from '../ui/Divider'
import UserAvator from '../user/user-avator'

const ConversationHeader = () => {
  return (
    <div className='w-full bg-[#F8FAFF] dark:bg-dark flex justify-center items-center gap-2 p-2'>
        
        <UserAvator online />
        
        <div className='flex-grow'>
            <h3>Sanyam Jain</h3>
            <h6> offline</h6>
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