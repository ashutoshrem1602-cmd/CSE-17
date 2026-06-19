import React from "react";
import JobCard from "./JobCard.jsx";

// JobListings: renders the grid of JobCards using map().
// Shows a friendly empty state if no jobs match the current filters.
function JobListings({ jobs }) {
  return (
    <section id="jobs" className="container py-3 pb-5">
      {jobs.length > 0 ? (
        <div className="row g-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-5 fade-in">
          <i className="bi bi-emoji-frown fs-1 text-secondary"></i>
          <h4 className="font-heading mt-3">No jobs match your search</h4>
          <p className="text-secondary">Try adjusting your filters or search term.</p>
        </div>
      )}
    </section>
  );
}

export default JobListings;
