import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import {
  AlignLeft,
  AlignRight,
  ArrowClockwise,
  CornersOut,
  Sliders,
  X,
} from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import { useTheme } from 'src/hooks/theme-context';
import { useModal } from 'src/hooks/useModal';
import { useThemeDirection } from 'src/zustand/themeDirection';

const ThemeSettings = () => {
  const { open, openModal, closeModal } = useModal();
  const [fullscreen, setFullscreen] = useState(false);
  const changeThemeDirection = useThemeDirection(
    (state) => state.changeDirection
  );
  const reverseDirection = useThemeDirection((state) => state.reverseDirection);

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
      <div
        className={clsx(
          reverseDirection && 'right-0',
          'absolute top-1/2 z-10 ml-1 cursor-pointer rounded-full p-1'
        )}
      >
        {!open && (
          <div
            className="flex items-center justify-center rounded-full p-1 shadow-[0px_5px_15px_0px_rgba(0,0,0,0)] shadow-slate-300 dark:shadow-slate-900"
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
            className="absolute z-20 h-screen w-screen"
            onClick={closeModal}
          ></div>
          <div className="absolute z-30 my-[10vh] ml-3 shadow-2xl">
            <div className="scrollbarThin h-[80vh] w-64 overflow-y-scroll rounded-lg border border-slate-400 bg-white dark:bg-dark dark:text-slate-100">
              <div className="flex items-center justify-between border-b border-slate-500 p-5">
                <div className="flex items-center gap-2">
                  <X size={20} className="cursor-pointer" onClick={close} />
                  <ArrowClockwise className="cursor-pointer" size={20} />
                </div>
                <h1 className="text-lg">Settings</h1>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <h1 className="text-right">Direction</h1>
                <div className="flex items-center gap-2">
                  <AlignLeft
                    className={clsx(
                      !reverseDirection ? 'dark:text-white ' : 'text-slate-500',
                      'm-2 h-14 flex-grow cursor-pointer rounded-lg border border-slate-600 p-1'
                    )}
                    size={30}
                    onClick={() => changeThemeDirection(false)}
                  />
                  <AlignRight
                    className={clsx(
                      reverseDirection ? 'dark:text-white ' : 'text-slate-500',
                      'm-2 h-14 flex-grow cursor-pointer rounded-lg border  border-slate-600 p-1'
                    )}
                    size={30}
                    onClick={() => changeThemeDirection(true)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 px-5">
                <h1 className="text-right">Presets</h1>
                <div className="grid grid-cols-3 gap-2">
                  <AccentButton />
                </div>
              </div>
              <button
                className={clsx(
                  'm-4 mx-auto flex items-center gap-2 rounded-lg border border-slate-500 p-2 px-10 hover:bg-slate-500/20',
                  fullscreen && 'bg-[var(--main-primary)]'
                )}
                onClick={toggleFullScreen}
              >
                {' '}
                {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'} <CornersOut />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const AccentButton = () => {
  const { changeAccent, accent } = useTheme();
  return (
    <>
      {['blue', 'purple', 'pink', 'green', 'orange', 'red'].map((col) => (
        <label
          htmlFor={col}
          key={col}
          className={clsx(
            'm-2 flex h-12 cursor-pointer items-center justify-center rounded-lg border p-1 text-slate-500 shadow-inner hover:shadow-[inset_0px_8px_8px_0px_rgba(0,0,0,0.24)]',
            col === accent && `border-${col}-600`
          )}
        >
          <input
            type="radio"
            name="accent"
            id={col}
            className="sr-only"
            checked={col === accent}
            value={col}
            onChange={changeAccent}
          />
          <div
            className={clsx(
              `h-[14px] w-[24px] rounded-[50%] bg-${col}-500 transition-all duration-200 ease-in-out`,
              col === accent ? 'rotate-0 shadow-main-accent ' : 'rotate-45'
            )}
          />
        </label>
      ))}
    </>
  );
};

export default ThemeSettings;
