import dayjs from "dayjs";
import "./DailyForecastUi.css";
import { DayBox } from "./DayBox";

export function DailyForecastUi({ weatherForecast, appIsLoading }) {
  let dailyCombined;

  if (!appIsLoading) {
    const dailyWeather = weatherForecast.daily;
    const { time, weather_code, temperature_2m_max, temperature_2m_min } =
      dailyWeather;

    dailyCombined = time.map((t, index) => {
      return {
        date: dayjs(t).format("ddd"),
        weatherCode: weather_code[index],
        tempMax: temperature_2m_max[index],
        tempMin: temperature_2m_min[index],
      };
    });
  }

  const loadArr = Array.from({ length: 7 });
  return (
    <section className="daily-forecast-section">
      <p>Daily forecast</p>
      <div className="daily-forecast-grid">
        {appIsLoading
          ? loadArr.map((_, index) => {
              return <DayBox key={index} appIsLoading={appIsLoading} />;
            })
          : dailyCombined.map((day) => {
              return (
                <DayBox
                  key={day.date}
                  date={day.date}
                  weatherCode={day.weatherCode}
                  tempMax={day.tempMax}
                  tempMin={day.tempMin}
                  appIsLoading={appIsLoading}
                />
              );
            })}
      </div>
    </section>
  );
}
