import { Box } from "@/components/common/Box";
import { Button } from "@/components/common/Button";

export const UnregisteredWallet = () => {
    return (
        <Box className="gap-4">
            <span className="text-darkGray font-bold">나의 지갑</span>
            <div className="flex flex-col">
                <span className="text-darkGray text-sm">아직 지갑이 등록되지 않았어요</span>
                <span className="text-darkGray text-sm">지갑을 등록해보세요</span>
            </div>
            <Button type="primary" label="지갑 등록하러 가기"></Button>
        </Box>
    );
};
