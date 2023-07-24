import { useEffect, useState } from "react";
import reqs from "../api/countries";
import CountryArticle from "./CountryArticle";
const CountriesList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await reqs.all();
                setCountries(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    });
    return (
        <ul className="flex flex-wrap">
            {countries.map((country, index) => (
                <CountryArticle country={country} key={index} />
            ))}
        </ul>
    );
};

export default CountriesList;

//https://github.com/jerson100/Rest-countries-api/blob/master/src/components/common/CountriesList/CountriesList.jsx
