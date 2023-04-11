import { useTheme } from "../context/theme-context";
import SwitchButton from "./switch-button";


const Header = () => {
    const darkTheme = useTheme();

    return (
        <header className={`header ${darkTheme ? "night" : ''}`}>
            <div className="header__logo-box">
                <img src={require("../images/sun.png")} alt="Logo" className="header__logo" />
                <p className="header__logo-text">the weather app</p>
            </div>
            <div className="header__button">
                <SwitchButton />
            </div>
            <div className="header__text-box">
                <h1 className={`heading-primary ${darkTheme ? "night" : ''}`}>
                    <span className="heading-primary--main">weather</span>
                    <span className="heading-primary--sub">all you need to konw</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;