import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TInputProps = React.ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, TInputProps>(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge(
        `w-full h-[44px] rounded-lg placeholder:text-[#acacac] border border-[#4F4F4F] py-[13.5px] px-[16px] text-sm outline-none`,
        className
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input"; // Optionally set a display name for the component

export default Input;
