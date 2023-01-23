import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  label: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, defaultValue, helperText, className, ...prop } = props;
  return (
    <>
      <label
        htmlFor={id}
        className="relative my-1 w-full overflow-hidden rounded-md border border-slate-400 px-3 pt-3 focus-within:border-main-accent focus-within:ring-1 focus-within:ring-main-accent hover:border-main-accent"
      >
        <input
          className={clsx(
            'peer h-8 w-full border-none bg-transparent p-0 text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0',
            className
          )}
          autoComplete="off"
          {...prop}
          id={id}
          ref={ref}
          defaultValue={defaultValue}
        />

        <span className="absolute left-3 top-2 -translate-y-1/2 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          {label}
        </span>
      </label>
    </>
  );
});

export default Input;
