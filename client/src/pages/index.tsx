import Head from 'next/head';
import Chat from '@components/chat/chat';
import { ReactElement, ReactNode } from 'react';
import Layout from 'src/layouts/Layout';
import dynamic from 'next/dynamic';

const Conversation = dynamic(() => import('@components/conversation'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>
        <title>ChatsApp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A realtime Chat, Audio and video calling App"
        />
      </Head>
      <Chat />
      <Conversation />
    </>
  );
};

Home.getLayout = (page: ReactElement): ReactNode => <Layout>{page}</Layout>;

export default Home;
