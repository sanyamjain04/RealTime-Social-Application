import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Chat from "../components/chat/chat";
import {
  SidebarTypes,
  useContactInformationStore,
} from "../zustand/contackStore";

const Conversation = dynamic(()=>import('../components/conversation'), {ssr:false})
const ContactSidebar = dynamic(()=>import('../components/conversation-sidebars/contact-info'))
const MediaSidebar = dynamic(()=>import('../components/conversation-sidebars/media-info'))
const StarredMessagesSidebar = dynamic(()=>import('../components/conversation-sidebars/starred-messages'))

const Home: NextPage = () => {
  const isSidebarOpen: boolean = useContactInformationStore((state) => state.sidebar.open);
  const sidebarType: SidebarTypes = useContactInformationStore((state) => state.sidebar.type);

  function ConversationSidebar() {
    switch (sidebarType) {
      case "CONTACT":
        return <ContactSidebar />;
      case "SHARED":
        return <MediaSidebar />;
      case "STARRED":
        return <StarredMessagesSidebar />;
      default:
        return;
    }
  }
  return (
    <>
      <Head>
        <title>ChatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chat />
      <Conversation />
      {isSidebarOpen && ConversationSidebar()}
    </>
  );
};

export default Home;
