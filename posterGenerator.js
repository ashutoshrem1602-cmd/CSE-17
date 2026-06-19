import React, { useState, useMemo } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FilterBar from "./components/FilterBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import MovieModal from "./components/MovieModal.jsx";
import TrendingStrip from "./components/TrendingStrip.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";

import moviesData from "./data/moviesData.js";

// Build the genre dropdown list dynamically from the dataset
const allGenres = ["All Genres", ...new Set(moviesData.map((movie) => movie.genre))];

// App: root component. Holds all shared state — search term, genre
// filter, sort option, favorites list, and the currently selected
// movie (for the details modal) — and derives the visible movie list.
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("All Genres");
  const [sortBy, setSortBy] = useState("none"); // "none" | "rating" | "year"
  const [favorites, setFavorites] = useState([]); // array of movie ids
  const [selectedMovie, setSelectedMovie] = useState(null); // movie shown in modal

  // Add/remove a movie id from the favorites list
  const handleToggleFavorite = (movieId) => {
    setFavorites((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  // Derive the filtered + sorted movie list.
  // useMemo avoids recalculating on every render — only when a
  // dependency (search/filter/sort) actually changes.
  const visibleMovies = useMemo(() => {
    let result = moviesData.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesGenre =
        genreFilter === "All Genres" || movie.genre === genreFilter;

      return matchesSearch && matchesGenre;
    });

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "year") {
      result = [...result].sort((a, b) => b.year - a.year);
    }

    return result;
  }, [searchTerm, genreFilter, sortBy]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <FilterBar
        genres={allGenres}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        resultsCount={visibleMovies.length}
      />

      <MovieGrid
        movies={visibleMovies}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onViewDetails={setSelectedMovie}
      />

      <TrendingStrip movies={moviesData} onViewDetails={setSelectedMovie} />
      <AboutSection />
      <Footer />

      {/* Modal renders on top of everything when a movie is selected */}
      <MovieModal
        movie={selectedMovie}
        isFavorite={selectedMovie ? favorites.includes(selectedMovie.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default App;
