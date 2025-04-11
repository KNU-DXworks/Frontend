import clsx from "clsx";
import { forwardRef } from "react";

interface InputProps {
    placeholder?: string;
    size?: "m" | "s";
    label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, size = "m", label }, ref) => {
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor="input-field" className="font-bold">
                {label}
            </label>
            <input
                id="input-field"
                ref={ref}
                placeholder={placeholder}
                className={clsx(
                    "rounded-xl border border-lightGray h-[55px] p-4 placeholder:text-sm placeholder:text-lightGray outline-none focus:outline-none",
                    size === "m" ? "w-full" : "w-2/5",
                )}
            />
        </div>
    );
});
