import axios from "axios";
import { useState } from "react";
import { SearchDrop } from "./SearchDrop";
import "./SearchPlace.css";

export function SearchPlace() {
  const [searchInput, setSearchInput] = useState("");
  const [showSearchDrop, setShowSearchDrop] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState({
    isLoading: false,
    isResolved: false,
    error: null,
  });

  const handleSearch = async () => {
    setShowSearchDrop(true);
    setSearchStatus((prev) => ({ ...prev, isLoading: true }));
    try {
      const searchResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`,
      );
      setSearchResults(searchResponse.data.results || []);
      console.log(searchResponse.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setSearchStatus((prev) => ({
        ...prev,
        isLoading: false,
        isResolved: searchResults.length === 0 ? true : false,
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
        />
      </div>
    </section>
  );
}
