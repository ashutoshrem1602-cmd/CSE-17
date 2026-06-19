import React from "react";

// Navbar: logo + Home / Jobs / Companies / Contact links
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <div
            className="d-flex align-items-center justify-content-center rounded-3 fw-bold text-white"
            style={{ width: "38px", height: "38px", backgroundColor: "#1E5F4E" }}
          >
            <i className="bi bi-briefcase-fill"></i>
          </div>
          <span className="font-heading fw-bold fs-4" style={{ color: "#1E5F4E" }}>
            Job<span style={{ color: "#F2A341" }}>Nest</span>
          </span>
        </a>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-lg-4 text-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#jobs">Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#companies">Companies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
