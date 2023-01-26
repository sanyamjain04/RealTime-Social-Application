import { CaretLeft } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import Message from '../conversation/message';
import { useContactInformationStore } from '@zustand/contackStore';

type Tabs = 'Media' | 'Links' | 'Docs';
interface TabsProps {
  tab: Tabs;
  selectedTab: Tabs;
  setSelectedTab: Dispatch<SetStateAction<Tabs>>;
}

const StarredMessagesSidebar = () => {
  const changeSidebar = useContactInformationStore(
    (state) => state.updateSidebarType
  );

  return (
    <div className="flex h-screen w-[300px] flex-col gap-2 bg-slate-200 dark:bg-dark dark:text-white">
      {/* Header */}
      <div
        className="p-2"
        style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)' }}
      >
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => changeSidebar('CONTACT')}>
            <CaretLeft size={20} />
          </button>
          <h1>Starred Messages</h1>
        </div>
      </div>

      {/* Body */}
      <div className="group flex flex-grow flex-col overflow-hidden p-2 ">
        <div className="scrollbarThin m-2 flex flex-grow flex-col gap-2 overflow-y-scroll">
          <Message menu={false} />
        </div>
      </div>
    </div>
  );
};

export default StarredMessagesSidebar;
