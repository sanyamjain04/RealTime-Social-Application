import { useState } from "react";
import { Nav_Buttons, Nav_Setting } from "../../data";

export default function SideLinks() {
  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <>
      <div className="w-max flex flex-col items-center gap-3">
        {Nav_Buttons.map((el, i) => (
          <div
            key={i}
            className={`p-2 rounded-md dark:text-white ${
              el.index === selectedTab && "bg-[#0162C4]"
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

      <span className="w-8 h-[1px] bg-slate-600" />
      {Nav_Setting.map((el, i) => (
        <div
          key={i}
          className={`p-2 rounded-md dark:text-white ${
            el.index === selectedTab && "bg-[#0162C4]"
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
