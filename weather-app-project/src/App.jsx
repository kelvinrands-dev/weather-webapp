import axios from "axios";
import { useState, useEffect, useSyncExternalStore } from "react";
import { Header } from "./components/HeaderSection/Header";
import { SearchPlace } from "./components/SearchSection/SearchPlace";
import { CurrentForecastUi } from "./components/CurrentForecastSection/CurrentForecastUi";
import { geoCodingApi, forecastApi } from "./mocks/mock-forecast";
import { DailyForecastUi } from "./components/DailyForecastSection/DailyForecastUi";
import { HourlyForecastUi } from "./components/HourlyForecastSection/HourlyForecastUi.jsx";
import { useDefaultLocation } from "./hooks/useDefaultLocation.js";
import { useFetchWeather } from "./hooks/useFetchWeather.js";
import "./App.css";

function App() {
  const [cityLocation, setCityLocation] = useState({});
  const [weatherForecast, setWeatherForecast] = useState(forecastApi);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useDefaultLocation(setCityLocation, setAppIsLoading);
  //console.log(cityLocation);

  useFetchWeather(cityLocation, setWeatherForecast);

  return (
    <div className="app-container">
      <Header />
      <SearchPlace />
      <div className="weather-flex">
        <CurrentForecastUi
          cityLocation={cityLocation}
          weatherForecast={weatherForecast}
          appIsLoading={appIsLoading}
        />
        <DailyForecastUi
          weatherForecast={weatherForecast}
          appIsLoading={appIsLoading}
        />
      </div>

      <HourlyForecastUi
        weatherForecast={weatherForecast}
        appIsLoading={appIsLoading}
      />
    </div>
  );
}

export default App;
