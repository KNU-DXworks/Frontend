import rightArrow from "@/assets/rightArrow.svg";
import { Badge } from "@/components/common/Badge";

interface SectionHeaderProps {
    label: string;
    type?: "primary" | "secondary";
    goal?: string;
    onClick?: () => void;
}

export const SectionHeader = ({ label, type = "primary", goal = "", onClick }: SectionHeaderProps) => {
    return (
        <div className="flex items-center w-full justify-between">
            <div className="flex flex-row gap-2">
                <span className="text-darkGray font-bold">{label}</span>
                {type === "secondary" && <Badge type="primary" label={goal}></Badge>}
            </div>
            <img src={rightArrow} className="cursor-pointer" onClick={onClick}></img>
        </div>
    );
};
