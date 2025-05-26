import { fetchInstance } from "@/app/config/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface ApiResponse<T> {
    code: number;
    message: string;
    value: T;
}

interface GetWallet {
    walletAddress: string;
    privateKey: string;
}

const getWallet = async () => {
    const response = await fetchInstance.get<ApiResponse<GetWallet>>("/api/wallet");
    return response.data.value;
};

export const useGetWallet = () => {
    const { setPrivateKey } = useAuthStore();
    
    const query = useQuery({
        queryKey: ["walletAddress"],
        queryFn: () => getWallet(),
    });

    useEffect(() => {
        if (query.data?.privateKey) {
            setPrivateKey(query.data.privateKey);
        }
    }, [query.data?.privateKey, setPrivateKey]);

    return { ...query };
};
