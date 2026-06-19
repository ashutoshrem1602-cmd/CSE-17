import React from "react";

// Hero: movie-themed banner + heading + real-time search bar.
// Search state is owned by App and passed down as props.
function Hero({ searchTerm, setSearchTerm }) {
  return (
    <section id="home" className="hero-section py-5">
      <div className="container py-5 text-center position-relative">
        <span
          className="badge rounded-pill px-3 py-2 mb-3 fw-semibold"
          style={{ backgroundColor: "rgba(245,197,24,0.12)", color: "#F5C518" }}
        >
          <i className="bi bi-stars me-1"></i> 20 curated titles, zero ads
        </span>

        <h1 className="font-heading display-3 text-white mb-3">
          Discover Your Next <span style={{ color: "#E50914" }}>Favorite Movie</span>
        </h1>

        <p className="text-secondary fs-5 mb-4 mx-auto" style={{ maxWidth: "600px", color: "#A1A1AA" }}>
          Search, filter, and explore handpicked titles across every genre —
          from edge-of-your-seat thrillers to feel-good comedies.
        </p>

        {/* Search bar */}
        <div className="hero-search-card rounded-4 p-3 mx-auto" style={{ maxWidth: "650px" }}>
          <div className="input-group">
            <span className="input-group-text bg-transparent border-0">
              <i className="bi bi-search text-white"></i>
            </span>
            <input
              type="text"
              className="form-control bg-transparent border-0 shadow-none text-white"
              placeholder="Search movies by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
