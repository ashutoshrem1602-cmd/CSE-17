import React from "react";

// MovieCard: poster, title, rating, year, genre, short description,
// a "View Details" button (opens modal), and a favorite/bookmark toggle.
function MovieCard({ movie, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="movie-card rounded-4 h-100 d-flex flex-column">
        {/* Poster with overlaid rating + favorite button */}
        <div className="movie-poster-wrap">
          <img src={movie.poster} alt={`${movie.title} poster`} />

          <span className="rating-badge position-absolute top-0 start-0 m-2 rounded-pill px-2 py-1 small">
            <i className="bi bi-star-fill me-1"></i>
            {movie.rating}
          </span>

          <button
            className={`favorite-btn position-absolute top-0 end-0 m-2 rounded-circle d-flex align-items-center justify-content-center ${
              isFavorite ? "is-favorited" : ""
            }`}
            style={{ width: "36px", height: "36px" }}
            onClick={() => onToggleFavorite(movie.id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <i className={`bi ${isFavorite ? "bi-bookmark-fill" : "bi-bookmark"}`}></i>
          </button>
        </div>

        {/* Card body */}
        <div className="p-3 d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
            <h3 className="font-heading fs-5 text-white mb-0">{movie.title}</h3>
          </div>

          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="genre-chip rounded-pill px-2 py-1">{movie.genre}</span>
            <span className="small" style={{ color: "#A1A1AA" }}>
              <i className="bi bi-calendar3 me-1"></i>
              {movie.year}
            </span>
          </div>

          <p className="small flex-grow-1" style={{ color: "#A1A1AA", fontSize: "0.85rem" }}>
            {movie.description.length > 90
              ? `${movie.description.slice(0, 90)}...`
              : movie.description}
          </p>

          <button
            className="btn btn-view-details rounded-3 py-2 mt-2"
            onClick={() => onViewDetails(movie)}
          >
            View Details <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
