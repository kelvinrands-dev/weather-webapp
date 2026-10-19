import axios from "axios";
import { useState } from "react";
import { SearchDrop } from "./SearchDrop";
import "./SearchPlace.css";

export function SearchPlace({ setCityLocation, setAppIsLoading }) {
  const [searchInput, setSearchInput] = useState("");
  const [showSearchDrop, setShowSearchDrop] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState({
    isLoading: false,
    isResolved: false,
    notFound: false,
    error: null,
  });

  const handleSearch = async () => {
    setShowSearchDrop(true);
    setSearchStatus((prev) => ({
      ...prev,
      isLoading: true,
      isResolved: false,
      notFound: false,
    }));
    let searchResponse;
    try {
      const res = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`,
      );
      searchResponse = res.data.results || [];
      setSearchResults(searchResponse);
    } catch (err) {
      console.log(err.message);
    } finally {
      setSearchStatus((prev) => ({
        ...prev,
        isLoading: false,
        isResolved: searchResponse.length > 0 ? true : false,
        notFound: searchResponse.length === 0 ? true : false,
      }));
    }
  };

  const clearSearch = () => {
    setShowSearchDrop(false);
    setSearchResults("");
    setSearchStatus((prev) => ({
      ...prev,
      isLoading: false,
      isResolved: false,
    }));
    setSearchInput("");
  };

  return (
    <section className="search-place-section">
      <p>How's the sky loooking today?</p>

      <div className="search-place">
        <div className="search-input-container">
          <img src="images\icon-search.svg" />
          <input
            className="search-input"
            value={searchInput}
            type="text"
            placeholder="Search for a place..."
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === "") {
                setShowSearchDrop(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button className="clear-btn" onClick={clearSearch}>
            <img src="images/remove.png" />
          </button>
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>

        <SearchDrop
          showSearchDrop={showSearchDrop}
          searchResults={searchResults}
          searchStatus={searchStatus}
          setCityLocation={setCityLocation}
          setAppIsLoading={setAppIsLoading}
          setShowSearchDrop={setShowSearchDrop}
          setSearchInput={setSearchInput}
        />
      </div>
    </section>
  );
}
