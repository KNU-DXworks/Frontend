import { forwardRef, ReactNode } from "react";
import clsx from "clsx";
interface TextAreaProps {
    type?: "primary" | "secondary";
    placeholder?: string;
    children?: ReactNode;
    className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ type = "primary", placeholder, children, className }, ref) => {
        return (
            <textarea
                ref={ref}
                placeholder={placeholder}
                className={clsx(
                    "rounded-xl w-full p-4 outline-none overflow-y-scroll resize-none scrollbar-hide",
                    type === "primary" ? "border border-lightGray h-[120px]" : "border-none h-[70px]",
                    className,
                )}
            >
                {children}
            </textarea>
        );
    },
);
