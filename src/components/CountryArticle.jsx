import PropTypes from "prop-types";

const CountryArticle = ({ country }) => {
    console.log(country)
    const { flags, name, population, region, capital } = country;
    return (
        <li className="w-[90%] max-w-[320px] mb-10">
            <a href={`${country.name.common}`}>
                <article className="h-[425px] bg-white rounded">
                    <figure className="h-2/5">
                        <img src={flags.png} alt="country flag" className="h-full w-full" />
                    </figure>
                    <section
                        id="country_details"
                        className="h-3/5 flex flex-col justify-evenly items-start p-5"
                    >
                        <h1 className="fluid-lg font-extrabold h-1/3 flex justify-start items-center">
                            {name.common}
                        </h1>
                        <ul className="h-2/3 flex flex-col justify-evenly items-start">
                            <li>
                                <span className="font-semibold"> Population: </span> {population}
                            </li>
                            <li>
                                <span className="font-semibold"> Region: </span> {region}
                            </li>
                            <li>
                                <span className="font-semibold"> Capital: </span> {capital}
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
