import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <main className="w-full max-w-[480px] mx-auto p-[10px]">
            <Outlet></Outlet>
        </main>
    );
};
