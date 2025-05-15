import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { Post } from "@/components/common/Post";
import { Profile } from "@/components/profile/Profile";
// import post1 from "@/assets/post/post1.svg";
import { useState } from "react";
import { History } from "@/components/profile/History";
import { Box } from "@/components/common/Box";
import { InbodyInfo } from "@/components/profile/InbodyInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useInterestUser } from "@/hooks/profile/useInterestUser";
import { useViewUserProfile } from "@/hooks/profile/useViewUserProfile";
import { bodyTypeOptions } from "@/app/constants/bodyTypeOptions";

export const UserPage = () => {
    const [isPost, setIsPost] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    const { id } = useParams<{ id: string }>();
    const userId = parseInt(id ?? "");

    const { registerInterest, deleteInterest } = useInterestUser();
    const { data, isLoading, isError } = useViewUserProfile(userId);

    const navigate = useNavigate();

    const handlePostClick = () => {
        setIsPost(true);
    };

    const handleInbodyClick = () => {
        setIsPost(false);
    };

    const handleLikeClick = () => {
        if (isLiked) {
            deleteInterest(userId, {
                onSuccess: () => setIsLiked(false),
            });
        } else {
            registerInterest(userId, {
                onSuccess: () => setIsLiked(true),
            });
        }
    };

    const handleChatClick = (id: number) => {
        navigate(`/chat/${id}`);
    };

    const getCommunityTypeKorean = (key: string): string => {
        const found = bodyTypeOptions.find((item) => item.key === key);
        return found ? found.value : key;
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>사용자 정보를 불러올 수 없습니다.</div>;

    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            {/* <Profile
                userName="user1"
                label="근육형"
                info="저는 평생 20년 동안 멸치였다가 단 2년 만에 몸짱이 되었습니다. 저같은 체질의 사람에게 도움을 주고 싶습니다!"
                type="other"
                isLiked={isLiked}
                onLikeClick={handleLikeClick}
                onChatClick={() => handleChatClick(1)}
            ></Profile> */}

            <Profile
                userName={data.userName}
                label={getCommunityTypeKorean(data.communityId)}
                info={data.introduce}
                type="other"
                isLiked={data.isLiked}
                onLikeClick={handleLikeClick}
                onChatClick={() => handleChatClick(userId)}
            />

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
                    {/* <Post
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
                    ></Post> */}

                    {data.posts.map((post) => (
                        <Post
                            key={post.postId}
                            name={post.userName}
                            time={post.date ?? ""}
                            label={getCommunityTypeKorean(post.communityType)}
                            text={post.content}
                            postImgUrl={post.fileUrl}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <text className="font-bold text-darkGray">체형 변화</text>
                        <div>
                            {/* <History date="2025년 3월 9일 17:37" prev="마른형" cur="근육형"></History>
                            <History date="2025년 3월 9일 17:37" prev="마른형" cur="근육형"></History> */}
                            {data.history.map((item, idx) => (
                                <History key={idx} date={item.date} prev={item.type} cur={item.type} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <text className="font-bold text-darkGray">인바디 수치</text>
                        <Box className="flex-col">
                            {/* <InbodyInfo type="체지방량" label="standard" value="23%"></InbodyInfo>
                            <InbodyInfo type="체지방량" label="danger" value="23%"></InbodyInfo>
                            <InbodyInfo type="체지방량" label="standard" value="23%"></InbodyInfo> */}
                            <InbodyInfo type="체중" label="standard" value={`${data.inbody.weight}kg`} />
                            <InbodyInfo type="골격근량" label="standard" value={`${data.inbody.muscleMass}kg`} />
                            <InbodyInfo type="체지방률" label="standard" value={`${data.inbody.fatRatio}%`} />
                            <InbodyInfo type="근육량 유형" label="standard" value={data.inbody.muscleMassType} />
                            <InbodyInfo type="체지방 유형" label="standard" value={data.inbody.fatMassType} />
                            <InbodyInfo type="사용자 케이스" label="standard" value={data.inbody.userCase} />
                            <InbodyInfo type="팔 근육 수준" label="standard" value={data.inbody.armMuscleType} />
                            <InbodyInfo type="몸통 근육 수준" label="standard" value={data.inbody.trunkMuscleType} />
                            <InbodyInfo type="다리 근육 수준" label="standard" value={data.inbody.legMuscleType} />
                        </Box>
                    </div>
                </div>
            )}
        </div>
    );
};
