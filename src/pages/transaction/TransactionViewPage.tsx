import { useState } from "react";
import { Header } from "@/components/common/Header";
import { Title } from "@/components/common/Title";
import { TransactionItem } from "@/components/transaction/TransactionItem";
import { formatShortDate } from "@/app/utils/date";
import { useTransfer } from "@/hooks/transaction/useTransfer";
// import { useViewTransactionItem } from "@/hooks/transaction/useViewTransactionItem";

export const TransactionViewPage = () => {
    const [isFollower, setIsFollower] = useState(true);
    // const { data: d } = useViewTransactionItem();
    const { handleTransferClick } = useTransfer();

    const data = {
        following: [
            {
                transactionId: 1,
                userId: 3,
                name: "조민주",
                profileImg:
                    "http://img1.kakaocdn.net/thumb/R110x110.q70/?fname=http://t1.kakaocdn.net/account_images/default_profile.jpeg",
                walletAddress: "0xabc123456789abcdef",
                transactionPeriod: 30,
                amount: 0.51354,
                isTransfered: false,
                contractDate: "2024-05-01T00:00:00",
                expirationDate: "2024-05-31T00:00:00",
            },
            {
                transactionId: 2,
                userId: 4,
                name: "김현우",
                profileImg: undefined,
                walletAddress: "0xdef456789abcdef123",
                transactionPeriod: 15,
                amount: 0.51354,
                isTransfered: true,
                contractDate: "2024-05-05T00:00:00",
                expirationDate: "2024-05-20T00:00:00",
            },
        ],
        follower: [
            {
                transactionId: 3,
                userId: 5,
                name: "이서윤",
                profileImg: "https://via.placeholder.com/150",
                walletAddress: "0xghi789abcdef123456",
                transactionPeriod: 10,
                amount: 0.51354,
                isTransfered: false,
                contractDate: "2024-05-10T00:00:00",
                expirationDate: "2024-05-20T00:00:00",
            },
            {
                transactionId: 4,
                userId: 6,
                name: "박지훈",
                profileImg: "https://via.placeholder.com/150",
                walletAddress: "0xjkl0123456789abcdef",
                transactionPeriod: 7,
                amount: 0.51354,
                isTransfered: true,
                contractDate: "2024-05-12T00:00:00",
                expirationDate: "2024-05-19T00:00:00",
            },
        ],
    };

    return (
        <div className="flex flex-col gap-8">
            <Header />

            <Title title="거래 내역" subTitle="거래를 등록한 사용자들과 송금 여부를 볼 수 있어요" />

            <div className="flex flex-row justify-evenly">
                <button
                    onClick={() => setIsFollower(true)}
                    className={`font-bold pb-1 border-b-2 ${
                        isFollower ? "border-black text-black" : "border-lightGray text-lightGray"
                    }`}
                >
                    나를 구독한 사용자
                </button>

                <button
                    onClick={() => setIsFollower(false)}
                    className={`font-bold pb-1 border-b-2 ${
                        !isFollower ? "border-black text-black" : "border-lightGray text-lightGray"
                    }`}
                >
                    내가 구독한 사용자
                </button>
            </div>

            {isFollower && (
                <div className="flex flex-col gap-2">
                    {data.follower.map((item) => (
                        <TransactionItem
                            key={item.transactionId}
                            userName={item.name}
                            profileImg={item.profileImg}
                            walletAddress={item.walletAddress}
                            amount={item.amount}
                            isTransfered={item.isTransfered}
                            contractDate={formatShortDate(item.contractDate)}
                            expiredDate={formatShortDate(item.expirationDate)}
                            isIncome={true}
                            label={!item.isTransfered === true ? "입금 완료" : "입금 대기"}
                        />
                    ))}
                </div>
            )}

            {!isFollower && (
                <div className="flex flex-col gap-2">
                    {data.following.map((item) => (
                        <TransactionItem
                            key={item.transactionId}
                            userName={item.name}
                            profileImg={item.profileImg}
                            walletAddress={item.walletAddress}
                            amount={item.amount}
                            isTransfered={item.isTransfered}
                            contractDate={formatShortDate(item.contractDate)}
                            expiredDate={formatShortDate(item.expirationDate)}
                            isIncome={false}
                            label={item.isTransfered === true ? "송금 완료" : "송금 대기"}
                            onClick={() => {
                                if (!item.isTransfered) {
                                    handleTransferClick({ walletAddress: item.walletAddress });
                                } else {
                                    alert("이미 송금이 완료되었습니다.");
                                }
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
