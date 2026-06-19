import React from "react";
import MovieCard from "./MovieCard.jsx";

// MovieGrid: renders the responsive grid of MovieCards using map().
// Shows a "No Movies Found" empty state when filters return nothing.
function MovieGrid({ movies, favorites, onToggleFavorite, onViewDetails }) {
  return (
    <section className="container pb-5">
      {movies.length > 0 ? (
        <div className="row g-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              onToggleFavorite={onToggleFavorite}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-5 fade-in">
          <i className="bi bi-camera-reels fs-1" style={{ color: "#3F3F46" }}></i>
          <h4 className="font-heading mt-3 text-white">No Movies Found</h4>
          <p style={{ color: "#A1A1AA" }}>Try a different title, genre, or clear your search.</p>
        </div>
      )}
    </section>
  );
}

export default MovieGrid;
