import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./app/layout/RootLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/home/HomePage";
import { CommunityPage } from "./pages/community/CommunityPage";
import { UserPage } from "./pages/profile/UserPage";
import { MyPage } from "./pages/profile/MyPage";
import { GoalRegisterPage } from "./pages/profile/GoalRegisterPage";
import { TransactionRegisterPage } from "./pages/transaction/TransactionRegisterPage";
import { ChatPage } from "./pages/chat/ChatPage";
import { PostRegisterPage } from "./pages/post/PostRegisterPage";
import { InbodyRegisterPage } from "./pages/profile/InbodyRegisterPage";
import { ProtectedRoute } from "./app/layout/ProtectedRoute";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>

                <Route path="login" element={<LoginPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route index element={<HomePage />} />

                    <Route path="community/:type" element={<CommunityPage />} />

                    <Route path="profile/:id" element={<UserPage />} />
                    <Route path="profile/my" element={<MyPage />} />

                    <Route path="goal/register" element={<GoalRegisterPage />} />

                    <Route path="transaction/register" element={<TransactionRegisterPage />} />

                    <Route path="chat/:id" element={<ChatPage />} />

                    <Route path="post/register" element={<PostRegisterPage />} />
                    
                    <Route path="inbody/register" element={<InbodyRegisterPage />} />
                </Route>
            </Route>
        </Routes>
    );
};
