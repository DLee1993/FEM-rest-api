import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

const Header = ({ theme, setTheme }) => {
    const baseURL = "/FEM-rest-api/";
    const toggleTheme = () => {
        const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <header className="h-20 flex justify-between items-center px-2 sm:px-5 max-w-[1400px] mx-auto">
            <Link to={baseURL}>
                <h1 className="fluid-lg font-bold">Where in the world?</h1>
            </Link>
            <button onClick={toggleTheme} className="flex capitalize">
                {theme === "darkMode" ? (
                    <>
                        <BsCloudSunFill />
                        <span className="ml-2 font-semibold">light mode</span>
                    </>
                ) : (
                    <>
                        <BsCloudMoonFill />
                        <span className="ml-2 font-semibold">dark mode</span>
                    </>
                )}
            </button>
        </header>
    );
};

Header.propTypes = {
    theme: PropTypes.string,
    setTheme: PropTypes.func,
};

export default Header;
