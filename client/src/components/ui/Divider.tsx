import clsx from 'clsx';

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div>
      <div className={clsx(className, 'h-[1px] rounded-full bg-slate-600')} />
    </div>
  );
};

export default Divider;
