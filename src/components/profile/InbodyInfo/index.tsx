import point from "@/assets/point.svg";
import { Badge } from "@/components/common/Badge";

interface InbodyInfoProps {
    type: string;
    label: "standard" | "danger";
    value: string;
}

export const InbodyInfo = ({ type, label = "standard", value }: InbodyInfoProps) => {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl">
            <div className="flex items-center gap-4 ">
                <img src={point}></img>
                <span className="text-darkGray">{type}</span>
                <Badge
                    type={label === "standard" ? "primary" : "secondary"}
                    label={label === "standard" ? "표준" : "위험"}
                ></Badge>
            </div>
            <span className="font-bold">{value}</span>
        </div>
    );
};
