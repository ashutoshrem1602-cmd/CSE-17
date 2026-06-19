import React from "react";

// Hero: heading + search bar. Search state is owned by App and
// passed down as props so other components can read/filter by it.
function Hero({ searchTerm, setSearchTerm }) {
  return (
    <section id="home" className="hero-section py-5">
      <div className="container py-5 text-center">
        <span
          className="badge rounded-pill px-3 py-2 mb-3 fw-semibold"
          style={{ backgroundColor: "#E8F2EE", color: "#1E5F4E" }}
        >
          <i className="bi bi-stars me-1"></i> 1,200+ active job listings
        </span>

        <h1 className="font-heading fw-bold display-5 mb-3" style={{ color: "#15463A" }}>
          Find Your <span style={{ color: "#F2A341" }}>Dream Job</span> Today
        </h1>

        <p className="text-secondary fs-5 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
          Search thousands of full-time, part-time, and internship opportunities
          from top companies — all in one place.
        </p>

        {/* Search bar card */}
        <div className="search-bar-card bg-white rounded-4 p-3 mx-auto" style={{ maxWidth: "650px" }}>
          <div className="input-group">
            <span className="input-group-text bg-white border-0">
              <i className="bi bi-search text-secondary"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search by job title (e.g. Frontend Developer)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
