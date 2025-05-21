import userIcon from "@/assets/userIcon.svg";

interface InfoCardProps {
    type?: "primary" | "secondary";
    imgUrl?: string;
    label: string;
    desc?: string | number;
    onClick?: () => void;
}

export const InfoCard = ({ type = "primary", imgUrl = userIcon, label, desc, onClick }: InfoCardProps) => {
    return (
        <div
            className="flex flex-col gap-0.5 items-center shadow-md p-2 w-[98px] rounded-xl cursor-pointer"
            onClick={onClick}
        >
            <img src={imgUrl} className="w-[44px] h-[44px] rounded-full object-contain"></img>
            <span className="text-base">{label}</span>
            {type === "primary" ? (
                <div className="flex flex-col items-center">
                    <span className="text-xs text-gray">{desc}</span>
                    <span className="text-xs text-gray">사용자</span>
                </div>
            ) : (
                <span className="text-xs text-gray">{desc}</span>
            )}
        </div>
    );
};
