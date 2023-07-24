import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [darkmode, setDarkmode] = useState(false);
    return (
        <main className={darkmode ? "darkMode" : "lightMode"}>
            <Header darkmode={darkmode} setDarkmode={setDarkmode} />
            <Outlet />
        </main>
    );
};

export default Layout;
