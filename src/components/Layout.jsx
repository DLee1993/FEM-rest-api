import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const initialTheme = localStorage.getItem("theme") || "lightMode";
    const [theme, setTheme] = useState(initialTheme);

    return (
        <main className={theme === "darkMode" ? "darkMode" : "lightMode"}>
            <h1 className="fluid-lg font-extrabold sr-only">Countries Rest Api</h1>
            <Header theme={theme} setTheme={setTheme} />
            <Outlet />
        </main>
    );
};

export default Layout;
