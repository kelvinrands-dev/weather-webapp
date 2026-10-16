import "./SearchDrop.css";

export function SearchDrop({ showSearchDrop, searchResults, searchStatus }) {
  if (showSearchDrop === false) return null;
  return (
    <section className="search-dropdown">
      {searchStatus.isLoading && (
        <div className="search-in-progress">
          <img src="images/icon-loading.svg" />
          <p>Search in progress</p>
        </div>
      )}
      {searchStatus.isResolved &&
        searchResults.map((city) => {
          return (
            <button className="city-locations">{`${city.name}, ${city.admin1}, ${city.country}`}</button>
          );
        })}
    </section>
  );
}
