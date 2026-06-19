import React, { useState, useMemo } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FilterBar from "./components/FilterBar.jsx";
import JobListings from "./components/JobListings.jsx";
import CompaniesStrip from "./components/CompaniesStrip.jsx";
import Footer from "./components/Footer.jsx";

import jobsData from "./data/jobsData.js";

// Build dropdown option lists dynamically from the job data
const allLocations = ["All Locations", ...new Set(jobsData.map((job) => job.location))];
const allTypes = ["All Types", "Full-Time", "Part-Time", "Internship"];

// App: root component. Holds all shared state (search term + filters)
// and derives the filtered job list using useMemo for efficiency.
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All Types");

  // Recompute filtered jobs only when search/filter values change
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLocation =
        locationFilter === "All Locations" || job.location === locationFilter;

      const matchesType = typeFilter === "All Types" || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, locationFilter, typeFilter]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar
        locations={allLocations}
        types={allTypes}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        resultsCount={filteredJobs.length}
      />
      <JobListings jobs={filteredJobs} />
      <CompaniesStrip />
      <Footer />
    </div>
  );
}

export default App;
