import PropTypes from "prop-types";

const CountryArticle = ({ country }) => {
    const { flags } = country;
    return (
        <li>
            <a href={`${country.name.common}`}>
                <article className="h-[400px] bg-white rounded">
                    <figure className="h-2/5 border-b-2 border-gray-50">
                        <img src={flags.png} alt="country flag" className="h-full w-full" />
                    </figure>
                    <section
                        id="country_details"
                        className="h-3/5 flex flex-col justify-evenly items-start p-5"
                    >
                        <h1 className="fluid-lg font-extrabold h-1/3 flex justify-start items-center">
                            {country.name.common}
                        </h1>
                        <ul className="h-2/3 flex flex-col justify-evenly items-start">
                            <li>
                                <span className="font-semibold"> Population: </span>{" "}
                                {country.population}
                            </li>
                            <li>
                                <span className="font-semibold"> Region: </span> {country.region}
                            </li>
                            <li>
                                <span className="font-semibold"> Capital: </span> {country.capital}
                            </li>
                        </ul>
                    </section>
                </article>
            </a>
        </li>
    );
};

CountryArticle.propTypes = {
    country: PropTypes.object,
};

export default CountryArticle;
