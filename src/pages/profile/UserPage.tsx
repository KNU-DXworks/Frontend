import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { Post } from "@/components/common/Post";
import { Profile } from "@/components/profile/Profile";
import post1 from "@/assets/post/post1.svg";
import { useState } from "react";
import { History } from "@/components/profile/History";
import { Box } from "@/components/common/Box";
import { InbodyInfo } from "@/components/profile/InbodyInfo";

export const UserPage = () => {
    const [isPost, setIsPost] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    const handlePostClick = () => {
        setIsPost(true);
    };

    const handleInbodyClick = () => {
        setIsPost(false);
    };

    const handleLikeClick = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Profile
                userName="kangjae"
                label="근육형"
                info="저는 평생 20년 동안 멸치였다가 단 2년 만에 몸짱이 되었습니다. 저같은 체질의 사람에게 도움을 주고 싶습니다!"
                type="other"
                isLiked={isLiked}
                onLikeClick={handleLikeClick}
            ></Profile>

            <div className="flex flex-row gap-4">
                <Button
                    onClick={handlePostClick}
                    type={isPost ? "primary" : "secondary"}
                    size="m"
                    label="게시물 보기"
                ></Button>
                <Button
                    onClick={handleInbodyClick}
                    type={isPost === false ? "primary" : "secondary"}
                    size="m"
                    label="인바디 추이 보기"
                ></Button>
            </div>

            {isPost ? (
                <div className="flex flex-col gap-2">
                    <Post
                        name="조민주"
                        time="3시간 전"
                        label="근육형"
                        text="일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약"
                        postImgUrl={post1}
                    ></Post>
                    <Post
                        name="조민주"
                        time="3시간 전"
                        label="근육형"
                        text="일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약"
                        postImgUrl={post1}
                    ></Post>
                    <Post
                        name="조민주"
                        time="3시간 전"
                        label="근육형"
                        text="일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약"
                        postImgUrl={post1}
                    ></Post>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <text className="font-bold text-darkGray">체형 변화</text>
                        <div>
                            <History date="2025년 3월 9일 17:37" prev="마른형" cur="근육형"></History>
                            <History date="2025년 3월 9일 17:37" prev="마른형" cur="근육형"></History>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <text className="font-bold text-darkGray">인바디 수치</text>
                        <Box className="flex-col">
                            <InbodyInfo type="체지방량" label="standard" value="23%"></InbodyInfo>
                            <InbodyInfo type="체지방량" label="danger" value="23%"></InbodyInfo>
                            <InbodyInfo type="체지방량" label="standard" value="23%"></InbodyInfo>
                        </Box>
                    </div>
                </div>
            )}
        </div>
    );
};
