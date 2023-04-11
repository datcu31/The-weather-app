import { useTheme } from "../context/theme-context";
import WeatherContent from "../weather-content/weather-content";
import Footer from "./footer";

const Weather = () => {
    const darkTheme = useTheme();

    return (
        <div className={`weather ${darkTheme ? "night" : ''}`}>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className={`heading-secondary ${darkTheme ? "night" : ''}`}>
                    Today
                </h2>
            </div>
            <WeatherContent />
            <Footer />
        </div>
    );
}

export default Weather;