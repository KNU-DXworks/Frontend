import { fetchInstance } from "@/app/config/axios";
import { queryClient } from "@/app/config/query";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

interface TransferRequestBody {
    walletAddress: string;
}

const transfer = async (data: TransferRequestBody) => {
    const response = await fetchInstance.post("/api/transfer/", data);
    return response.data;
};

export const useTransfer = () => {
    const { mutate } = useMutation({
        mutationFn: (payload: TransferRequestBody) => {
            console.log(payload);
            return transfer(payload);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transaction"] });
            alert("성공적으로 송금되었습니다!");
        },
        onError: (error) => {
            console.error("Error response:", error.message);
            alert("송금에 실패하였습니다.");
        },
    });

    const handleTransferClick = useCallback(
        (payload: TransferRequestBody) => {
            mutate(payload);
        },
        [mutate],
    );

    return {
        handleTransferClick,
    };
};
