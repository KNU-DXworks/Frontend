import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignIn } from "@/hooks/auth/useSignIn";
import { useAuthStore } from "@/stores/useAuthStore";

export const RedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { mutate: signIn } = useSignIn();
    const { setAccessToken, setRefreshToken } = useAuthStore();
    const isCalledRef = useRef(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get("code");
        if (!code || isCalledRef.current) return;

        isCalledRef.current = true;

        signIn(code, {
            onSuccess: (res) => {
                console.log("로그인 성공, 토큰:", res.accessToken);
                setAccessToken(res.accessToken);
                setRefreshToken(res.refreshToken);
                navigate("/");
            },
            onError: (err) => {
                alert("로그인 실패: " + err.message);
            },
        });
    }, []);

    return <div>로그인 중...</div>;
};
