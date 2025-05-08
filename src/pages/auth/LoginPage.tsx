import { Button } from "@/components/common/Button";
import logo from "@/assets/logo.svg";
import { RiKakaoTalkFill } from "react-icons/ri";

export const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-screen">
            <img src={logo}></img>
            <div className="flex flex-col items-center">
                <text className="text-gray">로그인하여 다양한 사람과 함께</text>
                <text className="text-gray">운동 루틴을 공유해보세요!</text>
            </div>
            <Button type="login" size="l" label="카카오로 시작하기">
                <RiKakaoTalkFill className="w-6 h-6" />
            </Button>
        </div>
    );
};
