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
    isLiked?: boolean;
    onLikeClick?: () => void;
    onChatClick?: () => void;
}

export const Profile = ({ userName, label, info, type = "other", isLiked, onLikeClick, onChatClick }: ProfileProps) => {
    const navigate = useNavigate();

    const handleInbodyRegisterClick = () => {
        navigate("/inbody/register");
    };

    const handleInfoModifyClick = () => {
        console.log("수정 완료");
        alert("수정 성공");
    };

    return (
        <div className="flex flex-col items-center relative min-h-[320px]">
            <img src={userIcon} className="w-[80px] h-[80px]"></img>
            <Box className="items-center flex-col gap-2 absolute top-10 pt-10">
                <div className="flex items-center gap-3">
                    <span className="text-point text-2xl font-bold">@{userName}</span>
                    {type === "other" &&
                        (isLiked === false ? (
                            <FaRegHeart className="w-[23px] h-[23px] text-gray cursor-pointer" onClick={onLikeClick} />
                        ) : (
                            <FaHeart className="w-[23px] h-[23px] text-red cursor-pointer" onClick={onLikeClick} />
                        ))}
                </div>
                <Badge type="primary" label={label}></Badge>
                <div className="w-full flex flex-col">
                    <span className="font-bold text-darkGray">자기 소개</span>
                    <TextArea
                        type="secondary"
                        placeholder="자기소개 글을 등록하세요."
                        className="text-darkGray"
                        readOnly={type === "other"}
                    >
                        {info}
                    </TextArea>
                </div>
                {type === "other" ? (
                    <Button size="m" type="primary" label="채팅하러하기" onClick={onChatClick}></Button>
                ) : (
                    <div className="w-full flex gap-3 justify-center">
                        <Button size="s" type="primary" label="정보 수정하기" onClick={handleInfoModifyClick}></Button>
                        <Button
                            size="s"
                            type="primary"
                            label="인바디 등록하기"
                            onClick={handleInbodyRegisterClick}
                        ></Button>
                    </div>
                )}
            </Box>
        </div>
    );
};
