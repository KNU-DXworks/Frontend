import { Button } from "@/components/common/Button";
// import { Chip } from "@/components/common/Chip";
import { Header } from "@/components/common/Header";
import { Input } from "@/components/common/Input";
// import { Selector } from "@/components/common/Selector";
import { TextArea } from "@/components/common/TextArea";
import { Title } from "@/components/common/Title";
import { useReigsterTransaction } from "@/hooks/transaction/useRegisterTransaction";

export const TransactionRegisterPage = () => {
    const { traderIdRef, transactionPeriodRef, amountRef, infoRef } = useReigsterTransaction();

    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Title subTitle="채팅을 나눈 사용자와의 거래 내용을 작성해주세요" title="거래 내역 작성"></Title>

            {/* <div className="flex flex-col gap-4">
                <text className="font-bold">거래 분류</text>
                <div className="flex flex-row gap-4">
                    <Chip label="루틴 공유"></Chip>
                    <Chip label="pt 구독"></Chip>
                </div>
            </div> */}

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래자 지갑주소</text>
                <Input ref={traderIdRef} placeholder="거래하기로 한 사용자의 지갑주소를 입력해주세요"></Input>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 주기</text>
                <Input ref={transactionPeriodRef} placeholder="일 단위로 입력해주세요." unit="일"></Input>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 가격</text>
                <Input ref={amountRef} placeholder="거래하기로 한 가격을 입력해주세요." unit="원"></Input>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 설명</text>
                <TextArea ref={infoRef} placeholder="거래 내용에 대한 추가 설명을 입력해주세요."></TextArea>
            </div>

            <Button label="거래 등록하기"></Button>
        </div>
    );
};
