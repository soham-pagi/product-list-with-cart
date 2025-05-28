import cn from "@meltdownjs/cn";
import type { HTMLAttributes, ReactNode } from "react";

type TypeButtonProps = {
  clasName?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  ...rest
}: TypeButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "bg-orange-700 font-semibold text-white/90 w-full py-5 rounded-full hover:brightness-90",
        className
      )}
    >
      {children}
    </button>
  );
}
