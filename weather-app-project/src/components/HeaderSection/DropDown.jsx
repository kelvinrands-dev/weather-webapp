import { useEffect, useState } from "react";
import "./DropDown.css";
import CheckMarkIcon from "../../assets/icons/icon-checkmark.svg";

export function DropDown({ showUnitsDrop, weatherForecast }) {
  const units = weatherForecast.current_units;

  return (
    <>
      {showUnitsDrop && (
        <section className="dropdown">
          <div className="dropdown-section switch-section">
            <button className="dropdown-button">Switch to imperial</button>
          </div>

          <div className="dropdown-section temperature-section">
            <p className="dropdown-text">Temperature</p>
            <button
              className={`dropdown-button ${units.temperature_2m === "°C" && "current"}`}
            >
              <p>Celsius (°C)</p>
              {units.temperature_2m === "°C" && <img src={CheckMarkIcon} />}
            </button>
            <button
              className={`dropdown-button ${units.temperature_2m === "°F" && "current"}`}
            >
              <p>Fahrenheit (°F)</p>
              {units.temperature_2m === "°F" && <img src={CheckMarkIcon} />}
            </button>
          </div>

          <div className="dropdown-section windspeed-section">
            <p className="dropdown-text">Wind Speed</p>
            <button
              className={`dropdown-button ${units.wind_speed_10m === "km/h" && "current"}`}
            >
              <p>km/h</p>
              {units.wind_speed_10m === "km/h" && <img src={CheckMarkIcon} />}
            </button>
            <button
              className={`dropdown-button ${units.wind_speed_10m === "mp/h" && "current"}`}
            >
              <p>mph</p>
              {units.wind_speed_10m === "mp/h" && <img src={CheckMarkIcon} />}
            </button>
          </div>

          <div className="dropdown-section precipitation-section">
            <p className="dropdown-text">Precipitation</p>
            <button
              className={`dropdown-button ${units.precipitation === "mm" && "current"}`}
            >
              <p>Millimeters (mm)</p>
              {units.precipitation === "mm" && <img src={CheckMarkIcon} />}
            </button>
            <button
              className={`dropdown-button ${units.precipitation === "inch" && "current"}`}
            >
              <p>Inches (in)</p>
              {units.precipitation === "inch" && <img src={CheckMarkIcon} />}
            </button>
          </div>
        </section>
      )}
    </>
  );
}
