import { DropDown } from "./DropDown";
import "./Header.css";

export function Header() {
  return (
    <header className="app-header">
      <img className="weather-now-logo" src="../../public/images/logo.svg" />

      <button className="units-button">
        <img className="big-icons" src="/images/icon-units.svg" />
        <p>Units</p>
        <img className="big-icons" src="/images/icon-dropdown.svg" />
      </button>

      <DropDown />
    </header>
  );
}
