import React from "react";

// JobCard: displays a single job's details + an Apply Now button
function JobCard({ job }) {
  // Map job type to a badge color class defined in index.css
  const badgeClass =
    job.type === "Full-Time"
      ? "badge-full-time"
      : job.type === "Part-Time"
      ? "badge-part-time"
      : "badge-internship";

  const handleApply = () => {
    // Simple alert as required — no backend involved
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="job-card bg-white rounded-4 p-4 h-100 d-flex flex-column">
        {/* Top row: title + type badge */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="font-heading fw-bold fs-5 mb-0" style={{ color: "#1F2937" }}>
            {job.title}
          </h3>
          <span className={`badge rounded-pill px-3 py-2 ${badgeClass}`}>
            {job.type}
          </span>
        </div>

        {/* Company name */}
        <p className="fw-semibold mb-1" style={{ color: "#1E5F4E" }}>
          <i className="bi bi-building me-2"></i>
          {job.company}
        </p>

        {/* Location & Salary */}
        <div className="d-flex flex-wrap gap-3 text-secondary small mb-3">
          <span>
            <i className="bi bi-geo-alt-fill me-1"></i>
            {job.location}
          </span>
          <span>
            <i className="bi bi-cash-stack me-1"></i>
            {job.salary}
          </span>
        </div>

        {/* Short description */}
        <p className="text-secondary mb-4" style={{ fontSize: "0.92rem" }}>
          {job.description}
        </p>

        {/* Apply button pinned to bottom */}
        <button className="btn btn-apply rounded-3 py-2 mt-auto" onClick={handleApply}>
          Apply Now <i className="bi bi-arrow-right ms-1"></i>
        </button>
      </div>
    </div>
  );
}

export default JobCard;
