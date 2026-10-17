import axios from "axios";
import { useEffect } from "react";

export function useFetchWeather(cityLocation, setWeatherForecast) {
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude: cityLocation.latitude,
            longitude: cityLocation.longitude,
            current: [
              "temperature_2m",
              "relative_humidity_2m",
              "apparent_temperature",
              "is_day",
              "precipitation",
              "weather_code",
              "wind_speed_10m",
            ].join(","),
            hourly: ["temperature_2m", "weather_code"].join(","),
            daily: [
              "weather_code",
              "temperature_2m_max",
              "temperature_2m_min",
            ].join(","),
            timezone: "auto",
          },
        });
        //setWeatherForecast(res.data);
      } catch (error) {
        console.error("Error fetching forecast:", error.message);
      }
    };

    fetchForecast();
  }, [cityLocation, setWeatherForecast]);
}
