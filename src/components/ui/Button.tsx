import clsx from "clsx";
import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
} from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...prop } = props;
  return (
    <button
      className={clsx(
        "flex gap-2 bg-transparent hover:bg-main-accent/50 border-main-accent p-2 items-center border-2 rounded-lg justify-center",
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
