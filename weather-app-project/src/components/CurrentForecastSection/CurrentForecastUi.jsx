import dayjs from "dayjs";
import { weatherCodeConverter } from "../../utils/weatherCodeConverter";
import { CurrentForecastGrid } from "./CurrentForecastGrid";
import "./CurrentForecastUi.css";

export function CurrentForecastUi({
  cityLocation,
  weatherForecast,
  appIsLoading,
}) {
  const { name, country } = cityLocation;

  const currentWeather = weatherForecast.current;
  const currentWeatherUnits = weatherForecast.current_units;
  console.log(appIsLoading);

  return (
    <section className="current-forecast-section">
      {appIsLoading ? (
        <div className="current-forecast-bg currrent-forecast-bg-loading">
          <div>
            <img src="images/icon-loading.svg" />
            <p>Loading</p>
          </div>
        </div>
      ) : (
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
              src={weatherCodeConverter(currentWeather.weather_code)}
            ></img>
            <p className="big-temperature">{`${Math.round(currentWeather.temperature_2m)}°`}</p>
          </div>
        </div>
      )}

      <CurrentForecastGrid
        currentWeather={currentWeather}
        currentWeatherUnits={currentWeatherUnits}
        appIsLoading={appIsLoading}
      />
    </section>
  );
}
