import clsx from "clsx";

interface ChipProps {
    label: string;
    isSelected?: boolean;
    onClick?: () => void;
}

export const Chip = ({ label, isSelected, onClick }: ChipProps) => {
    return (
        <button
            className={clsx(
                "flex items-center justify-center border rounded-xl bg-transparent w-fit py-2.5 px-3.5 text-sm",
                isSelected ? "border-point text-point" : "border-gray text-gray",
            )}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
