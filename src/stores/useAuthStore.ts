import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    refreshToken: string | null;
    setRefreshToken: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            accessToken: null,
            refreshToken: null,
            setAccessToken: (token: string) => {
                set({ isLoggedIn: true, accessToken: token });
            },
            setRefreshToken: (token: string) => {
                set({ refreshToken: token });
            },
            logout: () => {
                set({ isLoggedIn: false, accessToken: null, refreshToken: null });
            },
        }),
        {
            name: "auth-storage",
            partialize: (state: AuthState) => ({
                isLoggedIn: state.isLoggedIn,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            }),
        },
    ),
);
