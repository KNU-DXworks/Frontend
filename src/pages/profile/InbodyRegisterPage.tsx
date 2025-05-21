import { Box } from "@/components/common/Box";
import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { FileUploader } from "@/components/common/FileUploader";
import { Title } from "@/components/common/Title";
import { InbodyInfo } from "@/components/profile/InbodyInfo";
import { useRegisterInbody } from "@/hooks/profile/useRegisterInbody";
import { useNavigate } from "react-router-dom";

export const InbodyRegisterPage = () => {
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

    const { handleFileChange, handleRegisterClick, latestInbody, isPending } = useRegisterInbody();
    const navigate = useNavigate();
    const data = latestInbody;

    return (
        <div className="flex flex-col gap-6">
            <Header />
            <Title title="인바디 정보 등록하기" subTitle="사진을 등록하면 AI를 통해 인바디를 분석합니다" />

            <FileUploader onChange={handleFileChange} />

            <Button label={isPending ? "분석 중..." : "정보 등록하기"} onClick={handleRegisterClick} />

            {data && (
                <>
                    <Box
                        onClick={() => navigate(`/community/${data.bodyType}`)}
                        className="flex-col justify-center items-center"
                    >
                        <p className="font-sm font-semibold text-darkGray">당신은 {bodyTypes[data.bodyType]}입니다.</p>
                        <p className="font-bold text-point text-[18px]">{bodyTypes[data.bodyType]} 커뮤니티 바로가기</p>
                    </Box>

                    <Box className="flex-col gap-4">
                        <p className="text-darkGray font-bold">분석 결과</p>
                        <div>
                            <InbodyInfo type="키" value={`${data.height}cm`} />
                            <InbodyInfo type="체중" value={`${data.weight}kg`} />
                            <InbodyInfo type="골격근량" value={`${data.muscle}kg`} />
                            <InbodyInfo type="체지방량" value={`${data.fat}kg`} />
                            <InbodyInfo type="BMI" value={`${data.bmi}`} />
                            <InbodyInfo type="팔 근육 수준" label={data.armGrade} />
                            <InbodyInfo type="몸통 근육 수준" label={data.bodyGrade} />
                            <InbodyInfo type="다리 근육 수준" label={data.legGrade} />
                        </div>
                    </Box>
                </>
            )}
        </div>
    );
};
