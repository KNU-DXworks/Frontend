import { fetchInstance } from "@/app/config/axios";
import { useQuery } from "@tanstack/react-query";

interface ApiResponse<T> {
    code: number;
    message: string;
    value: T;
}

interface VieWTransactionItemResponseBody {
    following: {
        transactionId: number;
        userId: number;
        name: string;
        profileImg: string;
        walletAddress: string;
        transactionPeriod: number;
        amount: number;
        isTransfered: boolean;
        contractDate: string;
        expirationDate: string;
    }[];
    follower: {
        transactionId: number;
        userId: number;
        name: string;
        profileImg: string;
        walletAddress: string;
        transactionPeriod: number;
        amount: number;
        isTransfered: boolean;
        contractDate: string;
        expirationDate: string;
    }[];
}

const viewTransactionItem = async () => {
    const response = await fetchInstance.get<ApiResponse<VieWTransactionItemResponseBody>>("/api/transaction");
    return response.data.value;
};

export const useViewTransactionItem = () => {
    const query = useQuery({
        queryKey: ["transaction"],
        queryFn: () => viewTransactionItem(),
    });

    return { ...query };
};
