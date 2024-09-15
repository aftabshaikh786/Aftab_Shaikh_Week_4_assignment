import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobFilters from '../components/JobFilters';
import JobList from '../components/JobList';

// Add some mock jobs for now
const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "San Francisco",
    description: "Develop user interfaces using React.js",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "New York",
    description: "Develop RESTful APIs using Node.js",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Seattle",
    description: "Work on both frontend and backend of web applications.",
  },
  // Add more jobs as needed
];

const Home = () => {
  const [jobs, setJobs] = useState(sampleJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const filteredJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div>
      <SearchBar onSearch={() => {}} />
      <JobFilters onFilterChange={() => {}} />
      <JobList
        jobs={filteredJobs}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
