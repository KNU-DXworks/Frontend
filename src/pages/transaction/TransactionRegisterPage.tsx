import { Button } from "@/components/common/Button";
import { Chip } from "@/components/common/Chip";
import { Header } from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import { Selector } from "@/components/common/Selector";
import { TextArea } from "@/components/common/TextArea";
import { Title } from "@/components/common/Title";

export const TransactionRegisterPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Title subTitle="채팅을 나눈 사용자와의 거래 내용을 작성해주세요" title="거래 내역 작성"></Title>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 분류</text>
                <div className="flex flex-row gap-4">
                    <Chip label="루틴 공유"></Chip>
                    <Chip label="pt 구독"></Chip>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래자 아이디</text>
                <Input placeholder="거래하기로 한 사용자의 id를 입력해주세요"></Input>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 분류</text>
                <Selector></Selector>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 가격</text>
                <Input></Input>
            </div>

            <div className="flex flex-col gap-4">
                <text className="font-bold">거래 설명</text>
                <TextArea></TextArea>
            </div>

            <Button label="거래 등록하기"></Button>
        </div>
    );
};
