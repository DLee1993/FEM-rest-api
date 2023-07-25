import PropTypes from "prop-types";

const CountryArticle = ({ country }) => {
    return (
        <li>
            <a href={`${country.name.common}`}>
                <article>CountryArticle</article>
            </a>
        </li>
    );
};

CountryArticle.propTypes = {
    country: PropTypes.object,
};

export default CountryArticle;
