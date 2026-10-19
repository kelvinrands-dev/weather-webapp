import axios from "axios";
import { useEffect } from "react";

export function useFetchWeather(
  cityLocation,
  setWeatherForecast,
  setAppIsLoading,
  locationResolved,
  currentUnits,
) {
  useEffect(() => {
    if (!locationResolved) return;

    const fetchForecast = async () => {
      setAppIsLoading(true);
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
            temperature_unit: currentUnits.temperature || undefined,
            wind_speed_unit: currentUnits.windSpeed || undefined,
            precipitation_unit: currentUnits.precipitation || undefined,
          },
        });

        setWeatherForecast(res.data);
        setAppIsLoading(false);
      } catch (error) {
        console.error("Error fetching forecast:", error.message);
      }
    };

    fetchForecast();
  }, [
    cityLocation,
    setWeatherForecast,
    setAppIsLoading,
    locationResolved,
    currentUnits,
  ]);
}
