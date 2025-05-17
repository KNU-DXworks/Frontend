import { Button } from "@/components/common/Button";
import { Chip } from "@/components/common/Chip";
import { Header } from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import { Title } from "@/components/common/Title";
import { useRegisterGoal } from "@/hooks/profile/useRegisterGoal";
import { useNavigate } from "react-router-dom";
import { gradeOptions } from "@/app/constants/gradeOptions";
import { bodyTypeOptions } from "@/app/constants/bodyTypeOptions";
import { useEffect } from "react";
import { useViewGoal } from "@/hooks/profile/useViewGoal";

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
    const {
        weightRef,
        muscleRef,
        fatRef,
        bmiRef,
        arm,
        setArm,
        body,
        setBody,
        leg,
        setLeg,
        goalGroup,
        setGoalGroup,
        handleRegisterClick,
    } = useRegisterGoal();

    const { data: goalData } = useViewGoal();
    const navigate = useNavigate();

    useEffect(() => {
        if (!goalData) return;

        const { weight, muscle, fat, bmi, arm, body, leg, goalGroup } = goalData;

        if (weightRef.current) weightRef.current.value = weight.toString();
        if (muscleRef.current) muscleRef.current.value = muscle.toString();
        if (fatRef.current) fatRef.current.value = fat.toString();
        if (bmiRef.current) bmiRef.current.value = bmi.toString();

        if (arm) setArm(arm);
        if (body) setBody(body);
        if (leg) setLeg(leg);
        if (goalGroup) setGoalGroup(goalGroup);
    }, [goalData]);

    const handleGoalRegister = () => {
        handleRegisterClick();
        navigate("/profile/my");
    };

    return (
        <div className="flex flex-col gap-8">
            <Header />
            <Title subTitle="자신이 목표로 하는 수치를 입력해보세요" title="목표치" />

            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                    <Input ref={weightRef} label="체중" />
                    <Input ref={muscleRef} label="골격근량" />
                </div>
                <div className="flex flex-row gap-4">
                    <Input ref={fatRef} label="체지방률" />
                    <Input ref={bmiRef} label="BMI" />
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <span className="font-bold">부위별 근육량</span>
                {[
                    { label: "팔", selected: arm, setter: setArm },
                    { label: "몸통", selected: body, setter: setBody },
                    { label: "다리", selected: leg, setter: setLeg },
                ].map(({ label, selected, setter }) => (
                    <div className="flex flex-row justify-between" key={label}>
                        <span>{label}</span>
                        <div className="flex flex-row gap-2">
                            {gradeOptions.map((grade) => (
                                <Chip
                                    key={grade.key}
                                    label={grade.value}
                                    isSelected={selected === grade.key}
                                    onClick={() => setter(grade.key as Grade)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6">
                <span className="font-bold">목표 체형</span>
                <div className="flex flex-row flex-wrap gap-3">
                    {bodyTypeOptions.map((type) => (
                        <Chip
                            key={type.key}
                            label={type.value}
                            isSelected={goalGroup === type.key}
                            onClick={() => setGoalGroup(type.key as BodyType)}
                        />
                    ))}
                </div>
            </div>

            <Button onClick={handleGoalRegister} label="목표치 등록하기" />
        </div>
    );
};
