import { useState } from "react";

import { Header } from "./components/HeaderSection/Header";
import { SearchPlace } from "./components/SearchSection/SearchPlace";
import { CurrentForecastUi } from "./components/CurrentForecastSection/CurrentForecastUi";
import { DailyForecastUi } from "./components/DailyForecastSection/DailyForecastUi";
import { HourlyForecastUi } from "./components/HourlyForecastSection/HourlyForecastUi.jsx";
import { ErrorUi } from "./components/ErrorScreen/ErrorUi.jsx";
import { useDefaultLocation } from "./hooks/useDefaultLocation.js";
import { useFetchWeather } from "./hooks/useFetchWeather.js";
import "./App.css";

function App() {
  const [cityLocation, setCityLocation] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  const [appIsLoading, setAppIsLoading] = useState(true);
  const [appError, setAppError] = useState(false);
  const [locationResolved, setLocationResolved] = useState(false);
  const [currentUnits, setCurrentUnits] = useState({
    temperature: null,
    windSpeed: null,
    precipitation: null,
  });

  useDefaultLocation(
    setCityLocation,
    setAppIsLoading,
    setLocationResolved,
    setAppError,
  );

  useFetchWeather(
    cityLocation,
    setWeatherForecast,
    setAppIsLoading,
    locationResolved,
    currentUnits,
    setAppError,
  );

  return (
    <div className="app-container">
      <Header
        weatherForecast={weatherForecast}
        appIsLoading={appIsLoading}
        setCurrentUnits={setCurrentUnits}
      />
      <SearchPlace
        setCityLocation={setCityLocation}
        setAppIsLoading={setAppIsLoading}
      />

      {appError && <ErrorUi />}

      <div className="app-break">
        {!appError && (
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
        )}

        {!appError && (
          <HourlyForecastUi
            weatherForecast={weatherForecast}
            appIsLoading={appIsLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
