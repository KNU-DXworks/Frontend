import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Router } from "./router";

function App() {
    return (
        <BrowserRouter>
            <Router></Router>
        </BrowserRouter>
    );
}

export default App;
