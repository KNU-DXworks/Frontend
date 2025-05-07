import { CommunityButton } from "@/components/home/CommunityButton";
import logo_sm from "@/assets/logo_sm.svg";
import { Box } from "@/components/common/Box";
import { InfoCard } from "@/components/common/InfoCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { RecommendedUser } from "@/components/home/RecommendedUser";
import post1 from "@/assets/post/post1.svg";
import profile from "@/assets/profile.svg";
import { Post } from "@/components/common/Post";

export const HomePage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <img src={logo_sm}></img>
                <img src={profile} className="cursor-pointer"></img>
            </div>

            <div>
                <text className="font-bold text-darkGray">커뮤니티 목록</text>
                <div className="flex items-center gap-2">
                    <CommunityButton type="skinny"></CommunityButton>
                    <CommunityButton type="skinnyMuscle"></CommunityButton>
                    <CommunityButton type="standard"></CommunityButton>
                    <CommunityButton type="weightLoss"></CommunityButton>
                </div>
                <div className="flex items-center w-full gap-2">
                    <CommunityButton type="muscle"></CommunityButton>
                    <CommunityButton type="overWeight"></CommunityButton>
                    <CommunityButton type="obesity"></CommunityButton>
                    <CommunityButton type="muscularObesity"></CommunityButton>
                </div>
            </div>

            <div>
                <SectionHeader label="관심 사용자 목록"></SectionHeader>
                <Box className="flex-row gap-2">
                    <InfoCard label="조민주" desc="근육형"></InfoCard>
                    <InfoCard label="조민주" desc="근육형"></InfoCard>
                    <InfoCard label="조민주" desc="근육형"></InfoCard>
                </Box>
            </div>

            <div>
                <SectionHeader label="추천 사용자"></SectionHeader>
                <Box className="flex flex-col gap-2">
                    <RecommendedUser name="한재준" prev="마른형" label="근육형"></RecommendedUser>
                    <RecommendedUser name="한재준" prev="마른형" label="근육형"></RecommendedUser>
                    <RecommendedUser name="한재준" prev="마른형" label="근육형"></RecommendedUser>
                </Box>
            </div>

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
        </div>
    );
};
