import clsx from "clsx";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div className={clsx(className,"h-[1px] bg-slate-600")} />
  );
};

export default Divider;
