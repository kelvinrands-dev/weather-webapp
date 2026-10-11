import "./DropDown.css";

export function DropDown() {
  return (
    <section className="dropdown">
      <div className="dropdown-section switch-section">
        <button className="dropdown-button">Switch to imperial</button>
      </div>

      <div className="dropdown-section temperature-section">
        <p className="dropdown-text">Temperature</p>
        <button className="dropdown-button">Celsius (°C)</button>
        <button className="dropdown-button">Fahrenheit (°C)</button>
      </div>

      <div className="dropdown-section windspeed-section">
        <p className="dropdown-text">Wind Speed</p>
        <button className="dropdown-button">km/h</button>
        <button className="dropdown-button">mph</button>
      </div>

      <div className="dropdown-section precipitation-section">
        <p className="dropdown-text">Precipitation</p>
        <button className="dropdown-button">Millimeters (mm)</button>
        <button className="dropdown-button">Inches (in)</button>
      </div>
    </section>
  );
}
