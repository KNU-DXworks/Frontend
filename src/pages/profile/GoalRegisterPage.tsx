import { Button } from "@/components/common/Button";
import { Chip } from "@/components/common/Chip";
import { Header } from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import { Title } from "@/components/common/Title";
import { useRegisterGoal } from "@/hooks/profile/useRegisterGoal";
import { useNavigate } from "react-router-dom";
import { gradeOptions } from "@/app/constants/gradeOptions";
import { bodyTypeOptions } from "@/app/constants/bodyTypeOptions";

type Grade = "BELOW_STANDARD" | "STANDARD" | "ABOVE_STANDARD";
type BodyType =
    | "SKINNY"
    | "SKINNY_MUSCLE"
    | "STANDARD"
    | "WEIGHT_LOSS"
    | "MUSCLE"
    | "WEIGHT"
    | "OBESITY"
    | "MUSCULAR_OBESITY";

export const GoalRegisterPage = () => {
    const { weightRef, muscleRef, fatRef, bmiRef, arm, setArm, body, setBody, leg, setLeg, goalGroup, setGoalGroup } =
        useRegisterGoal();

    const navigate = useNavigate();

    const handleGoalRegister = () => {
        navigate("/profile/my");
    };

    return (
        <div className="flex flex-col gap-8">
            <Header></Header>
            <Title subTitle="자신이 목표로 하는 수치를 입력해보세요" title="목표치"></Title>

            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                    <Input ref={weightRef} label="체중"></Input>
                    <Input ref={muscleRef} label="골격근량"></Input>
                </div>
                <div className="flex flex-row gap-4">
                    <Input ref={fatRef} label="체지방률"></Input>
                    <Input ref={bmiRef} label="BMI"></Input>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <text className="font-bold">부위별 근육량</text>
                <div className="flex flex-row justify-between">
                    <text>팔</text>
                    <div className="flex flex-row gap-2">
                        {gradeOptions.map((grade) => (
                            <Chip
                                key={grade.key}
                                label={grade.value}
                                isSelected={arm === grade.key}
                                onClick={() => setArm(grade.key as Grade)}
                            ></Chip>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <text>몸통</text>
                    <div className="flex flex-row gap-2">
                        {gradeOptions.map((grade) => (
                            <Chip
                                key={grade.key}
                                label={grade.value}
                                isSelected={body === grade.key}
                                onClick={() => setBody(grade.key as Grade)}
                            ></Chip>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <text>다리</text>
                    <div className="flex flex-row gap-2">
                        {gradeOptions.map((grade) => (
                            <Chip
                                key={grade.key}
                                label={grade.value}
                                isSelected={leg === grade.key}
                                onClick={() => setLeg(grade.key as Grade)}
                            ></Chip>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <text className="font-bold">목표 체형</text>
                <div className="flex flex-row flex-wrap gap-3">
                    {bodyTypeOptions.map((type) => (
                        <Chip
                            key={type.key}
                            label={type.value}
                            isSelected={goalGroup === type.key}
                            onClick={() => setGoalGroup(type.key as BodyType)}
                        ></Chip>
                    ))}
                </div>
            </div>

            <Button onClick={handleGoalRegister} label="목표치 등록하기"></Button>
        </div>
    );
};
