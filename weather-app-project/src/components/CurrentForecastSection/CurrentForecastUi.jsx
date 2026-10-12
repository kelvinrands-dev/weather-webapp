import dayjs from "dayjs";
import { weatherCode } from "../../utils/weatherCode";
import "./CurrentForecastUi.css";

export function CurrentForecastUi({ cityLocation, weatherForecast }) {
  const { name, country } = cityLocation;

  const currentWeather = weatherForecast.current;
  const currentWeatherUnits = weatherForecast.current_units;

  return (
    <section className="current-forecast-container">
      <div className="current-forecast-bg">
        <div>
          <p className="city-and-country">{`${name}, ${country}`}</p>
          <p className="today-date">
            {dayjs(currentWeather.time).format("dddd, MMM D, YYYY")}
          </p>
        </div>
        <div>
          <img
            className="weather-icon"
            src={weatherCode(currentWeather.weather_code)}
          ></img>
          <p className="big-temperature">{`${Math.round(currentWeather.temperature_2m)}°`}</p>
        </div>
      </div>

      <div className="current-forecast-grid">
        <div className="current-forecast-box"></div>
        <div className="current-forecast-box"></div>
        <div className="current-forecast-box"></div>
        <div className="current-forecast-box"></div>
      </div>
    </section>
  );
}
