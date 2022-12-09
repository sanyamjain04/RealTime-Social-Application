import { useState } from "react";
import { Nav_Buttons, Nav_Setting } from "../../data";
import Divider from "../ui/Divider";

export default function SideLinks() {
  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <>
      <div className="w-max flex flex-col items-center gap-3">
        {Nav_Buttons.map((el, i) => (
          <div
            key={i}
            className={`p-2 rounded-md dark:text-white ${
              el.index === selectedTab && "bg-main-accent"
            }`}
            onClick={() => setSelectedTab(i)}
          >
            <div
              className={`w-max h-max ${
                el.index === selectedTab && "text-white"
              }`}
            >
              {el.icon}
            </div>
          </div>
        ))}
      </div>

      <Divider className="!w-8" />
      {Nav_Setting.map((el, i) => (
        <div
          key={i}
          className={`p-2 rounded-md dark:text-white ${
            el.index === selectedTab && "bg-main-accent"
          }`}
          onClick={() => setSelectedTab(el.index)}
        >
          <div
            className={`w-max h-max ${
              el.index === selectedTab && "text-white"
            }`}
          >
            {el.icon}
          </div>
        </div>
      ))}
    </>
  );
}
