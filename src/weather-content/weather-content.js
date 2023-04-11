import { useState, useEffect } from "react";
import CurrentWeather from './current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../weather-content/search/api';

import ForecastDaily from './forecast/forecast-daily';
import ForecastHours from './forecast/forecast-hours';
import Search from "./search/search";

const WeatherContent = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [forecastHours, setForecastHours] = useState(null);


    //  CURRENT CITY WEATHER
    useEffect(() => {
        const firstCurrentweatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=46.7667&lon=23.6&appid=${WEATHER_API_KEY}&units=metric`);
        const firstForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=46.7667&lon=23.6&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastHoursFetch = fetch(`${WEATHER_API_URL}/forecast?lat=46.7667&lon=23.6&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([firstCurrentweatherFetch, firstForecastFetch, forecastHoursFetch])
            .then(async (response) => {
                const firstWeatherResponse = await response[0].json();
                const firstForecastResponse = await response[1].json();
                const forecastHoursResponse = await response[2].json();


                setCurrentWeather({ city: "Cluj-Napoca, RO", ...firstWeatherResponse });
                setForecast({ city: "Cluj-Napoca, RO", ...firstForecastResponse });
                setForecastHours({ city: "Cluj-Napoca, RO", ...forecastHoursResponse })

            })
            .catch((err) => console.log(err));
    }, []);



    const onSearchChangeHandler = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastHoursFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch, forecastHoursFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();
                const forecastHoursResponse = await response[2].json();

                // Update the values after get the response
                setCurrentWeather({ city: searchData.label, ...weatherResponse }); //Crate a new object, extended with city and country code
                setForecast({ city: searchData.label, ...forecastResponse });
                setForecastHours({ city: searchData.label, ...forecastHoursResponse })
            })
            .catch((err) => console.log(err));
    }


    return (
        <div>
            {currentWeather && <CurrentWeather data={currentWeather} />}
            <Search onSearchChange={onSearchChangeHandler} />
            {forecast && <ForecastHours data={forecastHours} />}
            {forecast && <ForecastDaily data={forecast} />}
        </div>

    );
}

export default WeatherContent;