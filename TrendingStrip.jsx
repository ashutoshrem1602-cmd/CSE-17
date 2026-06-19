import React from "react";

// AboutSection: simple section explaining the project
// (satisfies the "About" navbar link)
function AboutSection() {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#101012" }}>
      <div className="container text-center">
        <h2 className="font-heading display-6 text-white mb-3">About CineFind</h2>
        <p className="mx-auto" style={{ maxWidth: "650px", color: "#A1A1AA" }}>
          CineFind is a movie discovery demo built entirely on the front end —
          every poster, rating, and description lives in a local dataset, with
          no external APIs or backend involved. Search, filter by genre, sort
          by rating or year, and bookmark the titles you love.
        </p>

        <div className="row g-4 mt-3">
          <div className="col-12 col-md-4">
            <i className="bi bi-search fs-2" style={{ color: "#E50914" }}></i>
            <h6 className="text-white mt-2 mb-1">Instant Search</h6>
            <p className="small" style={{ color: "#71717A" }}>
              Results filter live as you type — no page reloads.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <i className="bi bi-sliders fs-2" style={{ color: "#E50914" }}></i>
            <h6 className="text-white mt-2 mb-1">Genre &amp; Sort</h6>
            <p className="small" style={{ color: "#71717A" }}>
              Narrow by genre, then sort by rating or release year.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <i className="bi bi-bookmark-heart fs-2" style={{ color: "#E50914" }}></i>
            <h6 className="text-white mt-2 mb-1">Save Favorites</h6>
            <p className="small" style={{ color: "#71717A" }}>
              Bookmark titles to keep track of what you want to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
