import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./app/layout/RootLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/home/HomePage";
import { CommunityPage } from "./pages/community/CommunityPage";
import { UserPage } from "./pages/user/UserPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout></RootLayout>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/community/:type" element={<CommunityPage></CommunityPage>}></Route>

                <Route path="/profile/:id" element={<UserPage></UserPage>}></Route>
            </Route>
        </Routes>
    );
};
