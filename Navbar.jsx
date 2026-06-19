import React from "react";

// Footer: brand, quick links, social icons, contact, copyright
function Footer() {
  return (
    <footer className="footer-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* Brand + tagline */}
          <div className="col-12 col-md-4">
            <h4 className="font-heading fs-3 mb-2">
              Cine<span style={{ color: "#E50914" }}>Find</span>
            </h4>
            <p className="small" style={{ color: "#71717A" }}>
              A self-contained movie discovery demo — no backend, no external
              APIs, just React and a local dataset.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-6 col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#home" className="text-decoration-none" style={{ color: "#A1A1AA" }}>Home</a></li>
              <li><a href="#movies" className="text-decoration-none" style={{ color: "#A1A1AA" }}>Movies</a></li>
              <li><a href="#trending" className="text-decoration-none" style={{ color: "#A1A1AA" }}>Trending</a></li>
              <li><a href="#about" className="text-decoration-none" style={{ color: "#A1A1AA" }}>About</a></li>
            </ul>
          </div>

          {/* Contact + social icons */}
          <div className="col-6 col-md-4">
            <h6 className="fw-semibold mb-3">Get in Touch</h6>
            <p className="small mb-3" style={{ color: "#A1A1AA" }}>support@cinefind.app</p>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon" aria-label="Twitter / X"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#2B2B31", opacity: 1 }} className="my-4" />

        <p className="text-center small mb-0" style={{ color: "#71717A" }}>
          &copy; {new Date().getFullYear()} CineFind. All rights reserved. Built
          with React, Bootstrap &amp; Tailwind CSS. All movies, posters, and
          ratings are fictional sample data.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
