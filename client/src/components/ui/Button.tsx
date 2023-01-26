import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...prop } = props;
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded-lg border-2 border-main-accent bg-transparent p-2 hover:bg-main-accent/50',
        className
      )}
      {...prop}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
