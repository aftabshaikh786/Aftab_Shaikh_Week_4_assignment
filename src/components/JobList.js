import React from 'react';
import JobCard from './JobCard';
import Pagination from './Pagination';

const JobList = ({ jobs, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default JobList;
