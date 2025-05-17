// src/hooks/post/useRegisterPost.ts
import { useState, useRef, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchInstance } from "@/app/config/axios";

interface RegisterPostRequestBody {
    userId: number;
    content: string;
    postImg: string;
}

interface UseRegisterPostProps {
    communityId: string;
}

const registerPost = async (isAll: boolean, communityId: string, data: RegisterPostRequestBody): Promise<void> => {
    const url = isAll ? `/api/communities/${communityId}` : "/api/posts";
    const response = await fetchInstance.post(url, data);
    return response.data;
};

export const useRegisterPost = ({ communityId }: UseRegisterPostProps) => {
    const [isAll, setIsAll] = useState<boolean>(true);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = useCallback((f: File | null) => setFile(f), []);

    const uploadFile = useCallback(async (f: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", f);
        const res = await fetchInstance.post("/api/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data.url as string;
    }, []);

    // 게시물 등록
    const { mutate } = useMutation({
        mutationFn: async () => {
            const payload: RegisterPostRequestBody = {
                userId: 1,
                content: contentRef.current?.value ?? "",
                postImg: "Afsd",
            };
            console.log(payload);
            return registerPost(isAll, communityId, payload);
        },
        onSuccess: () => {
            alert("게시물을 성공적으로 등록하였습니다!");
            setIsAll(true);
            if (contentRef.current) contentRef.current.value = "";
            setFile(null);
        },
        onError: (err) => {
            console.error("등록 실패:", err);
            alert("게시물 등록에 실패하였습니다.");
        },
    });

    const handleRegisterClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
        isAll,
        setIsAll,
        contentRef,
        handleFileChange,
        handleRegisterClick,
    };
};
