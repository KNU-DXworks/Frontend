import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignIn } from "@/hooks/auth/useSignIn";
import { useAuthStore } from "@/stores/useAuthStore";

export const OAuthCallbackPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { mutate: signIn } = useSignIn();
    const { setAccessToken, setRefreshToken } = useAuthStore();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get("code");
        if (!code) return;

        signIn(code, {
            onSuccess: (res) => {
                console.log("로그인 성공, 토큰:", res.value.accessToken);
                setAccessToken(res.value.accessToken);
                setRefreshToken(res.value.refreshToken);
                navigate("/");
            },
            onError: (err) => {
                alert("로그인 실패: " + err.message);
            },
        });
    }, [location.search, signIn, setAccessToken, navigate, setRefreshToken]);

    return <div>로그인 중...</div>;
};
