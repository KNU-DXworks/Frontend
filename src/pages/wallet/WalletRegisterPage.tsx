import wallet from "@/assets/wallet.svg";
import { Button } from "@/components/common/Button";
import { useNavigate } from "react-router-dom";

export const WalletRegisterPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6 items-center justify-center h-[100vh]">
            <img src={wallet}></img>
            <span className="text-[30px] font-bold">Wallet Setup</span>
            <div className="flex flex-col">
                <span className="text-darkGray">지갑을 생성하여 다양한 사람들과 함께</span>
                <span className="text-darkGray">운동 루틴을 공유해보세요!</span>
            </div>

            <Button label="지갑 등록하러가기" onClick={() => navigate("/wallet/issue")}></Button>
        </div>
    );
};
