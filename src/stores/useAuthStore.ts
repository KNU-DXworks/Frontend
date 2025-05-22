import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    refreshToken: string | null;
    setRefreshToken: (token: string) => void;
    privateKey: string | null;
    setPrivateKey: (key: string) => void;
    logout: () => void;
}

export const useAuthStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            accessToken: null,
            refreshToken: null,
            privateKey: null,

            setAccessToken: (token: string) => {
                set({ isLoggedIn: true, accessToken: token });
            },
            setRefreshToken: (token: string) => {
                set({ refreshToken: token });
            },
            setPrivateKey: (key: string) => {
                set({ privateKey: key });
            },

            logout: () => {
                set({ isLoggedIn: false, accessToken: null, refreshToken: null, privateKey: null, });
            },
        }),
        {
            name: "auth-storage",
            partialize: (state: AuthState) => ({
                isLoggedIn: state.isLoggedIn,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                privateKey: state.privateKey,
            }),
        },
    ),
);
