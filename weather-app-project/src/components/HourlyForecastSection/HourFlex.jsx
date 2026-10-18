import { HourBox } from "./HourBox";

export function HourFlex({ activeDay, appIsLoading }) {
  const { hours, wcodes, temps } = activeDay;

  const loadArr = Array.from({ length: 24 });

  return (
    <div className="hour-flex">
      {appIsLoading
        ? loadArr.map((_, index) => {
            return <HourBox key={index} appIsLoading={appIsLoading} />;
          })
        : hours.map((hour, index) => {
            return (
              <HourBox
                key={index}
                hour={hour}
                wcode={wcodes[index]}
                temp={temps[index]}
                appIsLoading={appIsLoading}
              />
            );
          })}
    </div>
  );
}
