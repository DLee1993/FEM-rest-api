import PropTypes from "prop-types";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

const Header = ({ darkmode, setDarkmode }) => {
    return (
        <header className="h-20">
            <h1>Where in the world?</h1>
            <button onClick={() => setDarkmode((darkmode) => !darkmode)} className="flex">
                {darkmode ? (
                    <>
                        <BsCloudSunFill />
                        <span>light mode</span>
                    </>
                ) : (
                    <>
                        <BsCloudMoonFill />
                        <span>dark mode</span>
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
