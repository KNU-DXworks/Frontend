import { fetchInstance } from "@/app/config/axios";
import { useQuery } from "@tanstack/react-query";

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

interface ViewGoalResponseBody {
    weight: number;
    muscle: number;
    fat: number;
    bmi: number;
    arm: BodyLevel | null;
    body: BodyLevel | null;
    leg: BodyLevel | null;
    goalGroup: GoalGroup | null;
}

const viewGoal = async () => {
    const response = await fetchInstance.get<ViewGoalResponseBody>("/api/goal");
    return response.data;
};

export const useViewGoal = () => {
    const query = useQuery({
        queryKey: ["goal"],
        queryFn: () => viewGoal(),
    });

    return { ...query };
};
