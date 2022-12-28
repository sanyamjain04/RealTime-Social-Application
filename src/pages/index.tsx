import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Chat from "../components/chat/chat";
import {
  SidebarTypes,
  useContactInformationStore,
} from "../zustand/contackStore";

const Conversation = dynamic(()=>import('../components/conversation'), {ssr:false})
const NoChat = dynamic(()=>import('../assets/illustrations/NoChat'), {ssr:false})
const ContactSidebar = dynamic(()=>import('../components/conversation-sidebars/contact-info'))
const MediaSidebar = dynamic(()=>import('../components/conversation-sidebars/media-info'))
const StarredMessagesSidebar = dynamic(()=>import('../components/conversation-sidebars/starred-messages'))

const Home: NextPage = () => {
  const isSidebarOpen: boolean = useContactInformationStore((state) => state.sidebar.open);

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
      {/* <div className="h-screen w-[calc(100vw-400px)] flex flex-col items-center justify-center border-b-[6px] border-main-accent">
        <NoChat />
        <p>
          Select a conversation or start a{" "}
          <span className="text-main-accent">new one</span>
        </p>
      </div> */}
      {isSidebarOpen && <ConversationSidebar />}
    </>
  );
};

function ConversationSidebar() {
  const sidebarType: SidebarTypes = useContactInformationStore((state) => state.sidebar.type);
  switch (sidebarType) {
    case "CONTACT":
      return <ContactSidebar />;
    case "SHARED":
      return <MediaSidebar />;
    case "STARRED":
      return <StarredMessagesSidebar />;
    default:
      return null;
  }
}
export default Home;
