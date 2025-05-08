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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyPage = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    const handleWalletRegister = () => {
        setIsRegistered(true);
    };

    const handleGoal = () => {
        navigate("/goal/register");
    };

    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Profile
                userName="kangjae"
                label="근육형"
                info="저는 평생 20년 동안 멸치였다가 단 2년 만에 몸짱이 되었습니다. 저같은 체질의 사람에게 도움을 주고 싶습니다!"
                type="my"
            ></Profile>

            {!isRegistered ? (
                <UnregisteredWallet onClick={handleWalletRegister}></UnregisteredWallet>
            ) : (
                <RegisteredWallet coin={6.9462}></RegisteredWallet>
            )}

            <Box className="flex-col gap-4">
                <SectionHeader type="secondary" label="목표치" goal="근육형" onClick={handleGoal}></SectionHeader>
                <div className="flex justify-evenly">
                    <InfoCard type="secondary" imgUrl={weightIcon} label="제중" desc="62.8"></InfoCard>
                    <InfoCard type="secondary" imgUrl={muscleIcon} label="골격근량" desc="31.7"></InfoCard>
                    <InfoCard type="secondary" imgUrl={fatIcon} label="지방량" desc="6.4"></InfoCard>
                </div>
            </Box>

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
    );
};
