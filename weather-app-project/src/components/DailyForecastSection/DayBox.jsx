import { weatherCodeConverter } from "../../utils/weatherCodeConverter";
import "./DayBox.css";

export function DayBox({ date, weatherCode, tempMax, tempMin, appIsLoading }) {
  return (
    <>
      {appIsLoading ? (
        <div className="weather-box day-box"></div>
      ) : (
        <div className="weather-box day-box">
          <p>{date}</p>
          <img src={weatherCodeConverter(weatherCode)} />
          <div className="day-box-temps">
            <p>{`${Math.round(tempMax)}°`}</p>
            <p>{`${Math.round(tempMin)}°`}</p>
          </div>
        </div>
      )}
    </>
  );
}
