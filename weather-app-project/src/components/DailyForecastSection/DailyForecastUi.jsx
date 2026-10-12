import dayjs from "dayjs";
import "./DailyForecastUi.css";
import { DayBox } from "./DayBox";

export function DailyForecastUi({ weatherForecast }) {
  const dailyWeather = weatherForecast.daily;

  const { time, weather_code, temperature_2m_max, temperature_2m_min } =
    dailyWeather;

  const dailyCombined = time.map((t, index) => {
    return {
      date: dayjs(t).format("ddd"),
      weatherCode: weather_code[index],
      tempMax: temperature_2m_max[index],
      tempMin: temperature_2m_min[index],
    };
  });

  return (
    <section className="daily-forecast-section">
      <p>Daily forecast</p>
      <div className="daily-forecast-grid">
        {dailyCombined.map((day) => {
          return (
            <DayBox
              key={day.date}
              date={day.date}
              weatherCode={day.weatherCode}
              tempMax={day.tempMax}
              tempMin={day.tempMin}
            />
          );
        })}
      </div>
    </section>
  );
}
