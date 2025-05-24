import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";

WebApp.ready();

if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    console.log("initData:", window.Telegram.WebApp.initData);
    console.log("user:", window.Telegram.WebApp.initDataUnsafe?.user);
} else {
    console.warn("Telegram WebApp is not available.");
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
