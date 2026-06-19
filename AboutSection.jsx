import React, { useEffect } from "react";

// MovieModal: popup showing full movie details.
// Renders nothing if no movie is selected (movie === null).
function MovieModal({ movie, isFavorite, onToggleFavorite, onClose }) {
  // Close modal on Escape key press for better accessibility
  useEffect(() => {
    if (!movie) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [movie, onClose]);

  if (!movie) return null;

  // Clicking the dark backdrop (outside the modal box) also closes it
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="movie-modal-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ zIndex: 1050 }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.title} details`}
    >
      <div className="movie-modal-content rounded-4 w-100" style={{ maxWidth: "780px" }}>
        <div className="row g-0">
          {/* Poster column */}
          <div className="col-12 col-md-5">
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              className="w-100 h-100 rounded-start-4"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
          </div>

          {/* Details column */}
          <div className="col-12 col-md-7 p-4 d-flex flex-column position-relative">
            <button
              className="modal-close-btn position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px" }}
              onClick={onClose}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <h2 className="font-heading display-6 text-white mb-2 pe-4">{movie.title}</h2>

            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <span className="rating-badge rounded-pill px-3 py-1">
                <i className="bi bi-star-fill me-1"></i>
                {movie.rating} / 10
              </span>
              <span className="genre-chip rounded-pill px-3 py-1">{movie.genre}</span>
              <span className="small" style={{ color: "#A1A1AA" }}>
                <i className="bi bi-calendar3 me-1"></i>
                {movie.year}
              </span>
            </div>

            <h6 className="text-uppercase small fw-semibold mb-2" style={{ color: "#71717A", letterSpacing: "1px" }}>
              Synopsis
            </h6>
            <p style={{ color: "#D4D4D8", lineHeight: "1.7" }}>{movie.description}</p>

            <div className="mt-auto d-flex gap-2 pt-3">
              <button
                className={`btn rounded-3 py-2 px-4 flex-grow-1 fw-semibold ${
                  isFavorite ? "btn-view-details" : ""
                }`}
                style={
                  !isFavorite
                    ? { backgroundColor: "#1C1C21", color: "#fff", border: "1px solid #2B2B31" }
                    : {}
                }
                onClick={() => onToggleFavorite(movie.id)}
              >
                <i className={`bi ${isFavorite ? "bi-bookmark-fill" : "bi-bookmark"} me-2`}></i>
                {isFavorite ? "Saved to Favorites" : "Add to Favorites"}
              </button>
              <button
                className="btn rounded-3 py-2 px-4"
                style={{ backgroundColor: "#1C1C21", color: "#fff", border: "1px solid #2B2B31" }}
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
