import { forwardRef, ReactNode } from "react";

interface TextAreaProps {
    placeholder?: string;
    children?: ReactNode;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ placeholder, children }, ref) => {
    return (
        <textarea
            ref={ref}
            placeholder={placeholder}
            className="rounded-xl border border-lightGray w-full h-[120px] p-4 outline-none overflow-y-scroll resize-none scrollbar-hide"
        >
            {children}
        </textarea>
    );
});
