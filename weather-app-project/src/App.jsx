import { useState } from "react";
import { Header } from "./components/HeaderSection/Header";
import { SearchPlace } from "./components/SearchSection/SearchPlace";
import { CurrentForecastUi } from "./components/CurrentForecastSection/CurrentForecastUi";
import { geoCodingApi, forecastApi } from "./mocks/mock-forecast";
import { DailyForecastUi } from "./components/DailyForecastSection/DailyForecastUi";
import { HourlyForecastUi } from "./components/HourlyForecastSection/HourlyForecastUi.jsx";
import "./App.css";

function App() {
  const [cityLocation, setCityLocation] = useState(geoCodingApi);
  const [weatherForecast, setWeatherForecast] = useState(forecastApi);

  return (
    <div className="app-container">
      <Header />
      <SearchPlace />
      <div className="weather-flex">
        <CurrentForecastUi
          cityLocation={cityLocation}
          weatherForecast={weatherForecast}
        />
        <DailyForecastUi weatherForecast={weatherForecast} />
      </div>

      <HourlyForecastUi weatherForecast={weatherForecast} />
    </div>
  );
}

export default App;
