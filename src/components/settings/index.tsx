import { Tooltip } from "@mui/material";
import clsx from "clsx";
import {
  AlignLeft,
  AlignRight,
  ArrowClockwise,
  CornersOut,
  Repeat,
  Sliders,
  X,
} from "phosphor-react";
import { MouseEvent, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useThemeDirection } from "../../zustand/themeDirection";

const Settings = () => {
  const { open, openModal, closeModal } = useModal();
  const [fullscreen, setFullscreen] = useState(false);
  const changeThemeDirection = useThemeDirection(state=>state.changeDirection)
  const reverseDirection = useThemeDirection(state=>state.reverseDirection)

  function close(e: MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
    closeModal();
  }
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };
  return (
    <>
      <div className={clsx(reverseDirection && "right-0" ,"absolute top-1/2 rounded-full cursor-pointer p-1 ml-1 z-10")}>
        {!open && (
          <div
            className="flex items-center justify-center p-1 rounded-full shadow-[0px_5px_15px_0px_rgba(0,0,0,0)] dark:shadow-slate-900 shadow-slate-300"
            onClick={openModal}
          >
            <Tooltip title="Settings" placement="right">
              <Sliders className="rotate-90" size={20} />
            </Tooltip>
          </div>
        )}
      </div>
      {open && (
        <>
          <div
            className="absolute h-screen w-screen z-20"
            onClick={closeModal}
          ></div>
          <div className="absolute z-30 my-[10vh] ml-3 shadow-2xl">
            <div className="w-64 h-[80vh] rounded-lg dark:bg-dark bg-white border border-slate-400 dark:text-slate-100">
              <div className="p-5 flex justify-between items-center border-b border-slate-500">
                <div className="flex items-center gap-2">
                  <X size={20} className="cursor-pointer" onClick={close} />
                  <ArrowClockwise className="cursor-pointer" size={20} />
                </div>
                <h1 className="text-lg">Settings</h1>
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h1 className="text-right">Direction</h1>
                <div className="flex items-center gap-2">
                  <AlignLeft
                    className={clsx(!reverseDirection ?'dark:text-white ':"text-slate-500","m-2 border flex-grow p-1 h-14 border-slate-600 cursor-pointer rounded-lg")}
                    size={30}
                    onClick={()=>changeThemeDirection(false)}
                  />
                  <AlignRight
                    className={clsx(reverseDirection ?'dark:text-white ':"text-slate-500","m-2 border p-1 h-14 border-slate-600 cursor-pointer  rounded-lg flex-grow")}
                    size={30}
                    onClick={()=>changeThemeDirection(true)}
                  />
                </div>
              </div>
              <div className="px-5 flex flex-col gap-2">
                <h1 className="text-right">Presets</h1>
                <div className="grid grid-cols-3 gap-2">
                  {["blue", "violet", "teal", "green", "orange", "red"].map(
                    (col) => (
                      <div
                        className={`m-2 border flex items-center justify-center p-1 h-12 border-${col}-600 cursor-pointer rounded-lg text-slate-500 shadow-inner hover:shadow-[inset_0px_8px_8px_0px_rgba(0,0,0,0.24)]`}
                      >
                        <div
                          className={`w-[24px] h-[14px] rounded-[50%] rotate-45 bg-${col}-500 `}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <button className={clsx("flex items-center gap-2 border m-4 p-2 rounded-lg border-slate-500 hover:bg-slate-500/20 px-10 mx-auto",fullscreen && 'bg-[var(--main-primary)]')} onClick={toggleFullScreen} > {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'} <CornersOut /></button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Settings;

// 0 0px 10px 2px #ffffff40;
