import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Chat from '../components/chat/chat'
import Conversation from '../components/conversation'
import { useContactInformationStore } from '../zustand/contackStore'
const ContactInformation = dynamic(()=>import('../components/contact-Information/Contactinformation'))

const Home: NextPage = () => {
  const isSidebarOpen = useContactInformationStore((state) => state.sidebar.open)
  
  return (
    <>
      <Head>
        <title>ChatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chat />
      <Conversation />
      {isSidebarOpen && <ContactInformation />}

    </>
  )
}

export default Home
