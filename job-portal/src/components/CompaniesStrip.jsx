import React from "react";
import jobsData from "../data/jobsData.js";

// CompaniesStrip: simple section listing companies currently hiring
// (satisfies the "Companies" navbar link)
function CompaniesStrip() {
  const companies = [...new Set(jobsData.map((job) => job.company))];

  return (
    <section id="companies" className="py-5" style={{ backgroundColor: "#F4FAF8" }}>
      <div className="container text-center">
        <h2 className="font-heading fw-bold mb-2" style={{ color: "#15463A" }}>
          Trusted by Growing Companies
        </h2>
        <p className="text-secondary mb-4">Companies currently hiring on JobNest</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {companies.map((name) => (
            <span
              key={name}
              className="bg-white px-4 py-2 rounded-pill shadow-sm fw-semibold small"
              style={{ color: "#1E5F4E" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompaniesStrip;
