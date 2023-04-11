import { useTheme } from "../../context/theme-context";

const HOURS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

const ForecastHours = ({ data }) => {

    const currentTime = new Date().getHours();
    const forecastHours = HOURS.slice(currentTime, HOURS.length).concat(HOURS.slice(0, currentTime));

    const darkTheme = useTheme();

    return (
        <div className="container-hours">
            <label className={`container-hours__title heading-secondary ${darkTheme ? "night" : ''}`}>By hour</label>
            <div className="container-hours__bottom">
                {data.list.splice(0, 24).map((item, idx) => (
                    <div key={idx}>
                        <div className={`hour-item ${darkTheme ? "night" : ''}`}>
                            <img alt="weather" className="hour-item__icon-small" src={`icons/${item.weather[0].icon}.png`} />
                            <label className="hour-item__time">&#x1F555; {forecastHours[idx]}</label>
                            <label className="hour-item__description">{item.weather[0].description}</label>
                            <label className="hour-item__min-max">{Math.round(item.main.temp_min)}<span>&#176;</span>C / {" "}
                                {Math.round(item.main.temp_max)}<span>&#176;</span>C </label>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default ForecastHours;