import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CountriesList from "./components/CountriesList";
import CountryPage from "./components/CountryPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<CountriesList />} />
                <Route path=":country" element={<CountryPage />} />
            </Route>
        </Routes>
    );
}

export default App;
