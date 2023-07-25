import { useEffect, useState } from "react";
import reqs from "../api/countries";
import CountryArticle from "./CountryArticle";
import { BiSearch } from "react-icons/bi";
const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (region === "all" || region === "" || search === "") {
                try {
                    const data = await reqs.all();
                    setCountries(data);
                } catch (error) {
                    console.log(error);
                }
            }

            if (region) {
                try {
                    const data = await reqs.region(region);
                    setCountries(data);
                } catch (error) {
                    console.log(error);
                }
            }

            if (search) {
                console.log(search);
                try {
                    const data = await reqs.name(search);
                    setCountries(data);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        fetchData();
    }, [region, search]);

    return (
        <section className="px-2 sm:px-5">
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
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </fieldset>
            </section>
            <section id="filteredList">
                <ul className="grid grid-cols-4 gap-10">
                    {countries.map((country, index) => (
                        <CountryArticle country={country} key={index} />
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default CountriesList;

//https://github.com/jerson100/Rest-countries-api/blob/master/src/components/common/CountriesList/CountriesList.jsx
