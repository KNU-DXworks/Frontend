// src/hooks/auth/useSignIn.ts

import { fetchInstance } from "@/app/config/axios";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_KAKAO_CLIENT_ID;

interface KakaoLoginResponse {
    code: number;
    message: string;
    value: {
        accessToken: string;
        refreshToken: string;
        expir: number;
    };
}

const getAccessTokenByCode = async (code: string): Promise<KakaoLoginResponse> => {
    const response = await fetchInstance.get<KakaoLoginResponse>(`${BASE_URL}/api/auth/oauth/kakao/callback`, {
        params: { code },
    });
    return response.data;
};

const signInWithKakao = async (accessToken: string): Promise<KakaoLoginResponse> => {
    const response = await fetchInstance.post<KakaoLoginResponse>("/api/auth/kakao", {
        accessToken,
    });
    return response.data;
};

export const useSignIn = () => {
    return useMutation({
        mutationFn: async (code: string) => {
            const tokenResponse = await getAccessTokenByCode(code);
            if (tokenResponse.code !== 0) {
                throw new Error("카카오 토큰 발급 실패: " + tokenResponse.message);
            }

            const loginResponse = await signInWithKakao(tokenResponse.value.accessToken);
            if (loginResponse.code !== 0) {
                throw new Error("로그인 실패: " + loginResponse.message);
            }

            return loginResponse;
        },
    });
};
