import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useConversationSidebarStore } from '@zustand/sidebarStore';
import ConversationHeader from './Conversation-header';
import ConversationMessages from './conversation-messages';
import ConversationSidebar from './conversation-sidebars';

const ConversationInput = dynamic(() => import('./conversation-input'), {
  ssr: false,
});

const Conversation = () => {
  const isSidebarOpen: boolean = useConversationSidebarStore(
    (state) => state.sidebar.open
  );

  return (
    <>
      <ConversationMessage />
      {/* <div className="h-screen w-[calc(100vw-400px)] flex flex-col items-center justify-center border-b-[6px] border-main-accent">
        <NoChat />
        <p>
        Select a conversation or start a{" "}
        <span className="text-main-accent">new one</span>
        </p>
      </div> */}
      {isSidebarOpen ? <ConversationSidebar /> : null}
    </>
  );
};

const ConversationMessage = () => {
  const isSidebarOpen: boolean = useConversationSidebarStore(
    (state) => state.sidebar.open
  );
  console.log('Conversation mounted');

  return (
    <div
      className={clsx(
        'flex h-screen flex-col dark:bg-dark',
        isSidebarOpen
          ? 'w-[calc(100vw-100px-300px-300px)]'
          : 'w-[calc(100vw-100px-300px)]'
      )}
    >
      <ConversationHeader />
      <ConversationMessages />
      <ConversationInput />
    </div>
  );
};

export default Conversation;
