import { Badge } from "../Badge";
import userIcon from "@/assets/userIcon.svg";
import { useState } from "react";
import { SideMenu } from "../SideMenu";
import { formatDate } from "@/app/utils/date";

interface PostProps {
    userImgUrl?: string;
    name: string;
    time: string;
    label: string;
    text: string;
    postImgUrl: string;
    postImgType?: string;
    postType?: "SUBSCRIBE" | "NORMAL";
    onClick?: () => void;

    // onInterestPostClick?: () => void;
    // onNotInterestPostClick?: () => void;
}

export const Post = ({
    userImgUrl = userIcon,
    name,
    time,
    label,
    text,
    postImgUrl,
    postImgType,
    postType,
    onClick,
}: PostProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_CHARS = 50;
    const isLong = text.length > MAX_CHARS;

    const isImage = postImgType?.startsWith("image/");
    const isPDF = postImgType === "application/pdf";

    console.log(isImage);
    console.log(isPDF);

    // const onInterestPostClick = () => {
    //     console.log("관심 게시물 등록");
    // };

    const onNotInterestPostClick = () => {
        console.log("관심 없음 게시물 등록");
    };

    return (
        <div className="flex flex-col p-4 rounded-xl shadow-md gap-3">
            {/* 헤더 */}
            <div onClick={onClick} className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                    <img src={userImgUrl} className="w-[44px] h-[44px] cursor-pointer rounded-full"></img>
                    {/* 시간과 사용자  */}
                    <div className="flex flex-col gap-0 cursor-pointer">
                        {/* 사용자이름과 badge */}
                        <div className="flex items-center gap-3">
                            <span>{name}</span>
                            <Badge type="primary" label={label}></Badge>
                            {postType === "NORMAL" && <Badge type="all" label="전체" />}
                            {postType === "SUBSCRIBE" && <Badge type="sub" label="구독자" />}
                        </div>
                        <span className="text-gray text-xs">{formatDate(time)}</span>
                    </div>
                </div>
                <div>
                    <SideMenu
                        // onInterestPostClick={onInterestPostClick}
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
            {isImage && (
                <div className="w-full h-[170px] overflow-y-auto">
                    <img src={postImgUrl} className="w-full object-contain" alt="post image" />
                </div>
            )}
            {isPDF && <embed src={postImgUrl} type="application/pdf" className="w-full h-[170px]" />}
        </div>
    );
};
