import { useEffect, useState } from "react";
import reqs from "../api/countries";
import { useParams } from "react-router-dom";
const CountryPage = () => {
    const [countryInfo, setCountryInfo] = useState();
    const { name } = useParams();

    console.log(countryInfo)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await reqs.country(name);
                setCountryInfo(data);
            } catch (error) {
                throw new Error(error);
            }
        };

        fetchData();
    }, [name]);

    return <div>CountryPage</div>;
};

export default CountryPage;
