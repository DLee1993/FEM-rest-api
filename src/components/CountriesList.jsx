import { useEffect, useState } from "react";
import CountryArticle from "./CountryArticle";
import { BiSearch } from "react-icons/bi";
import data from "../data.json";
const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (region === "all" || region === "" || search === "") {
            setCountries(data);
        }

        if (region) {
            const dataFilter = data.filter(
                (dataPoint) => dataPoint.region.toLowerCase() === region
            );
            setCountries(dataFilter);
        }

        if (search) {
            const dataFilter = data.filter((dataPoint) =>
                dataPoint.name.toLowerCase().includes(search.toLowerCase())
            );
            setCountries(dataFilter);
        }
    }, [region, search]);

    return (
        <section className="max-w-[1400px] mx-auto px-2 md:px-5">
            <section
                id="searchFilters"
                className="flex justify-between items-start flex-col sm:flex-row my-10"
            >
                <fieldset className="flex justify-center items-center bg-white w-[300px] md:w-[400px]">
                    <label htmlFor="search" className="sr-only">
                        search input
                    </label>
                    <BiSearch className="h-5 w-5 mx-2" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full py-3 pl-1"
                        type="text"
                        id="search"
                        aria-label="search for a country"
                        placeholder="Search for a country..."
                    />
                </fieldset>
                <fieldset className="mt-10 sm:mt-0">
                    <label htmlFor="regionSelect" className="sr-only">
                        select a region
                    </label>
                    <select
                        name="regionSelect"
                        id="regionSelect"
                        value={region}
                        onChange={(e) => {
                            setRegion(e.target.value);
                        }}
                        className="px-2 py-3"
                    >
                        <option value="" hidden>
                            Filter by region
                        </option>
                        <option value="">All</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </fieldset>
            </section>
            <section id="filteredList">
                <ul className="flex justify-center sm:justify-between items-center flex-wrap">
                    {countries.map((country, index) => (
                        <CountryArticle country={country} key={index} />
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default CountriesList;
