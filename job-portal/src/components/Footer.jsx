import React from "react";

// Footer: brand, quick links, social icons, copyright
function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#15463A" }} className="text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* Brand + tagline */}
          <div className="col-12 col-md-4">
            <h4 className="font-heading fw-bold mb-2">
              Job<span style={{ color: "#F2A341" }}>Nest</span>
            </h4>
            <p className="text-light small opacity-75">
              Connecting talented people with great companies. Your dream job
              is just a search away.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-6 col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 opacity-75">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#jobs" className="text-light text-decoration-none">Jobs</a></li>
              <li><a href="#companies" className="text-light text-decoration-none">Companies</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact + social icons */}
          <div className="col-6 col-md-4">
            <h6 className="fw-semibold mb-3">Get in Touch</h6>
            <p className="small opacity-75 mb-3">support@jobnest.com</p>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter / X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light opacity-25 my-4" />

        <p className="text-center small opacity-75 mb-0">
          &copy; {new Date().getFullYear()} JobNest. All rights reserved. Built
          with React, Bootstrap &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
