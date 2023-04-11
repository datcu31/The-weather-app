import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useTheme } from "../../context/theme-context";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const ForecastDaily = ({ data }) => {
    const today = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, today));

    const darkTheme = useTheme();

    return (
        <div className="container-daily">
            <label className={`container-daily__title heading-secondary ${darkTheme ? "night" : ''}`}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={`daily-item ${darkTheme ? "night" : ''}`}>
                                    <img alt="weather" className="daily-item__icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="daily-item__day">{forecastDays[idx]}</label>
                                    <label className="daily-item__description">{item.weather[0].description}</label>
                                    <label className="daily-item__min-max">{Math.round(item.main.temp_min)}<span>&#176;</span>C / {" "}
                                        {Math.round(item.main.temp_max)}<span>&#176;</span>C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid__item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)} <span>&#176;</span>C</label>
                                </div>
                                <div className="daily-details-grid__item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid__item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid__item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid__item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default ForecastDaily;