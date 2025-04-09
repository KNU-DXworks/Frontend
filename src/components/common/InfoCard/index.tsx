interface InfoCardProps {
    imgUrl: string;
    label: string;
    desc: string;
}

export const InfoCard = ({ imgUrl, label, desc }: InfoCardProps) => {
    return (
        <div className="flex flex-col items-center shadow-md p-2 w-[98px] h-[105px] rounded-xl">
            <img src={imgUrl} className="w-[44px] h-[44px] rounded-full object-contain"></img>
            <span className="text-base">{label}</span>
            <span className="text-xs text-gray">{desc}</span>
        </div>
    );
};
