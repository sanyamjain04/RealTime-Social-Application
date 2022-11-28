import type { NextPage } from 'next'
import Head from 'next/head'
import Chat from '../components/chat/chat'
import Conversation from '../components/conversation'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chat />
      <Conversation />

    </>
  )
}

export default Home
