import userIcon from "@/assets/userIcon.svg";

interface InfoCardProps {
    type?: "primary" | "secondary";
    imgUrl?: string;
    label: string;
    desc: string;
}

export const InfoCard = ({ type = "primary", imgUrl = userIcon, label, desc }: InfoCardProps) => {
    return (
        <div className="flex flex-col items-center shadow-md p-2 w-[98px] h-[105px] rounded-xl cursor-pointer">
            <img src={imgUrl} className="w-[44px] h-[44px] rounded-full object-contain"></img>
            <span className="text-base">{label}</span>
            {type === "primary" ? (
                <span className="text-xs text-gray">{desc} 사용자</span>
            ) : (
                <span className="text-xs text-gray">{desc} kg</span>
            )}
        </div>
    );
};
