import { CommunityButton } from "@/components/home/CommunityButton";
import logo_sm from "@/assets/logo_sm.svg";
import { Box } from "@/components/common/Box";
import { InfoCard } from "@/components/common/InfoCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { RecommendedUser } from "@/components/home/RecommendedUser";
// import post1 from "@/assets/post/post1.svg";
import profile from "@/assets/profile.svg";
import { Post } from "@/components/common/Post";
import { useNavigate } from "react-router-dom";
import { useViewMain } from "@/hooks/home/useViewMain";

enum BodyTypeEnum {
    SKINNY = "마른 체형",
    SKINNY_MUSCLE = "마른 근육형",
    STANDARD = "표준형",
    WEIGHT_LOSS = "감량형",
    MUSCLE = "근육형",
    WEIGHT = "체중형",
    OVERWEIGHT = "과제충형",
    OBESITY = "비만형",
    MUSCULAR_OBESITY = "근육 비만형",
}

export const HomePage = () => {
    const { data } = useViewMain();

    const navigate = useNavigate();

    const handleCommunity = (communityName: string) => {
        navigate(`/community/${communityName}`);
    };

    const handleProfile = () => {
        navigate("/profile/my");
    };

    const handleUserProfileClick = (id: number) => {
        navigate(`/profile/${id}`);
    };

    // const posts = [
    //     {
    //         id: 1,
    //         userId: 1,
    //         name: "조민주",
    //         time: "3시간 전",
    //         label: "근육형",
    //         text: "일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약",
    //         postImgUrl: post1,
    //     },
    //     {
    //         id: 2,
    //         userId: 2,
    //         name: "조민주",
    //         time: "3시간 전",
    //         label: "근육형",
    //         text: "일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약",
    //         postImgUrl: post1,
    //     },
    //     {
    //         id: 3,
    //         userId: 3,
    //         name: "조민주",
    //         time: "3시간 전",
    //         label: "근육형",
    //         text: "일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약",
    //         postImgUrl: post1,
    //     },
    // ];

    // const users = [
    //     { id: 1, name: "한재준", prev: "마른 체형", cur: "근육형" },
    //     { id: 2, name: "최현수", prev: "표준 체형", cur: "근육형" },
    //     { id: 3, name: "강재혁", prev: "감량형", cur: "근육형" },
    // ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <img src={logo_sm} className="cursor-pointer" onClick={() => navigate("/")}></img>
                <img src={profile} className="cursor-pointer" onClick={handleProfile}></img>
            </div>

            <div>
                <text className="font-bold text-darkGray">커뮤니티 목록</text>
                <div className="flex items-center gap-2">
                    <CommunityButton type="skinny" onClick={() => handleCommunity("SKINNY")} />
                    <CommunityButton type="skinnyMuscle" onClick={() => handleCommunity("SKINNY_MUSCLE")} />
                    <CommunityButton type="standard" onClick={() => handleCommunity("STANDARD")} />
                    <CommunityButton type="weightLoss" onClick={() => handleCommunity("WEIGHT_LOSS")} />
                </div>
                <div className="flex items-center w-full gap-2">
                    <CommunityButton type="muscle" onClick={() => handleCommunity("MUSCLE")} />
                    <CommunityButton type="overWeight" onClick={() => handleCommunity("OVERWEIGHT")} />
                    <CommunityButton type="obesity" onClick={() => handleCommunity("OBESITY")} />
                    <CommunityButton type="muscularObesity" onClick={() => handleCommunity("MUSCULAR_OBESITY")} />
                </div>
            </div>

            <div>
                <SectionHeader label="관심 사용자 목록"></SectionHeader>
                <Box className="flex-row gap-2">
                    {/* {users.map((user) => (
                        <InfoCard
                            key={user.id}
                            label={user.name}
                            desc={user.cur}
                            onClick={() => handleUserProfileClick(user.id)}
                        ></InfoCard>
                    ))} */}
                    {data?.interestUser.map((user) => (
                        <InfoCard
                            key={user.userId}
                            imgUrl={user.profileImg}
                            label={user.userName}
                            desc={BodyTypeEnum[user.bodyType]}
                            onClick={() => handleUserProfileClick(user.userId)}
                        ></InfoCard>
                    ))}
                </Box>
            </div>

            <div>
                <SectionHeader label="구독한 사용자"></SectionHeader>
                <Box className="flex flex-col gap-2">
                    {/* {users.map((user) => (
                        <RecommendedUser
                            key={user.id}
                            name={user.name}
                            prev={user.prev}
                            label={user.cur}
                            onClick={() => handleUserProfileClick(user.id)}
                        ></RecommendedUser>
                    ))} */}

                    {data?.subscribeUser.map((user) => (
                        <RecommendedUser
                            key={user.userId}
                            name={user.userName}
                            imgUrl={user.profileImg}
                            prev={user.prevType}
                            label={BodyTypeEnum[user.bodyType]}
                            onClick={() => handleUserProfileClick(user.userId)}
                        ></RecommendedUser>
                    ))}
                </Box>
            </div>

            <div>
                <SectionHeader label="추천 사용자"></SectionHeader>
                <Box className="flex flex-col gap-2">
                    {data?.recommandUser.map((user) => (
                        <RecommendedUser
                            key={user.userId}
                            name={user.userName}
                            imgUrl={user.profileImg}
                            prev={user.prevType}
                            label={BodyTypeEnum[user.bodyType]}
                            onClick={() => handleUserProfileClick(user.userId)}
                        ></RecommendedUser>
                    ))}
                </Box>
            </div>

            <div className="flex flex-col gap-2">
                {/* {posts.map((post) => (
                    <Post
                        key={post.id}
                        name={post.name}
                        time={post.time}
                        label={post.label}
                        text={post.text}
                        postImgUrl={post.postImgUrl}
                        onClick={() => handleUserProfileClick(post.userId)}
                    />
                ))} */}

                {data?.subscribePosts.map((post) => (
                    <Post
                        key={post.postId}
                        name={post.userName}
                        time={post.createdDate}
                        label={BodyTypeEnum[post.bodyType]}
                        text={post.content}
                        postImgUrl={post.fileUrl}
                        onClick={() => handleUserProfileClick(post.userId)}
                    />
                ))}
            </div>
        </div>
    );
};
