import "./SearchDrop.css";

export function SearchDrop({ showSearchDrop, searchResults, searchStatus }) {
  if (showSearchDrop === false) return null;

  /*console.log("current isResolved", searchStatus.isResolved);*/
  return (
    <section className="search-dropdown">
      {searchStatus.isLoading && (
        <div className="search-in-progress">
          <img src="images/icon-loading.svg" />
          <p>Search in progress</p>
        </div>
      )}
      {searchStatus.isResolved &&
        searchResults.map((city, index) => {
          const locationName = [city.name, city.admin1, city.country]
            .filter(Boolean)
            .join(", ");
          return (
            <button key={index} className="city-locations">
              {locationName}
            </button>
          );
        })}
      {searchStatus.notFound && (
        <div className="search-in-progress">
          <p>No search result found!</p>
        </div>
      )}
    </section>
  );
}
