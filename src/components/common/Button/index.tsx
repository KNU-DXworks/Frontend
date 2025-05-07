import clsx from "clsx";

interface ButtonProps {
    type?: "primary" | "secondary" | "login";
    size?: "l" | "m" | "s";
    label: string;
    onClick?: () => void;
}

const typeStyles = {
    primary: "bg-point text-white",
    secondary: "bg-white",
    login: "bg-yellow",
};

const sizeStyles = {
    l: "w-full h-[50px] font-semibold",
    m: "w-2/3 h-[40px] text-sm",
    s: "w-2/5 h-[40px] text-sm",
};

export const Button = ({ type = "primary", size = "l", label }: ButtonProps) => {
    const className = clsx("shadow-md rounded-xl", typeStyles[type], sizeStyles[size]);

    return <button className={className}>{label}</button>;
};
