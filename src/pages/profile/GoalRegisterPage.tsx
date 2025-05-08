import { Button } from "@/components/common/Button";
import { Chip } from "@/components/common/Chip";
import { Header } from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import { Title } from "@/components/common/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GoalRegisterPage = () => {
    const navigate = useNavigate();

    const handleGoalRegister = () => {
        navigate("/profile/my");
    };

    const [armGrade, setArmGrade] = useState("");
    const [bodyGrade, setBodyGrade] = useState("");
    const [legGrade, setLegGrade] = useState("");
    const [bodyType, setBodyType] = useState("");

    const gradeOptions = ["표준 이하", "표준", "표준 이상"];
    const bodyTypes = ["마른 체형", "마른 근육형", "표준형", "감량형", "근육형", "체중형", "비만형", "근육 비만형"];

    return (
        <div className="flex flex-col gap-8">
            <Header></Header>
            <Title subTitle="자신이 목표로 하는 수치를 입력해보세요" title="목표치"></Title>

            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                    <Input label="체중"></Input>
                    <Input label="골격근량"></Input>
                </div>
                <div className="flex flex-row gap-4">
                    <Input label="체지방률"></Input>
                    <Input label="BMI"></Input>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <text className="font-bold">부위별 근육량</text>
                <div className="flex flex-row justify-between">
                    <text>팔</text>
                    <div className="flex flex-row gap-2">
                        {gradeOptions.map((grade) => (
                            <Chip
                                key={grade}
                                label={grade}
                                isSelected={armGrade === grade}
                                onClick={() => setArmGrade(grade)}
                            ></Chip>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <text>몸통</text>
                    <div className="flex flex-row gap-2">
                        {gradeOptions.map((grade) => (
                            <Chip
                                key={grade}
                                label={grade}
                                isSelected={bodyGrade === grade}
                                onClick={() => setBodyGrade(grade)}
                            ></Chip>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <text>다리</text>
                    <div className="flex flex-row gap-2">
                        {gradeOptions.map((grade) => (
                            <Chip
                                key={grade}
                                label={grade}
                                isSelected={legGrade === grade}
                                onClick={() => setLegGrade(grade)}
                            ></Chip>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <text className="font-bold">목표 체형</text>
                <div className="flex flex-row flex-wrap gap-3">
                    {bodyTypes.map((type) => (
                        <Chip
                            key={type}
                            label={type}
                            isSelected={bodyType === type}
                            onClick={() => setBodyType(type)}
                        ></Chip>
                    ))}
                </div>
            </div>

            <Button onClick={handleGoalRegister} label="목표치 등록하기"></Button>
        </div>
    );
};
