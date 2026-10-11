export function DropDown() {
  return (
    <section>
      <div className="dropdown-section">
        <button className="dropdown-button">Switch to imperial</button>
      </div>

      <div className="dropdown-section">
        <p>Temperature</p>
        <button className="dropdown-button">Celsius (°C)</button>
        <button className="dropdown-button">Fahrenheit (°C)</button>
      </div>

      <div className="dropdown-section">
        <p>Wind Speed</p>
        <button className="dropdown-button">km/h</button>
        <button className="dropdown-button">mph</button>
      </div>

      <div className="dropdown-section">
        <p>Precipitation</p>
        <button className="dropdown-button">Millimeters (mm)</button>
        <button className="dropdown-button">Inches (in)</button>
      </div>
    </section>
  );
}
