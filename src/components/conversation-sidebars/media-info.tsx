import clsx from 'clsx';
import Image from 'next/legacy/image';
import { CaretLeft } from 'phosphor-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { Shared_docs, Shared_links } from '@data/index';
import { useContactInformationStore } from '@zustand/contackStore';
import { DocMessage, LinkMessage } from '../conversation/message-type';

type Tabs = 'Media' | 'Links' | 'Docs';
interface TabsProps {
  tab: Tabs;
  selectedTab: Tabs;
  setSelectedTab: Dispatch<SetStateAction<Tabs>>;
}

const MediaSidebar = () => {
  const changeSidebar = useContactInformationStore(
    (state) => state.updateSidebarType
  );
  const [selectedTab, setSelectedTab] = useState<Tabs>('Media');

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
          <h1>Shared Messages</h1>
        </div>
      </div>

      {/* Body */}
      <div className="group flex flex-grow flex-col overflow-hidden p-2 ">
        <div className="scrollbarThin m-2 flex flex-grow flex-col gap-2 overflow-y-scroll">
          <div className="sticky top-0 z-10 flex justify-around bg-slate-200 py-2 dark:bg-dark ">
            {['Media', 'Links', 'Docs'].map((tab, idx) => (
              <Tabs
                key={idx}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tab={tab as Tabs}
              />
            ))}
          </div>

          {(() => {
            switch (selectedTab) {
              case 'Media':
                return <Media />;
              case 'Links':
                return Shared_links.map((el, idx) => (
                  <LinkMessage key={idx} {...el} />
                ));
              case 'Docs':
                return Shared_docs.map((el, idx) => (
                  <DocMessage key={idx} {...el} />
                ));
              default:
                break;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ tab, selectedTab, setSelectedTab }: TabsProps): JSX.Element => (
  <button
    className={clsx(
      selectedTab === tab && 'border-b-2 border-main-accent text-main-accent'
    )}
    onClick={() => setSelectedTab(tab satisfies Tabs)}
  >
    {tab}
  </button>
);

const Media = (): JSX.Element => (
  <div className="m-3 grid grid-cols-3 gap-2">
    {[1, 2, 3, 4, 5, 6, 7].map((el, i) => (
      <div key={i} className="relative h-16 w-16">
        <Image
          src="https://avatars.githubusercontent.com/u/10858?v=4"
          alt=""
          layout="fill"
        />
      </div>
    ))}
  </div>
);

export default MediaSidebar;
