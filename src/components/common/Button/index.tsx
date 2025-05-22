import clsx from "clsx";

interface ButtonProps {
    type?: "primary" | "secondary" | "login" | "gray";
    size?: "l" | "m" | "s" | "xs";
    label: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const typeStyles = {
    primary: "bg-point text-white",
    secondary: "bg-white",
    login: "bg-yellow",
    gray: "bg-chat",
};

const sizeStyles = {
    l: "w-full h-[50px]",
    m: "w-2/3 h-[40px] text-sm",
    s: "w-2/5 h-[40px] text-sm",
    xs: "text-sm w-[100px] p-1.5",
};

export const Button = ({ type = "primary", size = "l", label, onClick, children }: ButtonProps) => {
    const className = clsx(
        "shadow-md rounded-xl flex items-center justify-center gap-4",
        typeStyles[type],
        sizeStyles[size],
    );

    return (
        <button onClick={onClick} className={className}>
            {children}
            <span>{label}</span>
        </button>
    );
};
