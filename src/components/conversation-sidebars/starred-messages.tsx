import { CaretLeft } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import { useContactInformationStore } from "@zustand/contackStore";
import Message from "../conversation/message";

type Tabs = "Media" | "Links" | "Docs";
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
          <h1>Starred Messages</h1>
        </div>
      </div>

      {/* Body */}
      <div className="group flex flex-col flex-grow p-2 overflow-hidden ">
        <div className="flex flex-col flex-grow gap-2 overflow-y-scroll scrollbarThin m-2">
          <Message menu={false} />
        </div>
      </div>
    </div>
  );
};


export default StarredMessagesSidebar;
