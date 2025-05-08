import { Button } from "@/components/common/Button";
import { Chip } from "@/components/common/Chip";
import { Header } from "@/components/common/Header";
import { ImageUploader } from "@/components/common/ImageUploader";
import { TextArea } from "@/components/common/TextArea";
import { Title } from "@/components/common/Title";
import { useState } from "react";

export const PostRegisterPage = () => {
    const [isAll, setIsAll] = useState(true);

    return (
        <div className="flex flex-col gap-8">
            <Header></Header>
            <Title subTitle="자신을 나타낼 수 있거나 공유하고 싶은 정보를 적어보세요" title="게시물 작성"></Title>

            <div className="flex flex-col gap-4">
                <text className="font-bold text-darkGray">공개 대상</text>
                <div className="flex flex-row gap-2">
                    <Chip label="전체" isSelected={isAll} onClick={() => setIsAll(true)}></Chip>
                    <Chip label="구독자" isSelected={!isAll} onClick={() => setIsAll(false)}></Chip>
                </div>
            </div>

            <ImageUploader></ImageUploader>

            {isAll && <TextArea placeholder="문구 추가..." className="border-chat"></TextArea>}

            <Button label="공유하기"></Button>
        </div>
    );
};
