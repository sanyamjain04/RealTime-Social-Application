import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'src/layouts/Layout';
import { ReactElement, ReactNode } from 'react';
import Settings from '@components/Settings';

const NoChat = dynamic(() => import('@assets/illustrations/NoChat'), {
  ssr: false,
});

const settings = () => {
  return (
    <>
      <Head>
        <title>Settings - ChatsApp</title>
      </Head>
      <Settings />
      <div className="flex h-screen w-[calc(100vw-400px)] flex-col items-center justify-center border-b-[6px] border-main-accent">
        <NoChat />
        <p>
          Select a conversation or start a{' '}
          <span className="text-main-accent">new one</span>
        </p>
      </div>
    </>
  );
};

settings.getLayout = (page: ReactElement): ReactNode => <Layout>{page}</Layout>;

export default settings;
