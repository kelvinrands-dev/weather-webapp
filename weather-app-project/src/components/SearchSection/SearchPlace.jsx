import "./SearchPlace.css";

export function SearchPlace() {
  return (
    <section className="search-place-section">
      <p>How's the sky loooking today?</p>

      <div className="search-place">
        <div className="search-input-container">
          <img src="images\icon-search.svg" />
          <input
            className="search-input"
            type="text"
            placeholder="Search for a place..."
          />
        </div>
        <button className="search-btn">Search</button>
      </div>
    </section>
  );
}
