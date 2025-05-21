// components/profile/UnregisteredPrivateKey.tsx
import { Box } from "@/components/common/Box";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useRef } from "react";

interface UnregisteredPrivateKeyProps {
    onRegister: (value: string) => void;
}

export const UnregisteredPrivateKey = ({ onRegister }: UnregisteredPrivateKeyProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleRegisterClick = () => {
        const value = inputRef.current?.value.trim();
        if (!value) return alert("Private Key를 입력해주세요.");
        onRegister(value);
    };

    return (
        <Drawer>
            <Box className="gap-4 flex-col">
                <span className="text-darkGray font-bold">Private Key</span>
                <div className="flex flex-col">
                    <span className="text-darkGray text-sm">아직 Private Key가 등록되지 않았어요</span>
                    <span className="text-darkGray text-sm">등록하고 지갑 기능을 이용해보세요</span>
                </div>

                <DrawerTrigger asChild>
                    <Button type="primary" label="Private Key 등록" />
                </DrawerTrigger>
            </Box>

            <DrawerContent>
                <DrawerHeader className="flex flex-col gap-4">
                    <DrawerTitle>Private Key 등록</DrawerTitle>
                    <DrawerDescription className="text-darkGray">개인 키는 안전하게 보관하세요.</DrawerDescription>
                    <Input ref={inputRef} placeholder="0x..." />
                </DrawerHeader>
                <DrawerFooter>
                    <div className="flex flex-row gap-2">
                        <Button type="primary" size="m" label="등록 완료" onClick={handleRegisterClick} />
                        <DrawerClose asChild>
                            <Button type="secondary" size="m" label="취소" />
                        </DrawerClose>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
