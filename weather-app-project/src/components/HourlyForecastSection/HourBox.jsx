import dayjs from "dayjs";
import { weatherCodeConverter } from "../../utils/weatherCodeConverter";
import "./HourBox.css";

export function HourBox({ hour, wcode, temp }) {
  return (
    <div className="hbox">
      <div className="wcode-and-time">
        <img src={weatherCodeConverter(wcode)} />
        <p>{dayjs(hour).format("h A")}</p>
      </div>

      <p>{`${Math.round(temp)} °`}</p>
    </div>
  );
}
