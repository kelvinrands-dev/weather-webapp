import "./DaysDrop.css";

export function DaysDrop({
  hourObj,
  showDropDown,
  activeDayIndex,
  setActiveDayIndex,
  setShowDropDown,
  appIsLoading,
}) {
  if (showDropDown === true) {
    const handleClick = (index) => {
      setActiveDayIndex(index);
      setShowDropDown((prev) => !prev);
    };

    return (
      <section className="days-dropdown">
        {appIsLoading ? (
          <></>
        ) : (
          hourObj.map((day, index) => {
            return (
              <button
                className={`day-btn ${activeDayIndex === index ? "day-btn-active" : ""}`}
                onClick={() => {
                  handleClick(index);
                }}
                key={index}
              >
                {day.dayOfWeek}
              </button>
            );
          })
        )}
      </section>
    );
  }
}
