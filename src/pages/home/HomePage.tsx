import { CommunityButton } from "@/components/home/CommunityButton";
import logo_sm from "@/assets/logo_sm.svg";
import { Box } from "@/components/common/Box";
import { InfoCard } from "@/components/common/InfoCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { RecommendedUser } from "@/components/home/RecommendedUser";
import profile from "@/assets/profile.svg";
import { Post } from "@/components/common/Post";
import { useNavigate } from "react-router-dom";
import { useViewMain } from "@/hooks/home/useViewMain";
import { Button } from "@/components/common/Button";
import { useViewTransactionItem } from "@/hooks/transaction/useViewTransactionItem";
import { TransactionItem } from "@/components/transaction/TransactionItem";
import { formatShortDate } from "@/app/utils/date";

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
    NONE = "-",
}

export const HomePage = () => {
    const { data } = useViewMain();
    const { data: transactions } = useViewTransactionItem();

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

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <img src={logo_sm} className="cursor-pointer" onClick={() => navigate("/")}></img>
                <img src={profile} className="cursor-pointer" onClick={handleProfile}></img>
            </div>

            <div>
                <span className="font-bold text-darkGray">커뮤니티 목록</span>
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
                <Box className="flex-row gap-2 overflow-x-auto">
                    {data?.interestUser?.map((user) => {
                        console.log("interestUser", user.bodyType, BodyTypeEnum[user.bodyType]);
                        return (
                            <InfoCard
                                key={user.userId}
                                imgUrl={user.profileImg}
                                label={user.userName}
                                desc={BodyTypeEnum[user.bodyType]}
                                onClick={() => handleUserProfileClick(user.userId)}
                            />
                        );
                    })}
                </Box>
            </div>

            <div>
                <SectionHeader label="추천 사용자"></SectionHeader>
                <Box className="flex flex-col gap-2">
                    {data?.recommandUser?.map((user) => (
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
                <SectionHeader label="구독한 사용자"></SectionHeader>
                <Box className="flex flex-col gap-2">
                    {data?.subscribeUser?.map((user) => (
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
                <div className="flex flex-row justify-between">
                    <SectionHeader
                        type="tertiary"
                        label="거래 구독 관리"
                        onClick={() => navigate("/transaction")}
                    ></SectionHeader>
                    <Button size="xs" label="거래 추가" onClick={() => navigate("/transaction/register")}></Button>
                </div>
                <Box className="flex flex-col gap-2" onClick={() => navigate("/transaction")}>
                    {transactions?.following.map((item) => (
                        <TransactionItem
                            key={item.transactionId}
                            userName={item.name}
                            profileImg={item.profileImg}
                            walletAddress={item.walletAddress}
                            amount={item.amount}
                            isTransfered={item.isTransfered}
                            contractDate={formatShortDate(item.contractDate)}
                            expiredDate={formatShortDate(item.expirationDate)}
                            isIncome={false}
                            label={item.isTransfered === true ? "송금 완료" : "송금 대기"}
                        />
                    ))}
                </Box>
            </div>

            <div className="flex flex-col gap-2">
                {data?.subscribePosts?.map((post) => (
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
