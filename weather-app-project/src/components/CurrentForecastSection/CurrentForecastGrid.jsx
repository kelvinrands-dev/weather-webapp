import "./CurrentForecastGrid.css";

export function CurrentForecastGrid({ currentWeather, currentWeatherUnits }) {
  const unit = currentWeatherUnits;
  return (
    <div className="current-forecast-grid">
      <div className="weather-box current-forecast-box">
        <p>Feels Like</p>
        <p>{`${Math.round(currentWeather.apparent_temperature)}°`}</p>
      </div>
      <div className="weather-box current-forecast-box">
        <p>Humidity</p>
        <p>{`${Math.round(currentWeather.relative_humidity_2m)}${unit.relative_humidity_2m}`}</p>
      </div>
      <div className="weather-box current-forecast-box">
        <p>Wind</p>
        <p>{`${Math.round(currentWeather.wind_speed_10m)} ${unit.wind_speed_10m}`}</p>
      </div>
      <div className="weather-box current-forecast-box">
        <p>Precipitation</p>
        <p>{`${Math.round(currentWeather.precipitation)} ${unit.precipitation}`}</p>
      </div>
    </div>
  );
}
