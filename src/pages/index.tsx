import type { NextPage } from 'next'
import Head from 'next/head'
import Chat from '../components/chat/chat'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chat />

    </>
  )
}

export default Home
