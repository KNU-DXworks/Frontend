import clsx from "clsx";
import { ReactNode } from "react";

interface BoxProps {
    className?: string;
    children?: ReactNode;
}

export const Box = ({ className, children }: BoxProps) => {
    return <div className={clsx("rounded-xl shadow-md p-4 w-full flex flex-col", className)}>{children}</div>;
};
