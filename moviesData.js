import React from "react";

// TrendingStrip: horizontally-scrollable strip of the highest-rated
// movies. Satisfies the "Trending" navbar link with real dataset logic
// (sorted by rating) rather than being purely decorative.
function TrendingStrip({ movies, onViewDetails }) {
  // Take the top 6 movies by rating
  const trending = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <section id="trending" className="py-5" style={{ backgroundColor: "#0B0B0D" }}>
      <div className="container">
        <div className="d-flex align-items-center gap-2 mb-4">
          <i className="bi bi-fire fs-3" style={{ color: "#E50914" }}></i>
          <h2 className="font-heading fs-2 text-white mb-0">Trending Now</h2>
        </div>

        <div className="d-flex gap-3 overflow-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
          {trending.map((movie, index) => (
            <div
              key={movie.id}
              className="flex-shrink-0 movie-card rounded-4 overflow-hidden"
              style={{ width: "180px", scrollSnapAlign: "start", cursor: "pointer" }}
              onClick={() => onViewDetails(movie)}
            >
              <div className="position-relative">
                <img src={movie.poster} alt={`${movie.title} poster`} className="w-100" />
                <span
                  className="position-absolute bottom-0 start-0 font-heading px-2"
                  style={{
                    fontSize: "2.5rem",
                    color: "rgba(255,255,255,0.9)",
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  }}
                >
                  {index + 1}
                </span>
                <span className="rating-badge position-absolute top-0 end-0 m-2 rounded-pill px-2 py-1 small">
                  <i className="bi bi-star-fill me-1"></i>
                  {movie.rating}
                </span>
              </div>
              <div className="p-2">
                <p className="small text-white mb-0 text-truncate">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingStrip;
