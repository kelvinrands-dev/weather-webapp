import "./CurrentForecast.css";

export function CurrentForecast() {
  return (
    <section className="current-forecast-container">
      <div className="current-forecast-bg"></div>

      <div className="current-forecast-grid">
        <div className="current-forecast-box"></div>
        <div className="current-forecast-box"></div>
        <div className="current-forecast-box"></div>
        <div className="current-forecast-box"></div>
      </div>
    </section>
  );
}
