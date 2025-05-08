import { Box } from "@/components/common/Box";
import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { ImageUploader } from "@/components/common/ImageUploader";
import { Title } from "@/components/common/Title";
import { InbodyInfo } from "@/components/profile/InbodyInfo";

export const InbodyRegisterPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Header></Header>
            <Title subTitle="사진을 등록하면 AI를 통해 인바디를 분석합니다" title="인바디 정보 등록하기"></Title>

            <ImageUploader></ImageUploader>
            <Button label="정보 등록하기"></Button>

            <Box className="flex-col justify-center items-center">
                <text className="font-sm font-semibold text-darkGray">당신은 하체비만형입니다.</text>
                <text className="font-bold text-point text-[18px]">하체 비만형 커뮤니티 바로가기</text>
            </Box>

            <Box className="flex-col gap-4">
                <text className="text-darkGray font-bold">분석 결과</text>
                <div>
                    <InbodyInfo type="체지방량" label="standard" value="23%"></InbodyInfo>
                    <InbodyInfo type="근육량" label="danger" value="8kg"></InbodyInfo>
                </div>
            </Box>
        </div>
    );
};
