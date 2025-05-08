import { Badge } from "../Badge";
import userIcon from "@/assets/userIcon.svg";
import { useState } from "react";
import { SideMenu } from "../SideMenu";

interface PostProps {
    userImgUrl?: string;
    name: string;
    time: string;
    label: string;
    text: string;
    postImgUrl: string;
    onClick?: () => void;

    // onInterestPostClick?: () => void;
    // onNotInterestPostClick?: () => void;
}

export const Post = ({ userImgUrl = userIcon, name, time, label, text, postImgUrl, onClick }: PostProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_CHARS = 50;
    const isLong = text.length > MAX_CHARS;

    const onInterestPostClick = () => {
        console.log("관심 게시물 등록");
    };

    const onNotInterestPostClick = () => {
        console.log("관심 없음 게시물 등록");
    };

    return (
        <div className="flex flex-col p-4 rounded-xl shadow-md gap-3">
            {/* 헤더 */}
            <div onClick={onClick} className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                    <img src={userImgUrl} className="w-[44px] h-[44px] cursor-pointer"></img>
                    {/* 시간과 사용자  */}
                    <div className="flex flex-col gap-0 cursor-pointer">
                        {/* 사용자이름과 badge */}
                        <div className="flex items-center gap-3">
                            <span>{name}</span>
                            <Badge type="primary" label={label}></Badge>
                        </div>
                        <span className="text-gray text-xs">{time}</span>
                    </div>
                </div>
                <div>
                    <SideMenu
                        onInterestPostClick={onInterestPostClick}
                        onNotInterestPostClick={onNotInterestPostClick}
                    ></SideMenu>
                </div>
            </div>

            {/* 본문 */}
            <div className="break-words whitespace-pre-wrap text-sm">
                {!isLong && text}
                {isLong && (
                    <>
                        {isExpanded ? text : text.slice(0, MAX_CHARS) + "... "}
                        {!isExpanded && (
                            <button className="text-gray text-sm" onClick={() => setIsExpanded(true)}>
                                더보기
                            </button>
                        )}
                    </>
                )}
            </div>
            <img src={postImgUrl} className="w-full"></img>
        </div>
    );
};
