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

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout></RootLayout>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/community/:type" element={<CommunityPage></CommunityPage>}></Route>

                <Route path="/profile/:id" element={<UserPage></UserPage>}></Route>
                <Route path="/profile/my" element={<MyPage></MyPage>}></Route>

                <Route path="/goal/register" element={<GoalRegisterPage></GoalRegisterPage>}></Route>

                <Route
                    path="/transaction/register"
                    element={<TransactionRegisterPage></TransactionRegisterPage>}
                ></Route>

                <Route path="/chat/:id" element={<ChatPage></ChatPage>}></Route>
                <Route path="/post/register" element={<PostRegisterPage></PostRegisterPage>}></Route>
                <Route path="/inbody/register" element={<InbodyRegisterPage></InbodyRegisterPage>}></Route>
            </Route>
        </Routes>
    );
};
