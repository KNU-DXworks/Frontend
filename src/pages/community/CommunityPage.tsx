import { Header } from "@/components/common/Header";
import { Post } from "@/components/common/Post";
import { Title } from "@/components/common/Title";

import post1 from "@/assets/post/post1.svg";
import { useNavigate, useParams } from "react-router-dom";

export const CommunityPage = () => {
    const navigate = useNavigate();
    const { type } = useParams<{ type: keyof typeof communityTypes }>();

    const communityTypes = {
        skinny: "마른 체형",
        skinnyMuscle: "마른 근육형",
        standard: "표준형",
        weightLoss: "감량형",
        muscle: "근육형",
        overWeight: "체중형",
        obesity: "비만형",
        muscularObesity: "근육 비만형",
    };

    const community = type ? communityTypes[type] : "";

    const posts = [
        {
            id: 1,
            name: "조민주",
            time: "3시간 전",
            label: "근육형",
            text: "일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약",
            postImgUrl: post1,
        },
        {
            id: 2,
            name: "조민주",
            time: "3시간 전",
            label: "근육형",
            text: "일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약",
            postImgUrl: post1,
        },
        {
            id: 3,
            name: "조민주",
            time: "3시간 전",
            label: "근육형",
            text: "일주일에 -3kg씩 건강하게 식단하고 싶으신가요? 그렇다면 저를 팔로우하고 맞춤형 식단을 받아보세요. 저는 단지 일반적인 샐러드만 추천해주는 사람이 아닙니다. 그러니 후회하지 않으실겁니다 만약",
            postImgUrl: post1,
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Title
                subTitle={`${community}이었던 사람들의 꿀팁 게시물을 살펴보아요`}
                title={`${community} 커뮤니티`}
            ></Title>

            <div className="flex flex-col gap-2">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        name={post.name}
                        time={post.time}
                        label={post.label}
                        text={post.text}
                        postImgUrl={post.postImgUrl}
                    />
                ))}
            </div>

            <button
                className="rounded-full bg-point w-[60px] h-[60px] bg-[url('/src/assets/pencil.svg')] bg-no-repeat bg-center self-end cursor-pointer"
                onClick={() => navigate("/post/register")}
            ></button>
        </div>
    );
};
