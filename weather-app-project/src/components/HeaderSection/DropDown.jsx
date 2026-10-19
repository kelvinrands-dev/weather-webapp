import { useEffect, useState } from "react";
import "./DropDown.css";
import CheckMarkIcon from "../../assets/icons/icon-checkmark.svg";

export function DropDown({
  showUnitsDrop,
  weatherForecast,
  setCurrentUnits,
  setShowUnitsDrop,
}) {
  const units = weatherForecast.current_units;
  const isMetric = units.temperature_2m === "°C";

  const handleUnit = (unit, unitType) => {
    if (unitType === "temperature") {
      setCurrentUnits((prev) => ({
        ...prev,
        temperature: unit,
      }));
    }
    if (unitType === "wind-speed") {
      setCurrentUnits((prev) => ({
        ...prev,
        windSpeed: unit,
      }));
    }
    if (unitType === "precipitation") {
      setCurrentUnits((prev) => ({
        ...prev,
        precipitation: unit,
      }));
    }

    setShowUnitsDrop(false);
  };

  const handleImpOrMet = () => {
    if (isMetric) {
      // User wants to switch TO Imperial
      setCurrentUnits((prev) => ({
        ...prev,
        temperature: "fahrenheit",
        windSpeed: "mph",
        precipitation: "inch",
      }));
    } else {
      // User wants to switch TO Metric
      setCurrentUnits((prev) => ({
        ...prev,
        temperature: "celsius",
        windSpeed: "kmh",
        precipitation: "mm",
      }));
    }
    setShowUnitsDrop(false);
  };

  return (
    <>
      {showUnitsDrop && (
        <section className="dropdown">
          <div className="dropdown-section switch-section">
            <button className="dropdown-button" onClick={handleImpOrMet}>
              {isMetric ? <>Switch to imperial</> : <>Switch to metric</>}
            </button>
          </div>

          <div className="dropdown-section temperature-section">
            <p className="dropdown-text">Temperature</p>
            <button
              className={`dropdown-button ${units.temperature_2m === "°C" && "current"}`}
              onClick={() => {
                handleUnit("celsius", "temperature");
              }}
            >
              <p>Celsius (°C)</p>
              {units.temperature_2m === "°C" && <img src={CheckMarkIcon} />}
            </button>
            <button
              className={`dropdown-button ${units.temperature_2m === "°F" && "current"}`}
              onClick={() => {
                handleUnit("fahrenheit", "temperature");
              }}
            >
              <p>Fahrenheit (°F)</p>
              {units.temperature_2m === "°F" && <img src={CheckMarkIcon} />}
            </button>
          </div>

          <div className="dropdown-section windspeed-section">
            <p className="dropdown-text">Wind Speed</p>
            <button
              className={`dropdown-button ${units.wind_speed_10m === "km/h" && "current"}`}
              onClick={() => {
                handleUnit("kmh", "wind-speed");
              }}
            >
              <p>km/h</p>
              {units.wind_speed_10m === "km/h" && <img src={CheckMarkIcon} />}
            </button>
            <button
              className={`dropdown-button ${units.wind_speed_10m === "mp/h" && "current"}`}
              onClick={() => {
                handleUnit("mph", "wind-speed");
              }}
            >
              <p>mph</p>
              {units.wind_speed_10m === "mp/h" && <img src={CheckMarkIcon} />}
            </button>
          </div>

          <div className="dropdown-section precipitation-section">
            <p className="dropdown-text">Precipitation</p>
            <button
              className={`dropdown-button ${units.precipitation === "mm" && "current"}`}
              onClick={() => {
                handleUnit("mm", "precipitation");
              }}
            >
              <p>Millimeters (mm)</p>
              {units.precipitation === "mm" && <img src={CheckMarkIcon} />}
            </button>
            <button
              className={`dropdown-button ${units.precipitation === "inch" && "current"}`}
              onClick={() => {
                handleUnit("inch", "precipitation");
              }}
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
