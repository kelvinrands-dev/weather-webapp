import "./DaysDrop.css";

export function DaysDrop({ hourObj, showDropDown }) {
  if (showDropDown === true) {
    return (
      <section className="days-dropdown">
        {hourObj.map((day) => {
          return <div key={crypto.randomUUID()}>{day.dayOfWeek}</div>;
        })}
      </section>
    );
  }
}
