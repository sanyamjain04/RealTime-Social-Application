import {
  SidebarTypes,
  useConversationSidebarStore,
} from '@zustand/sidebarStore';
import dynamic from 'next/dynamic';

const ContactSidebar = dynamic(
  () => import('@components/conversation/conversation-sidebars/contact-info'),
  { ssr: false }
);
const MediaSidebar = dynamic(
  () => import('@components/conversation/conversation-sidebars/media-info'),
  { ssr: false }
);
const StarredMessagesSidebar = dynamic(
  () =>
    import('@components/conversation/conversation-sidebars/starred-messages'),
  { ssr: false }
);
function ConversationSidebar() {
  const sidebarType: SidebarTypes = useConversationSidebarStore(
    (state) => state.sidebar.type
  );
  switch (sidebarType) {
    case 'CONTACT':
      return <ContactSidebar />;
    case 'SHARED':
      return <MediaSidebar />;
    case 'STARRED':
      return <StarredMessagesSidebar />;
    default:
      return <></>;
  }
}

export default ConversationSidebar;
