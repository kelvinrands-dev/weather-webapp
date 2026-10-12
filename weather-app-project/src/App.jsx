import { Header } from "./components/HeaderSection/Header";
import { SearchPlace } from "./components/SearchSection/SearchPlace";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SearchPlace />
    </div>
  );
}

export default App;
