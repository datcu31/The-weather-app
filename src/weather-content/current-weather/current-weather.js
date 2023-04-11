const CurrentWeather = ({ data }) => {


    return (
        <div className="current-weather">
            <div className="current-weather__top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="current-weather__bottom">
                <p className="temperature">{Math.round(data.main.temp)}<span>&#176;</span>C</p>
                <div className="details">
                    <div className="details__parameter">
                        <span className="details__parameter--label">Details</span>
                    </div>
                    <div className="details__parameter">
                        <span className="details__parameter--label">Feels like</span>
                        <span className="details__parameter--value">{Math.round(data.main.feels_like)}<span>&#176;</span>C</span>
                    </div>
                    <div className="details__parameter">
                        <span className="details__parameter--label">Wind speed</span>
                        <span className="details__parameter--value">{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className="details__parameter">
                        <span className="details__parameter--label">Humidity</span>
                        <span className="details__parameter--value">{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="details__parameter">
                        <span className="details__parameter--label">Clouds</span>
                        <span className="details__parameter--value">{data.clouds.all} %</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CurrentWeather;