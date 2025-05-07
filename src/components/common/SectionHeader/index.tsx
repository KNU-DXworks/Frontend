import rightArrow from "@/assets/rightArrow.svg";

interface SectionHeaderProps {
    label: string;
}

export const SectionHeader = ({ label }: SectionHeaderProps) => {
    return (
        <div className="flex items-center w-full justify-between">
            <span className="text-darkGray font-bold">{label}</span>
            <img src={rightArrow} className="cursor-pointer"></img>
        </div>
    );
};
