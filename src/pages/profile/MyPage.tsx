import { Box } from "@/components/common/Box";
import { Header } from "@/components/common/Header";
import { InfoCard } from "@/components/common/InfoCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Profile } from "@/components/profile/Profile";
import { UnregisteredWallet } from "@/components/profile/UnregisteredWallet";
import weightIcon from "@/assets/weight.svg";
import muscleIcon from "@/assets/muscle.svg";
import fatIcon from "@/assets/fat.svg";
import { History } from "@/components/profile/History";
import { InbodyInfo } from "@/components/profile/InbodyInfo";
import { RegisteredWallet } from "@/components/profile/RegisteredWallet";
import { useNavigate } from "react-router-dom";
import { useViewMyProfile } from "@/hooks/profile/useViewMyProfile";
import { useRegisterWallet } from "@/hooks/profile/useRegisterWallet";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Post } from "@/components/common/Post";
import { Badge } from "@/components/common/Badge";
import { formatDate } from "@/app/utils/date";
import { useUpdateInfo } from "@/hooks/profile/useUpdateInfo";
import { useAuthStore } from "@/stores/useAuthStore";
import { UnregisteredPrivateKey } from "@/components/profile/UnregisteredPrivateKey";
import * as Dialog from "@radix-ui/react-dialog";

