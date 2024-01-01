import PropTypes from "prop-types";

const CountryArticle = ({ country, id }) => {
    const { flags, name, population, region, capital } = country;
    return (
        <article className="mb-10 hover:shadow-lg hover:scale-105 transition-all">
            <h2 className="fluid-lg font-extrabold sr-only">
                {name}
            </h2>
            <a href={`${name}`}>
                <article className="h-[400px] bg-white rounded">
                    <figure className="h-2/5">
                        <img src={flags.png} alt="country flag" className="h-full w-full" />
                    </figure>
                    <section
                        id={`country_details-${id}`}
                        className="h-3/5 flex flex-col justify-evenly items-start p-5"
                    >
                        <h2 className="fluid-lg font-extrabold h-1/3 flex justify-start items-center">
                            {name}
                        </h2>
                        <ul className="flex flex-col justify-evenly items-start">
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
        </article>
    );
};

CountryArticle.propTypes = {
    country: PropTypes.object,
    id: PropTypes.number,
};

export default CountryArticle;
