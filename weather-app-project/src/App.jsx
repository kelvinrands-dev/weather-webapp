import axios from "axios";
import { useState, useEffect } from "react";
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
  const [weatherForecast, setWeatherForecast] = useState({});
  const [appIsLoading, setAppIsLoading] = useState(true);
  const [locationResolved, setLocationResolved] = useState(false);

  useDefaultLocation(setCityLocation, setAppIsLoading, setLocationResolved);
  //console.log(cityLocation);

  useFetchWeather(
    cityLocation,
    setWeatherForecast,
    setAppIsLoading,
    locationResolved,
  );

  return (
    <div className="app-container">
      <Header />
      <SearchPlace
        setCityLocation={setCityLocation}
        setAppIsLoading={setAppIsLoading}
      />
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
