import React from "react";

// FilterBar: genre dropdown + sort-by chip toggles + results count
function FilterBar({
  genres,
  genreFilter,
  setGenreFilter,
  sortBy,
  setSortBy,
  resultsCount,
}) {
  // Toggling the same sort option again turns sorting off ("none")
  const handleSortClick = (option) => {
    setSortBy(sortBy === option ? "none" : option);
  };

  return (
    <div className="container mb-4" id="movies">
      <div className="filter-bar row g-3 align-items-center rounded-4 p-3 mx-0">
        {/* Genre filter */}
        <div className="col-12 col-md-4">
          <label className="form-label small fw-semibold mb-1" style={{ color: "#A1A1AA" }}>
            <i className="bi bi-funnel me-1"></i> Genre
          </label>
          <select
            className="form-select"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by */}
        <div className="col-12 col-md-5">
          <label className="form-label small fw-semibold mb-1" style={{ color: "#A1A1AA" }}>
            <i className="bi bi-sort-down me-1"></i> Sort By
          </label>
          <div className="d-flex gap-2 flex-wrap">
            <button
              type="button"
              className={`chip-toggle rounded-pill px-3 py-2 ${sortBy === "rating" ? "active" : ""}`}
              onClick={() => handleSortClick("rating")}
            >
              <i className="bi bi-star-fill me-1"></i> Rating
            </button>
            <button
              type="button"
              className={`chip-toggle rounded-pill px-3 py-2 ${sortBy === "year" ? "active" : ""}`}
              onClick={() => handleSortClick("year")}
            >
              <i className="bi bi-calendar3 me-1"></i> Release Year
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="col-12 col-md-3 text-md-end">
          <span className="small" style={{ color: "#A1A1AA" }}>
            <strong className="text-white">{resultsCount}</strong> movie
            {resultsCount !== 1 ? "s" : ""} found
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
