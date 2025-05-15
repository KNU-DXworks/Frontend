import { fetchInstance } from "@/app/config/axios";
import { useMutation } from "@tanstack/react-query";

const registerInterestingUser = async (userId: number): Promise<void> => {
    const response = await fetchInstance.post(`api/user/interest/${userId}`, {
        toUser: userId,
    });
    return response.data;
};

const deleteInterestingUser = async (userId: number): Promise<void> => {
    await fetchInstance.delete(`/api/user/interest/${userId}`);
};

export const useInterestUser = () => {
    const registerMutation = useMutation({
        mutationFn: (userId: number) => registerInterestingUser(userId),
    });

    const deleteMutation = useMutation({
        mutationFn: (userId: number) => deleteInterestingUser(userId),
    });

    return {
        registerInterest: registerMutation.mutate,
        deleteInterest: deleteMutation.mutate,
    };
};
