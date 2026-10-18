import { useState } from "react";
import dayjs from "dayjs";
import { DaysDrop } from "./DaysDrop";
import { HourFlex } from "./HourFlex";
import "./HourlyForecastUi.css";

export function HourlyForecastUi({ weatherForecast, appIsLoading }) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  let activeDay;
  let hourObj;

  if (!appIsLoading) {
    const weekDays = weatherForecast.daily.time;
    const { time, temperature_2m, weather_code } = weatherForecast.hourly;

    hourObj = weekDays.map((d, index) => {
      const startIndex = index * 24;
      const endIndex = startIndex + 24;

      return {
        dayOfWeek: dayjs(d).format("dddd"),
        hours: time.slice(startIndex, endIndex),
        wcodes: weather_code.slice(startIndex, endIndex),
        temps: temperature_2m.slice(startIndex, endIndex),
      };
    });

    activeDay = hourObj[activeDayIndex];
  }

  //EVENT LISTENERS STUFF
  const handleClick = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <div className="hourly-section">
      <div className="hourly-header">
        <p>Hourly forecast</p>

        <button className="day-dropdown-btn" onClick={handleClick}>
          <p>{appIsLoading ? <>-</> : activeDay.dayOfWeek}</p>
          <img
            className={`hourly-dropdown-icon ${showDropDown ? "hourly-dropdown-icon-rotated" : ""}`}
            src="/images/icon-dropdown.svg"
          />
        </button>

        <DaysDrop
          hourObj={hourObj}
          showDropDown={showDropDown}
          activeDayIndex={activeDayIndex}
          setActiveDayIndex={setActiveDayIndex}
          setShowDropDown={setShowDropDown}
          appIsLoading={appIsLoading}
        />
      </div>

      <HourFlex activeDay={activeDay} appIsLoading={appIsLoading} />
    </div>
  );
}
