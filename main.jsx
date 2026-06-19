/* ===================== TAILWIND ===================== */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===================== GLOBAL / CUSTOM CSS ===================== */

body {
  font-family: "Inter", sans-serif;
  background-color: #0b0b0d;
  color: #f4f4f5;
}

h1,
h2,
h3,
h4,
.font-heading {
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.5px;
}

html {
  scroll-behavior: smooth;
}

/* ===================== NAVBAR ===================== */
.navbar-dark-custom {
  background-color: rgba(11, 11, 13, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #2b2b31;
}

.nav-link-custom {
  position: relative;
  color: #d4d4d8 !important;
  font-weight: 500;
  transition: color 0.2s ease;
}
.nav-link-custom::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background-color: #e50914;
  transition: width 0.25s ease;
}
.nav-link-custom:hover::after {
  width: 100%;
}
.nav-link-custom:hover {
  color: #ffffff !important;
}

/* ===================== HERO SECTION ===================== */
.hero-section {
  position: relative;
  background:
    linear-gradient(180deg, rgba(11, 11, 13, 0.3) 0%, #0b0b0d 95%),
    radial-gradient(ellipse at 20% 30%, rgba(229, 9, 20, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(245, 197, 24, 0.08) 0%, transparent 45%),
    repeating-linear-gradient(
      115deg,
      #141417 0px,
      #141417 2px,
      #0b0b0d 2px,
      #0b0b0d 90px
    );
  overflow: hidden;
}

.hero-search-card {
  background-color: rgba(28, 28, 33, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid #2b2b31;
  box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.6);
}

.hero-search-card input::placeholder {
  color: #9ca3af;
}

/* ===================== MOVIE CARD ===================== */
.movie-card {
  background-color: #141417;
  border: 1px solid #2b2b31;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
}
.movie-card:hover {
  transform: translateY(-8px) scale(1.015);
  box-shadow: 0 22px 40px -12px rgba(229, 9, 20, 0.35);
  border-color: #e50914;
}

.movie-poster-wrap {
  position: relative;
  overflow: hidden;
}
.movie-poster-wrap img {
  transition: transform 0.4s ease;
  display: block;
  width: 100%;
}
.movie-card:hover .movie-poster-wrap img {
  transform: scale(1.06);
}

/* Rating badge (IMDb-style gold) */
.rating-badge {
  background-color: rgba(0, 0, 0, 0.75);
  color: #f5c518;
  font-weight: 700;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(245, 197, 24, 0.4);
}

/* Favorite / bookmark button */
.favorite-btn {
  background-color: rgba(0, 0, 0, 0.55);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}
.favorite-btn:hover {
  transform: scale(1.08);
}
.favorite-btn.is-favorited {
  background-color: #e50914;
  color: #ffffff;
  border-color: #e50914;
}

/* Genre badge on card */
.genre-chip {
  background-color: rgba(245, 197, 24, 0.12);
  color: #f5c518;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* "View Details" button */
.btn-view-details {
  background-color: #e50914;
  border: none;
  color: #ffffff;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.btn-view-details:hover {
  background-color: #b20710;
  transform: scale(1.02);
  color: #ffffff;
}

/* ===================== FILTER BAR ===================== */
.filter-bar {
  background-color: #141417;
  border: 1px solid #2b2b31;
}

.filter-bar .form-select {
  background-color: #1c1c21;
  color: #f4f4f5;
  border: 1px solid #2b2b31;
}
.filter-bar .form-select:focus {
  border-color: #e50914;
  box-shadow: 0 0 0 0.2rem rgba(229, 9, 20, 0.25);
}

/* Active sort/filter chip toggle buttons */
.chip-toggle {
  background-color: #1c1c21;
  color: #d4d4d8;
  border: 1px solid #2b2b31;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.chip-toggle.active {
  background-color: #e50914;
  color: #ffffff;
  border-color: #e50914;
}
.chip-toggle:hover:not(.active) {
  border-color: #e50914;
  color: #ffffff;
}

/* ===================== MODAL (Movie Details) ===================== */
.movie-modal-backdrop {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease both;
}

.movie-modal-content {
  background-color: #141417;
  border: 1px solid #2b2b31;
  animation: scaleIn 0.25s ease both;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: none;
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.modal-close-btn:hover {
  background-color: #e50914;
  transform: rotate(90deg);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ===================== EMPTY STATE ===================== */
.fade-in {
  animation: fadeIn 0.4s ease both;
}

/* ===================== FOOTER ===================== */
.footer-dark {
  background-color: #0b0b0d;
  border-top: 1px solid #2b2b31;
}

.social-icon {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #1c1c21;
  color: #d4d4d8;
  border: 1px solid #2b2b31;
  transition: background-color 0.2s ease, transform 0.2s ease, color 0.2s ease;
}
.social-icon:hover {
  background-color: #e50914;
  color: #ffffff;
  border-color: #e50914;
  transform: translateY(-3px);
}

/* ===================== ACCESSIBILITY ===================== */
select:focus,
input:focus,
button:focus-visible {
  outline: 2px solid #e50914 !important;
  outline-offset: 1px;
}

/* Custom scrollbar for dark theme (optional, cosmetic) */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #0b0b0d;
}
::-webkit-scrollbar-thumb {
  background: #2b2b31;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: #e50914;
}