export const MyPage = () => {
    const navigate = useNavigate();
    const [isPost, setIsPost] = useState(true);
    const { infoRef, handleUpdateClick } = useUpdateInfo();
    const { privateKey, setPrivateKey } = useAuthStore();
    const { data, isLoading, isError } = useViewMyProfile();
    const { walletRef, handleRegisterClick } = useRegisterWallet();

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>사용자 정보를 불러올 수 없습니다.</div>;

    // 기본값 처리: 빈 배열 및 null
    const inbody = data.inbody ?? [];
    const posts = data.posts ?? [];
    const latestInbody = inbody.length > 0 ? inbody[inbody.length - 1] : null;

    // inbodyHistory: 0개 => [], 1개 => [{cur}], >1 => prev->cur pairs
    const inbodyHistory =
        inbody.length === 0
            ? []
            : inbody.length === 1
              ? [
                    {
                        date: inbody[0].createdAt,
                        curInbody: inbody[0],
                    },
                ]
              : inbody.slice(0, -1).map((item, idx) => ({
                    date: inbody[idx + 1].createdAt,
                    prevInbody: item,
                    curInbody: inbody[idx + 1],
                }));

    const handleGoal = () => {
        navigate("/goal/register");
    };

    const bodyTypes: Record<string, string> = {
        SKINNY: "마른 체형",
        SKINNY_MUSCLE: "마른 근육형",
        STANDARD: "표준형",
        WEIGHT_LOSS: "감량형",
        MUSCLE: "근육형",
        OVERWEIGHT: "과체중형",
        OBESITY: "비만형",
        MUSCULAR_OBESITY: "근육 비만형",
        NONE: "미지정",
    };

    return (
        <div className="flex flex-col gap-6">
            <Header />

            <Profile
                ref={infoRef}
                userName={data.userName ?? "이름 없음"}
                profileImg={data.profileImg}
                label={latestInbody ? bodyTypes[latestInbody.userCase] : "미지정"}
                info={data.info}
                type="my"
                onInfoClick={handleUpdateClick}
            />

            <div className="flex flex-row gap-4">
                <Button
                    onClick={() => setIsPost(true)}
                    type={isPost ? "primary" : "secondary"}
                    size="m"
                    label="게시물 보기"
                />
                <Button
                    onClick={() => setIsPost(false)}
                    type={!isPost ? "primary" : "secondary"}
                    size="m"
                    label="인바디 추이 보기"
                />
            </div>

            {isPost ? (
                <div className="flex flex-col gap-2">
                    {posts.length === 0 ? (
                        <div>사용자가 등록한 게시물이 없습니다.</div>
                    ) : (
                        posts.map((post) => (
                            <Post
                                key={post.postId}
                                userImgUrl={post.profileImg}
                                name={post.userName}
                                time={formatDate(post.date)}
                                label={bodyTypes[post.communityType] ?? "미지정"}
                                text={post.content}
                                postImgUrl={post.fileUrl}
                                postImgType={post.fileType}
                                postType={post.postType}
                            />
                        ))
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    {!data.walletRegistered ? (
                        <UnregisteredWallet inputRef={walletRef} onClick={handleRegisterClick} />
                    ) : (
                        <RegisteredWallet coin={data.eth ?? 0} />
                    )}

                    {!privateKey ? (
                        <UnregisteredPrivateKey onRegister={setPrivateKey} />
                    ) : (
                        <Box className="gap-1 flex-col">
                            <span className="text-darkGray font-bold">등록된 Private Key</span>
                            <span className="text-darkGray text-sm break-all">{privateKey}</span>
                        </Box>
                    )}

                    <div className="flex flex-col gap-2 w-full">
                        <span className="font-bold text-darkGray">체형 변화</span>
                        <div className="flex flex-col gap-2 w-full">
                            {inbodyHistory.length === 0 ? (
                                <div>사용자가 등록한 인바디 정보가 없습니다.</div>
                            ) : (
                                inbodyHistory.map((item, idx) => {
                                    const isSingle = inbodyHistory.length === 1;
                                    if (isSingle) {
                                        return (
                                            <History
                                                key={idx}
                                                date={item.date}
                                                cur={bodyTypes[item.curInbody.userCase]}
                                            />
                                        );
                                    }

                                    return (
                                        <Dialog.Root key={idx}>
                                            <Dialog.Trigger className="text-left">
                                                <History
                                                    date={item.date}
                                                    prev={
                                                        "prevInbody" in item
                                                            ? bodyTypes[item.prevInbody.userCase]
                                                            : undefined
                                                    }
                                                    cur={bodyTypes[item.curInbody.userCase]}
                                                />
                                            </Dialog.Trigger>
                                            <Dialog.Portal>
                                                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                                                <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white py-4 pl-4 pr-2 rounded-lg shadow-xl focus:outline-none max-h-[90vh] ">
                                                    <div className="flex flex-col gap-4 overflow-y-auto max-h-[80vh] pr-2">
                                                        {"prevInbody" in item && (
                                                            <>
                                                                <span className="font-bold text-darkGray">
                                                                    이전 인바디 수치
                                                                </span>
                                                                <Box className="flex-col">
                                                                    <InbodyInfo
                                                                        type="키"
                                                                        value={`${item.prevInbody.height}cm`}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="체중"
                                                                        value={`${item.prevInbody.weight}kg`}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="골격근량"
                                                                        value={`${item.prevInbody.muscle}kg`}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="체지방량"
                                                                        value={`${item.prevInbody.fat}%`}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="BMI"
                                                                        value={`${item.prevInbody.bmi}`}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="팔 근육 수준"
                                                                        label={item.prevInbody.armGrade}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="몸통 근육 수준"
                                                                        label={item.prevInbody.bodyGrade}
                                                                    />
                                                                    <InbodyInfo
                                                                        type="다리 근육 수준"
                                                                        label={item.prevInbody.legGrade}
                                                                    />
                                                                </Box>
                                                            </>
                                                        )}

                                                        <span className="font-bold text-darkGray">
                                                            현재 인바디 수치
                                                        </span>
                                                        <Box className="flex-col">
                                                            <InbodyInfo
                                                                type="키"
                                                                value={`${item.curInbody.height}cm`}
                                                            />
                                                            <InbodyInfo
                                                                type="체중"
                                                                value={`${item.curInbody.weight}kg`}
                                                            />
                                                            <InbodyInfo
                                                                type="골격근량"
                                                                value={`${item.curInbody.muscle}kg`}
                                                            />
                                                            <InbodyInfo
                                                                type="체지방량"
                                                                value={`${item.curInbody.fat}%`}
                                                            />
                                                            <InbodyInfo type="BMI" value={`${item.curInbody.bmi}`} />
                                                            <InbodyInfo
                                                                type="팔 근육 수준"
                                                                label={item.curInbody.armGrade}
                                                            />
                                                            <InbodyInfo
                                                                type="몸통 근육 수준"
                                                                label={item.curInbody.bodyGrade}
                                                            />
                                                            <InbodyInfo
                                                                type="다리 근육 수준"
                                                                label={item.curInbody.legGrade}
                                                            />
                                                        </Box>
                                                    </div>
                                                    <Dialog.Close></Dialog.Close>
                                                </Dialog.Content>
                                            </Dialog.Portal>
                                        </Dialog.Root>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    <Box className="flex-col gap-4">
                        <SectionHeader
                            type="secondary"
                            label="목표치"
                            goal={bodyTypes[data.goal?.bodyType ?? ""] ?? "미지정"}
                            onClick={handleGoal}
                        />
                        <div className="flex justify-evenly">
                            <InfoCard
                                type="secondary"
                                imgUrl={weightIcon}
                                label="체중"
                                desc={data.goal?.weight != null ? `${data.goal.weight} kg` : "-"}
                            />
                            <InfoCard
                                type="secondary"
                                imgUrl={muscleIcon}
                                label="골격근량"
                                desc={data.goal?.muscle != null ? `${data.goal.muscle} kg` : "-"}
                            />
                            <InfoCard
                                type="secondary"
                                imgUrl={fatIcon}
                                label="지방량"
                                desc={data.goal?.fat != null ? `${data.goal.fat} %` : "-"}
                            />
                        </div>
                    </Box>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <span className="font-bold text-darkGray">인바디 수치</span>
                            <Badge type="primary" label={latestInbody ? bodyTypes[latestInbody.userCase] : "-"} />
                        </div>

                        <Box className="flex-col">
                            <InbodyInfo type="키" value={`${latestInbody?.height ?? "-"}cm`} />
                            <InbodyInfo type="체중" value={`${latestInbody?.weight ?? "-"}kg`} />
                            <InbodyInfo type="골격근량" value={`${latestInbody?.muscle ?? "-"}kg`} />
                            <InbodyInfo type="체지방량" value={`${latestInbody?.fat ?? "-"}%`} />
                            <InbodyInfo type="BMI" value={`${latestInbody?.bmi ?? "-"}`} />
                            <InbodyInfo type="팔 근육 수준" label={latestInbody?.armGrade} />
                            <InbodyInfo type="몸통 근육 수준" label={latestInbody?.bodyGrade} />
                            <InbodyInfo type="다리 근육 수준" label={latestInbody?.legGrade} />
                        </Box>
                    </div>
                </div>
            )}
        </div>
    );
};
