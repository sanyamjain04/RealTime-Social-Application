import clsx from "clsx";
import Image from "next/legacy/image";
import { CaretLeft } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Shared_docs, Shared_links } from "../../data";
import { useContactInformationStore } from "../../zustand/contackStore";
import { DocMessage, LinkMessage } from "../conversation/message-type";

type Tabs = "Media" | "Links" | "Docs";
interface TabsProps {
  tab: Tabs;
  selectedTab: Tabs;
  setSelectedTab: Dispatch<SetStateAction<Tabs>>;
}

const MediaSidebar = () => {
  const changeSidebar = useContactInformationStore(
    (state) => state.updateSidebarType
  );
  const [selectedTab, setSelectedTab] = useState<Tabs>("Media");

  return (
    <div className="w-[300px] h-screen bg-slate-200 dark:bg-dark dark:text-white gap-2 flex flex-col">
      {/* Header */}
      <div
        className="p-2"
        style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => changeSidebar("CONTACT")}>
            <CaretLeft size={20} />
          </button>
          <h1>Shared Messages</h1>
        </div>
      </div>

      {/* Body */}
      <div className="group flex flex-col flex-grow p-2 overflow-hidden ">
        <div className="flex flex-col flex-grow gap-2 overflow-y-scroll scrollbarThin m-2">
          <div className="flex justify-around sticky z-10 top-0 bg-slate-200 dark:bg-dark py-2 ">
            {["Media", "Links", "Docs"].map((tab, idx) => (
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
              case "Media":
                return <Media />;
              case "Links":
                return Shared_links.map((el, idx) => (
                  <LinkMessage key={idx} {...el} />
                ));
              case "Docs":
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

const Tabs = ({ tab, selectedTab, setSelectedTab }: TabsProps):JSX.Element => (
  <button
    className={clsx(
      selectedTab === tab && "text-main-accent border-b-2 border-main-accent"
    )}
    onClick={() => setSelectedTab(tab as Tabs)}
  >
    {tab}
  </button>
);

const Media = ():JSX.Element => (
  <div className="grid grid-cols-3 gap-2 m-3">
    {[1, 2, 3, 4, 5,6,7].map((el, i) => (
      <div key={i} className="relative w-16 h-16">
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
