import { fetchInstance } from "@/app/config/axios";
import { queryClient } from "@/app/config/query";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useRef } from "react";

interface RegisterTransactionResponseBody {
    privateKey: string;
    traderId: string;
    transactionPeriod: number;
    amount: number;
    info: string;
}

const registerTransaction = async (data: RegisterTransactionResponseBody) => {
    const response = await fetchInstance.post("/api/transaction", data);
    return response.data;
};

export const useReigsterTransaction = () => {
    const traderIdRef = useRef<HTMLInputElement | null>(null);
    const transactionPeriodRef = useRef<HTMLInputElement | null>(null);
    const amountRef = useRef<HTMLInputElement | null>(null);
    const infoRef = useRef<HTMLTextAreaElement | null>(null);

    const { privateKey } = useAuthStore();

    const { mutate } = useMutation({
        mutationFn: () => {
            if (!privateKey) {
                throw new Error("private key 정보가 없습니다. 먼저 등록해주세요.");
            }
            const payload = {
                privateKey,
                traderId: traderIdRef.current?.value ?? "",
                transactionPeriod: Number(transactionPeriodRef.current?.value ?? 0),
                amount: Number(amountRef.current?.value ?? 0),
                info: infoRef.current?.value ?? "",
            };

            console.log(payload);
            return registerTransaction(payload);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transaction"] });
            alert("성공적으로 저장되었습니다!");
        },
        onError: (error) => {
            console.error("Error response:", error.message);
            alert("목표 등록에 실패하였습니다.");
        },
    });

    const handleRegisterClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
        traderIdRef,
        transactionPeriodRef,
        amountRef,
        infoRef,
        handleRegisterClick,
    };
};
