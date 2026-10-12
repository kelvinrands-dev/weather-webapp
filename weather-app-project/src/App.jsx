import { Header } from "./components/HeaderSection/Header";
import { SearchPlace } from "./components/SearchSection/SearchPlace";
import { CurrentForecast } from "./components/CurrentForecastSection/CurrentForecast";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SearchPlace />
      <div className="weather-flex">
        <CurrentForecast />
      </div>
    </div>
  );
}

export default App;
