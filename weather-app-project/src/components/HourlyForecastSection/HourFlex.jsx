import { HourBox } from "./HourBox";

export function HourFlex({ activeDay }) {
  const { hours, wcodes, temps } = activeDay;

  return (
    <div className="hour-flex">
      {hours.map((hour, index) => {
        return (
          <HourBox
            key={crypto.randomUUID()}
            hour={hour}
            wcode={wcodes[index]}
            temp={temps[index]}
          />
        );
      })}
    </div>
  );
}
