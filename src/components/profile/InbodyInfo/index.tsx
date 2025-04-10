import point from "@/assets/point.svg";
import { Badge } from "@/components/common/Badge";

interface InbodyInfoProps {
    type: string;
    label: string;
    value: string;
}

export const InbodyInfo = ({ type, label, value }: InbodyInfoProps) => {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl">
            <div className="flex items-center gap-4 ">
                <img src={point}></img>
                <span className="text-darkGray">{type}</span>
                <Badge type="primary" label={label}></Badge>
            </div>
            <span className="font-bold">{value}</span>
        </div>
    );
};
