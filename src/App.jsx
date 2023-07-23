import { useState } from "react";
import Header from "./components/Header";
function App() {
    const [darkmode, setDarkmode] = useState(false);

    return <main className={darkmode ? "darkMode" : "lightMode"}>
        <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
    </main>;
}

export default App;
