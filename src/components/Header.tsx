import cn from "@meltdownjs/cn";
import type { HTMLAttributes } from "react";

type TypeHeaderProps = {
    text: string;
} & HTMLAttributes<HTMLHeadingElement>;

export default function Header({ text, className, ...rest }: TypeHeaderProps) {
    return <h1 className={cn('text-5xl font-extrabold', className)} {...rest}>{text}</h1>
}