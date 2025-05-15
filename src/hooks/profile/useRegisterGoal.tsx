import { fetchInstance } from "@/app/config/axios";
import { queryClient } from "@/app/config/query";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useRef, useState } from "react";

type BodyLevel = "BELOW_STANDARD" | "STANDARD" | "ABOVE_STANDARD";
type GoalGroup =
    | "SKINNY"
    | "SKINNY_MUSCLE"
    | "STANDARD"
    | "WEIGHT_LOSS"
    | "MUSCLE"
    | "WEIGHT"
    | "OBESITY"
    | "MUSCULAR_OBESITY";

interface RegisterGoalRequestBody {
    weight: number;
    muscle: number;
    fat: number;
    bmi: number;
    arm: BodyLevel | null;
    body: BodyLevel | null;
    leg: BodyLevel | null;
    goalGroup: GoalGroup | null;
}

const registerGoal = async (data: RegisterGoalRequestBody): Promise<void> => {
    const response = await fetchInstance.post("/api/goals", data);
    return response.data;
};

export const useRegisterGoal = () => {
    const weightRef = useRef<HTMLInputElement | null>(null);
    const muscleRef = useRef<HTMLInputElement | null>(null);
    const fatRef = useRef<HTMLInputElement | null>(null);
    const bmiRef = useRef<HTMLInputElement | null>(null);

    const [arm, setArm] = useState<BodyLevel | null>(null);
    const [body, setBody] = useState<BodyLevel | null>(null);
    const [leg, setLeg] = useState<BodyLevel | null>(null);
    const [goalGroup, setGoalGroup] = useState<GoalGroup | null>(null);

    const { mutate } = useMutation({
        mutationFn: () => {
            const payload = {
                weight: Number(weightRef.current?.value),
                muscle: Number(muscleRef.current?.value),
                fat: Number(fatRef.current?.value),
                bmi: Number(bmiRef.current?.value),
                arm,
                body,
                leg,
                goalGroup,
            };

            console.log(payload);
            return registerGoal(payload);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["goal"] });
            alert("성공적으로 저장되었습니다!");
        },
        onError: (error) => {
            console.error("Error response:", error.message);
            alert("목표 등록록에 실패하였습니다.");
        },
    });

    const handleRegisterClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
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
    };
};
