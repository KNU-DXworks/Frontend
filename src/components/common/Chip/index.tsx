import clsx from "clsx";
import { useState } from "react";

interface ChipProps {
    label: string;
}

export const Chip = ({ label }: ChipProps) => {
    const [isClicked, SetIsClicked] = useState(false);

    const handleClick = () => {
        SetIsClicked((prev) => !prev);
    };

    return (
        <button
            className={clsx(
                "flex items-center justify-center border rounded-xl bg-transparent w-fit py-2 px-3 text-sm",
                isClicked ? "border-point text-point" : "border-gray text-gray",
            )}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};
