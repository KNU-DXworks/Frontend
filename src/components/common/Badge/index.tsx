interface BadgeProps {
    type: "primary" | "secondary";
    label: string;
}

const badgeStyles = {
    primary: {
        wrapper: "bg-lightGreen",
        text: "text-point",
    },
    secondary: {
        wrapper: "bg-lightRed",
        text: "text-red",
    },
};

export const Badge = ({ type, label }: BadgeProps) => {
    const { wrapper, text } = badgeStyles[type];

    return (
        <div className={`inline-flex items-center justify-center py-1.5 px-2 rounded-md ${wrapper}`}>
            <span className={`text-xs ${text}`}>{label}</span>
        </div>
    );
};
