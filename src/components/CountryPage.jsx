import { useEffect, useState } from "react";
import data from "../data.json";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const CountryPage = () => {
    const { country } = useParams();
    const navigate = useNavigate();
    const [countryInfo, setCountryInfo] = useState();
    const {
        name,
        nativeName,
        flags,
        population,
        region,
        subregion,
        capital,
        borders,
        topLevelDomain,
        currencies,
        languages,
    } = countryInfo || {};

    useEffect(() => {
        if (country.length <= 3) {
            const dataFilter = data.filter((dataPoint) => dataPoint.alpha3Code === country);
            setCountryInfo(dataFilter[0]);
        } else {
            const dataFilter = data.filter(
                (dataPoint) => dataPoint.name.toLowerCase() === country.toLowerCase()
            );
            setCountryInfo(dataFilter[0]);
        }
    }, [country]);

    return (
        <section className="max-w-[1400px] mx-auto px-2 md:px-5">
            <button
                onClick={() => navigate(-1)}
                id="backBtn"
                className="flex justify-evenly items-center px-7 py-2 my-10 rounded"
            >
                <BsArrowLeft />
                <span className="ml-2 font-semibold">Back</span>
            </button>
            <section id="country_info">
                {countryInfo ? (
                    <article className="flex justify-between items-start md:items-center flex-col lg:flex-row min-h-[300px] mx-auto">
                        <figure className="w-full md:w-3/4 lg:w-1/2">
                            <img src={flags.png} alt="country flag" className="w-full" />
                        </figure>
                        <section className="w-full md:w-3/4 lg:w-2/3 h-full py-5 lg:p-5">
                            <h1 className="fluid-xl font-extrabold">{name}</h1>
                            <section className="flex justify-between items-start md:w-[90%] my-10">
                                <ul>
                                    <li>
                                        <span className="font-bold">Native Name:</span> {nativeName}
                                    </li>
                                    <li>
                                        <span className="font-bold">Population: </span>
                                        {population}
                                    </li>
                                    <li>
                                        <span className="font-bold">Region: </span>
                                        {region}
                                    </li>
                                    <li>
                                        <span className="font-bold">Sub Region: </span>
                                        {subregion}
                                    </li>
                                    <li>
                                        <span className="font-bold">Capital: </span>
                                        {capital}
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className="font-bold">Top Level Domain: </span>
                                        {topLevelDomain}
                                    </li>
                                    <li>
                                        <span className="font-bold">Currencies:</span>{" "}
                                        {currencies?.map((curr, index) => (
                                            <span key={index}>
                                                {curr.name}
                                                {index === currencies.length - 1 ? "" : ", "}
                                            </span>
                                        ))}
                                    </li>
                                    <li>
                                        <span className="font-bold">Languages:</span>{" "}
                                        {languages?.map((lang, index) => (
                                            <span key={index}>
                                                {lang.name}
                                                {index === languages.length - 1 ? "" : ", "}
                                            </span>
                                        ))}
                                    </li>
                                </ul>
                            </section>
                            <section className="flex justify-start items-center flex-wrap">
                                <p className="font-bold mr-10">Border Countries: </p>
                                <ul className="flex justify-start items-center flex-wrap">
                                    {borders?.map((border, index) => (
                                        <li key={index} className="mt-5">
                                            <Link
                                                to={`/FEM-rest-api/${border}`}
                                                className="borderCountry mx-2 px-7 py-1"
                                            >
                                                {border}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    </article>
                ) : null}
            </section>
        </section>
    );
};

export default CountryPage;
