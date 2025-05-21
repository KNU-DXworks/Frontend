import { fetchInstance } from "@/app/config/axios";
import { queryClient } from "@/app/config/query";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router-dom";

interface ApiResponse<T> {
    code: number;
    message: string;
    value: T;
}

interface RegisterInbodyRequestBody {
    file: File;
}

type Gender = "MALE" | "FEMALE";
type BodyLevel = "BELOW_STANDARD" | "STANDARD" | "ABOVE_STANDARD";
type BodyType =
    | "SKINNY"
    | "SKINNY_MUSCLE"
    | "STANDARD"
    | "WEIGHT_LOSS"
    | "MUSCLE"
    | "OVERWEIGHT"
    | "OBESITY"
    | "MUSCULAR_OBESITY";

interface RegisterInbodyResponseBody {
    id: number;
    createdAt: string;
    inbodySheet: boolean;
    gender: Gender;
    height: number;
    weight: number;
    muscle: number;
    fat: number;
    bmi: number;
    muscleMassType: BodyLevel;
    fatMassType: BodyLevel;
    bodyType: BodyType;
    armGrade: BodyLevel;
    bodyGrade: BodyLevel;
    legGrade: BodyLevel;
}

const registerInbody = async (data: RegisterInbodyRequestBody, privateKey: string) => {
    const formData = new FormData();
    formData.append("file", data.file);

    const response = await fetchInstance.post<ApiResponse<RegisterInbodyResponseBody>>("/api/gemini", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-PRIVATE-KEY": privateKey,
        },
    });

    return response.data.value;
};

export const useRegisterInbody = () => {
    const [file, setFile] = useState<File | null>(null);
    const [latestInbody, setLatestInbody] = useState<RegisterInbodyResponseBody | null>(null);
    const handleFileChange = useCallback((f: File | null) => setFile(f), []);
    const navigate = useNavigate();
    const privateKey = useAuthStore((state) => state.privateKey);

    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            if (!file) throw new Error("파일이 선택되지 않았습니다.");
            if (!privateKey) throw new Error("PRIVATE_KEY 없음");

            const payload: RegisterInbodyRequestBody = {
                file,
            };

            return registerInbody(payload, privateKey);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["inbody"] });
            setLatestInbody(data);
        },
        onError: (error) => {
            const message = (error as Error).message;
            if (message === "PRIVATE_KEY 없음") {
                alert("Private Key가 등록되지 않았습니다. 먼저 등록해주세요.");
                navigate("/profile/my");
                return;
            }
            console.error("Error uploading Inbody:", message);
            alert("인바디 분석에 실패했습니다. 제대로 된 인바디 사진을 등록해주세요");
        },
    });

    const handleRegisterClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
        handleFileChange,
        handleRegisterClick,
        latestInbody,
        isPending,
    };
};
