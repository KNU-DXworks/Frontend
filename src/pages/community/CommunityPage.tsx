import { Header } from "@/components/common/Header";
import { Post } from "@/components/common/Post";
import { Title } from "@/components/common/Title";

import post1 from "@/assets/post/post1.svg";

export const CommunityPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Title subTitle="마른 그룹이었던 사람들의 꿀팁 게시물을 살펴보아요" title="멸치 커뮤니티"></Title>

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

            <button className="rounded-full bg-point w-[60px] h-[60px] bg-[url('/src/assets/pencil.svg')] bg-no-repeat bg-center self-end cursor-pointer"></button>
        </div>
    );
};
