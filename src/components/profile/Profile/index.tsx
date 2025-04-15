import { Badge } from "@/components/common/Badge";
import { Box } from "@/components/common/Box";
import { TextArea } from "@/components/common/TextArea";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import userIcon from "@/assets/userIcon.svg";
import { Button } from "@/components/common/Button";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
    userName: string;
    label: string;
    info?: string;
    type?: "my" | "other";
    isChecked?: boolean;
}

export const Profile = ({ userName, label, info, type = "other", isChecked }: ProfileProps) => {
    const navigate = useNavigate();

    const handleClickInbody = () => {
        navigate("/register/inbody");
    };

    return (
        <div className="flex flex-col items-center relative">
            <img src={userIcon} className="w-[80px] h-[80px]"></img>
            <Box className="items-center gap-2 absolute top-10 pt-10">
                <div className="flex items-center gap-3">
                    <span className="text-point text-2xl font-bold">@{userName}</span>
                    {type === "other" &&
                        (isChecked === false ? (
                            <FaRegHeart className="w-[23px] h-[23px] text-gray" />
                        ) : (
                            <FaHeart className="w-[23px] h-[23px] text-red" />
                        ))}
                </div>
                <Badge type="primary" label={label}></Badge>
                <div className="w-full flex flex-col">
                    <span className="font-bold text-darkGray">자기 소개</span>
                    <TextArea type="secondary" placeholder="자기소개 글을 등록하세요." className="text-darkGray">
                        {info}
                    </TextArea>
                </div>
                {type === "other" ? (
                    <Button size="m" type="primary" label="채팅하러하기"></Button>
                ) : (
                    <div className="w-full flex gap-3 justify-center">
                        <Button size="s" type="primary" label="정보 수정하기"></Button>
                        <Button size="s" type="primary" label="인바디 등록하기" onClick={handleClickInbody}></Button>
                    </div>
                )}
            </Box>
        </div>
    );
};
