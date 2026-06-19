import React from "react";

// FilterBar: two dropdowns (location, job type) + live results count
function FilterBar({
  locations,
  types,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  resultsCount,
}) {
  return (
    <div className="container mb-4">
      <div className="row g-3 align-items-center bg-white rounded-4 shadow-sm p-3 mx-0">
        <div className="col-12 col-md-4">
          <label className="form-label small fw-semibold text-secondary mb-1">
            <i className="bi bi-geo-alt me-1"></i> Location
          </label>
          <select
            className="form-select"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label small fw-semibold text-secondary mb-1">
            <i className="bi bi-briefcase me-1"></i> Job Type
          </label>
          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-4 text-md-end">
          <span className="text-secondary small">
            Showing <strong className="text-dark">{resultsCount}</strong> job
            {resultsCount !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
