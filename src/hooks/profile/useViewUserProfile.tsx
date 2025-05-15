import { fetchInstance } from "@/app/config/axios";
import { useQuery } from "@tanstack/react-query";

type BodyLevel = "BELOW_STANDARD" | "STANDARD" | "ABOVE_STANDARD";
type CommunityType =
    | "SKINNY"
    | "SKINNY_MUSCLE"
    | "STANDARD"
    | "WEIGHT_LOSS"
    | "MUSCLE"
    | "WEIGHT"
    | "OBESITY"
    | "MUSCULAR_OBESITY";

interface ViewUserProfileReponseBody {
    profileId: number;
    userName: string;
    introduce: string;
    communityId: CommunityType;
    isLiked: boolean;
    history: [
        {
            date: string;
            type: string;
        },
    ];
    inbody: {
        createdAt: string;
        gender: string;
        weight: number;
        muscleMass: number;
        fatRatio: number;
        muscleMassType: string;
        fatMassType: string;
        userCase: string;
        armMuscleType: BodyLevel;
        trunkMuscleType: BodyLevel;
        legMuscleType: BodyLevel;
    };
    posts: [
        {
            postId: number;
            userName: string;
            date: string | null;
            postType: string;
            communityType: CommunityType;
            content: string;
            fileUrl: string;
            fileType: string;
        },
    ];
}

const viewUserProfile = async (userId: number) => {
    const response = await fetchInstance.get<ViewUserProfileReponseBody>(`/api/profile/${userId}`);
    return response.data;
};

export const useViewUserProfile = (userId: number) => {
    const query = useQuery({
        queryKey: ["profile", userId],
        queryFn: () => viewUserProfile(userId),
    });

    return { ...query };
};
