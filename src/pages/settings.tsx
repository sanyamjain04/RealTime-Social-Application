import Head from "next/head";
import Settings from "../components/Settings";
import dynamic from "next/dynamic";

const NoChat = dynamic(()=>import('../assets/illustrations/NoChat'), {ssr:false})

const settings = () => {
  return (
    <>
      <Head>
        <title>Settings - ChatsApp</title>
      </Head>
      <Settings />
      <div className="h-screen w-[calc(100vw-400px)] flex flex-col items-center justify-center border-b-[6px] border-main-accent">
        <NoChat />
        <p>
          Select a conversation or start a{" "}
          <span className="text-main-accent">new one</span>
        </p>
      </div>
    </>
  );
};

export default settings;
