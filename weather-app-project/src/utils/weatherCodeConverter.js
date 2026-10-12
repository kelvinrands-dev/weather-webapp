export const weatherCodeConverter = (code) => {
  code = Number(code);

  if (code === 0 || code === 1) {
    return "images/weather-icons/icon-sunny.webp";
  } else if (code === 2) {
    return "images/weather-icons/icon-overcast.webp";
  } else if (code === 3) {
    return "images/weather-icons/icon-overcast.webp";
  } else if (code === 45 || code === 48) {
    return "images/weather-icons/icon-fog.webp";
  } else if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 56 ||
    code === 57
  ) {
    return "images/weather-icons/icon-drizzle.webp";
  } else if (
    code === 61 ||
    code === 63 ||
    code === 65 ||
    code === 66 ||
    code === 67 ||
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    return "images/weather-icons/icon-rain.webp";
  } else if (
    code === 71 ||
    code === 73 ||
    code === 75 ||
    code === 77 ||
    code === 85 ||
    code === 86
  ) {
    return "images/weather-icons/icon-snow.webp";
  } else if (code === 95 || code === 96 || code === 99) {
    return "images/weather-icons/icon-storm.webp";
  }
};
