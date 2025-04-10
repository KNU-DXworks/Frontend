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
}

export const Post = ({ userImgUrl = userIcon, name, time, label, text, postImgUrl }: PostProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_CHARS = 50;
    const isLong = text.length > MAX_CHARS;

    return (
        <div className="flex flex-col p-4 rounded-xl shadow-md gap-3">
            {/* 헤더 */}
            <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                    <img src={userImgUrl} className="w-[44px] h-[44px]"></img>
                    {/* 시간과 사용자  */}
                    <div className="flex flex-col gap-0">
                        {/* 사용자이름과 badge */}
                        <div className="flex items-center gap-3">
                            <span>{name}</span>
                            <Badge type="primary" label={label}></Badge>
                        </div>
                        <span className="text-gray text-xs">{time}</span>
                    </div>
                </div>
                <SideMenu></SideMenu>
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
