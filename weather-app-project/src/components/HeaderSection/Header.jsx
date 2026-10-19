import { useState } from "react";
import { DropDown } from "./DropDown";
import "./Header.css";

export function Header() {
  const [showUnitsDrop, setShowUnitsDrop] = useState(false);

  return (
    <header className="app-header">
      <img className="weather-now-logo" src="../../public/images/logo.svg" />

      <button
        className="units-button"
        onClick={() => {
          setShowUnitsDrop((prev) => !prev);
        }}
      >
        <img className="big-icons" src="/images/icon-units.svg" />
        <p>Units</p>
        <img
          className={`dropdown-icon ${showUnitsDrop ? "icon-rotate" : ""}`}
          src="/images/icon-dropdown.svg"
        />
      </button>

      <DropDown showUnitsDrop={showUnitsDrop} />
    </header>
  );
}
