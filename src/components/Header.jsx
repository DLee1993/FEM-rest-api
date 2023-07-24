import PropTypes from "prop-types";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

const Header = ({ darkmode, setDarkmode }) => {
    return (
        <header className="h-20 flex justify-between items-center px-2 sm:px-5">
            <h1 className="fluid-lg font-bold">Where in the world?</h1>
            <button
                onClick={() => setDarkmode((darkmode) => !darkmode)}
                className="flex capitalize"
            >
                {darkmode ? (
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
    darkmode: PropTypes.bool,
    setDarkmode: PropTypes.func,
};

export default Header;
