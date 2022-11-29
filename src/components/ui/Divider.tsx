import clsx from "clsx";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div>
      <div className={clsx(className,"h-[1px] bg-slate-600 rounded-full")} />
    </div>
  );
};

export default Divider;
